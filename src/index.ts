import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input1 = document.querySelector('input[name="input1"]') as HTMLInputElement;
const input2 = document.querySelector('input[name="input2"]') as HTMLInputElement;

if (button && input1 && input2) {
    button.addEventListener("click", () => {
        concatenation(input1.value, input2.value);
    });
};