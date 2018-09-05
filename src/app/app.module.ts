import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateInterporationComponent } from './template-interporation/template-interporation.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { ValueBindingComponent } from './value-binding/value-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateInterporationComponent,
    TemplateRefVarComponent,
    ValueBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
