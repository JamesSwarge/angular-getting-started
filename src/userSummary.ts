import { Output, EventEmitter, ElementRef, Component, Input, OnChanges } from "@angular/core";
@Component({
    selector: "user-summary",
    templateUrl: "src/UserSummary.html"
})
export class UserSummary{
    @Input() firstName: string = null;
    @Output() firstNameChange: any = new EventEmitter<string>();
    public onChange(newValue: string) {
        console.log(newValue);
        this.firstNameChange.emit(newValue);
    }
}