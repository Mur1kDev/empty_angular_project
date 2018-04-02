"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PHRASES = [
    { value: "Hello world", language: "English" },
    { value: "Привет мир", language: "Russian" },
    { value: "Привiт свiт", language: "Ukrainian" },
];
var LanguageListComponent = /** @class */ (function () {
    function LanguageListComponent() {
        this.PhraseList = PHRASES;
    }
    LanguageListComponent.prototype.onSelect = function (selected) {
        this.selectedPhraseLanguage = selected.language;
    };
    LanguageListComponent = __decorate([
        core_1.Component({
            selector: "language-list",
            templateUrl: "app/language-module-list/language-list.component.html",
            styleUrls: ["app/language-module-list/language-list.component.css"]
        })
    ], LanguageListComponent);
    return LanguageListComponent;
}());
exports.LanguageListComponent = LanguageListComponent;
//# sourceMappingURL=language-list.component.js.map