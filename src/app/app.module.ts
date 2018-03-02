import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule, HttpClientModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
export class AppModule {

}
