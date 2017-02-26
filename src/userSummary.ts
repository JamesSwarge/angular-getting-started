import { Output, EventEmitter, ElementRef, Component, Input } from "@angular/core";
@Component({
    selector: "user-summary",
    templateUrl: "src/UserSummary.html"
})
export class UserSummary {
    @Input() firstName: string = null;
    @Output() onFirstNameChanged: any = new EventEmitter<string>();

    public printFirstName() {
        console.log(this.firstName);
    }
    public onValueChange() {
        console.log(this.firstName);
        this.onFirstNameChanged.emit(this.firstName)
    }
}