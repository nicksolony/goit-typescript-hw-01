import { concatenation } from "./concatenation";
const button = document.querySelector("button");
const input1 = document.querySelector('input[name="input1"]');
const input2 = document.querySelector('input[name="input2"]');
if (button && input1 && input2) {
    button.addEventListener("click", () => {
        concatenation(input1.value, input2.value);
    });
}
;
//# sourceMappingURL=index.js.map