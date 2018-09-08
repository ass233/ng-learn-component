import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateInterporationComponent } from './template-interporation/template-interporation.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { ValueBindingComponent } from './value-binding/value-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FontResizeComponent } from './twoway-binding/font-resize/font-resize.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwichComponent } from './ng-switch/ng-switch.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateInterporationComponent,
    TemplateRefVarComponent,
    ValueBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    FontResizeComponent,
    NgIfComponent,
    NgForComponent,
    NgSwichComponent,
    NgModelComponent,
    NgClassComponent,
    NgStyleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
