import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import {NgxPrintModule} from 'ngx-print';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RiddleViewComponent } from './riddle-view/riddle-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ResultDialogComponent } from './riddle-view/result-dialog/result-dialog.component';
import { FinalViewComponent } from './final-view/final-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RiddleViewComponent,
    HomeViewComponent,
    ResultDialogComponent,
    FinalViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPrintModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ResultDialogComponent]
})
export class AppModule {}
