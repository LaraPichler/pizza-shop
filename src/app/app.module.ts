import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PizzaListComponent } from './Pizza/pizza-list/pizza-list.component';
import { HomeComponent } from './home/home.component';
import { SpeisekarteComponent } from './speisekarte/speisekarte.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pizza-list', component: PizzaListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    HeaderComponent,
    PizzaListComponent,
    HomeComponent,
    SpeisekarteComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
