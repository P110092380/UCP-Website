import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AccountingComponent} from './accounting/accounting.component';
import {ComputingComponent} from './computing/computing.component';
import {Courses1Component} from './courses1/courses1.component';
import {Courses2Component} from './courses2/courses2.component';
import {Courses3Component} from './courses3/courses3.component';
import {Courses4Component} from './courses4/courses4.component';
import {Courses5Component} from './courses5/courses5.component';
import {Courses6Component} from './courses6/courses6.component';
import {CriminologyComponent} from './criminology/criminology.component';
import {EarlyYearsComponent} from './early-years/early-years.component';
import {EventsComponent} from './events/events.component';
import {FaqsComponent} from './faqs/faqs.component';
import {JournalismComponent} from './journalism/journalism.component';
import {NewsComponent} from './news/news.component';
import {SupportComponent} from './support/support.component';
import {NewsArticleComponent} from './news-article/news-article.component';
import {FormComponent} from'./form/form.component';
import { from } from 'rxjs';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'accounting', component: AccountingComponent},
{path: 'computing', component: ComputingComponent},
{path: 'courses.1', component: Courses1Component},
{path: 'courses.2', component: Courses2Component},
{path: 'courses.3', component: Courses3Component},
{path: 'courses.4', component: Courses4Component},
{path: 'courses.5', component: Courses5Component},
{path: 'courses.6', component: Courses6Component},
{path: 'criminology', component: CriminologyComponent},
{path: 'earlyYears', component: EarlyYearsComponent},
{path: 'events', component: EventsComponent},
{path: 'faq', component: FaqsComponent},
{path: 'journalism', component: JournalismComponent},
{path: 'news', component: NewsComponent},
{path: 'support', component: SupportComponent},
{path: 'newsArticle', component:NewsArticleComponent},
{path: 'form', component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
