import MicroModal from "micromodal";

const forms = document.querySelectorAll(".form");
const orderForms = document.querySelectorAll(".order-form");

const validateEmail = (email) => {
    var a =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return a.test(email);
};

const validate = (form) => {
    const inputs = form.querySelectorAll(".input, .textarea");
    const mails = document.querySelectorAll('[name="mail"]');
    let hasError = false;

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", function () {
            this.parentElement.classList.remove("error-input");
        });

        if (!inputs[i].value) {
            inputs[i].parentElement.classList.add("error-input");
            inputs[0].focus();
            hasError = true;
        }

        mails.forEach((mail) => {
            mail.addEventListener("input", () => {
                if (!validateEmail(mail.value)) {
                    mail.parentElement.classList.add("error-input");
                    hasError = true;
                }
            });
        });
    }
    return !hasError;
};

forms.forEach((form) => {
    const action = form.action;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const isValid = validate(form);

        if (!isValid) {
            return;
        }

        const formData = new FormData(this);

        fetch(action, {
            method: "POST",
            body: formData,
        }).then((response) => {
            if (response.ok) {
                const modalProduct = document.getElementById("modal-product");

                if (modalProduct.classList.contains("is-open")) {
                    MicroModal.close("modal-product");
                }
                MicroModal.show("modal-succsess");

                const fields = form.querySelectorAll("input, textarea");
                fields.forEach((field) => {
                    field.classList.remove("input-focus");
                });

                form.reset();
            }
        });
    });
});

// orderForms.forEach((form) => {
//     const action = form.action;

//     form.addEventListener("submit", function (e) {
//         e.preventDefault();
//         const isValid = validate(form);

//         if (!isValid) {
//             return;
//         }

//         const formData = new FormData(this);

//         fetch(action, {
//             method: "POST",
//             body: formData,
//         }).then((response) => {
//             if (response.ok) {
//                 const fields = form.querySelectorAll("input, textarea");
//                 fields.forEach((field) => {
//                     field.classList.remove("input-focus");
//                 });
//                 form.reset();
//             }
//         });
//     });
// });
