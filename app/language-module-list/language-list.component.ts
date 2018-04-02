import { Component } from "@angular/core";
import { Pharase } from "./pharase";

const PHRASES: Pharase[] = [
    { value : "Hello world", language : "English" },
    { value : "Привет мир", language : "Russian" },
    { value : "Привiт свiт", language : "Ukrainian" },
];

@Component({
    selector: "language-list",
    templateUrl : "app/language-module-list/language-list.component.html",
    styleUrls: ["app/language-module-list/language-list.component.css"]
})
export class LanguageListComponent {
    PhraseList: Pharase[] = PHRASES;
    selectedPhraseLanguage: string;

    onSelect(selected: Pharase) {
        this.selectedPhraseLanguage = selected.language;
    }
}
