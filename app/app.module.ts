import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LanguageListComponent } from "./language-module-list/language-list.component";

@NgModule(
{
    imports: [BrowserModule], 
    declarations: [AppComponent, LanguageListComponent], 
    bootstrap: [AppComponent]
})
export class AppModule {

}