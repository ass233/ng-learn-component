import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateInterporationComponent } from './template-interporation/template-interporation.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateInterporationComponent,
    TemplateRefVarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
