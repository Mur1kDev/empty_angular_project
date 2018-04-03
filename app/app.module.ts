import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SecondComponent } from "./second.component";
import { CounterHostComponent } from "./counter/counter-host.component";
import { CounterComponent } from "./counter/counter.component";

@NgModule(
{
    imports: [BrowserModule], 
    declarations: [AppComponent, CounterHostComponent, CounterComponent], 
    bootstrap: [AppComponent, CounterHostComponent]
})
export class AppModule {

}