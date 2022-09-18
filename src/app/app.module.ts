import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';


import { TrumaComponent } from './components/truma/truma.component';
import { TrumaService } from './services/truma.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TrumotComponent } from './components/trumot/trumot.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { TrumaCardComponent } from './components/truma-card/truma-card.component';


@NgModule({
  declarations: [
    AppComponent,
    TrumaComponent,
    TrumotComponent,
    TrumaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [TrumaService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
