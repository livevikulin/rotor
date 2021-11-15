import IMask from "imask";

let forms = document.querySelectorAll(".form");
let inputsPhone = document.querySelectorAll(".js-phone");

if (forms) {
    forms.forEach((form) => {
        const fields = form.querySelectorAll("input, textarea");
        fields.forEach((field) => {
            field.addEventListener("change", function () {
                const inputValue = this.value;
                inputValue !== ""
                    ? this.classList.add("input-focus")
                    : this.classList.remove("input-focus");
            });
        });
    });
}

if (inputsPhone) {
    inputsPhone.forEach((phone) => {
        const maskOptions = {
            mask: "+{7}(000)000-00-00",
        };
        let mask = IMask(phone, maskOptions);
    });
}
