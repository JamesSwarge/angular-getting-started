import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormButton } from "./formButton";
@Component({
    selector: "form-button-primary",
    template: "<form-button label=\"{{label}}\" class=\"{{class}}\" (onClick)=onButtonClicked($event)></form-button>"
})
export class FormButtonPrimary extends FormButton {
    public class = "btn-primary";
}