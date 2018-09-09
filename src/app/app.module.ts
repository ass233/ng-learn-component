import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { BrotherComponent } from './brother/brother.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { ChildComponent } from './parent-and-child/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ParentAndChildComponent,
    BrotherComponent,
    LocalStorageComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
