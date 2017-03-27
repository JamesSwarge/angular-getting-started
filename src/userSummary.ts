import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "user-summary",
    templateUrl: "src/userSummary.html"
})
export class UserSummary {
    // Input + "Change"=Output
    @Input() firstName: string;
    @Output() firstNameChange: EventEmitter<string> = new EventEmitter<string>();
    public onChanged() {
        this.firstNameChange.emit(this.firstName);
    }
}