import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "form-button",
    template: "<button class=\"btn {{class}}\" type=\"button\" (click)=onButtonClicked()>{{label}}</button>"
})
export class FormButton {
    @Input() class: string;
    @Input() label: string;
    @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
    private name = "form-button";
    public onButtonClicked() {
        this.onClick.emit();
    }
}