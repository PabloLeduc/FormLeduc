import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { ErrorHelpComponent } from './shared/error-help/error-help.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterpageComponent,
    ErrorHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
