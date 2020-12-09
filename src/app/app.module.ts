import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AccountingComponent } from './accounting/accounting.component';
import { ComputingComponent } from './computing/computing.component';
import { Courses1Component } from './courses1/courses1.component';
import { Courses2Component } from './courses2/courses2.component';
import { Courses3Component } from './courses3/courses3.component';
import { Courses4Component } from './courses4/courses4.component';
import { Courses5Component } from './courses5/courses5.component';
import { Courses6Component } from './courses6/courses6.component';
import { CriminologyComponent } from './criminology/criminology.component';
import { EarlyYearsComponent } from './early-years/early-years.component';
import { EventsComponent } from './events/events.component';
import { FaqsComponent } from './faqs/faqs.component';
import { JournalismComponent } from './journalism/journalism.component';
import { NewsComponent } from './news/news.component';
import { SupportComponent } from './support/support.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { FormComponent } from './form/form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AccountingComponent,
    ComputingComponent,
    Courses1Component,
    Courses2Component,
    Courses3Component,
    Courses4Component,
    Courses5Component,
    Courses6Component,
    CriminologyComponent,
    EarlyYearsComponent,
    EventsComponent,
    FaqsComponent,
    JournalismComponent,
    NewsComponent,
    SupportComponent,
    NewsArticleComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
