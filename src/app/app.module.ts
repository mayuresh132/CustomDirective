import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementnativeComponent } from './elementnative/elementnative.component';
import { NativeEleRefDirective } from './elementnative/native-ele-ref.directive';
import { MyTextBoxDirective } from './elementnative/my-text-box.directive';

@NgModule({
  declarations: [
    AppComponent,
    ElementnativeComponent,
    NativeEleRefDirective,
    MyTextBoxDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
