import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './details/details.component';
import { WeatherService } from './weather.service';
import { CardDetailsComponent } from './card-details/card-details.component';

const appRoutes: Routes = [
  {path:'details/:location', component: DetailsComponent},
  { path: 'dashboard',     component: DashboardComponent  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DashboardComponent,
    NavComponent,
    DetailsComponent,
    CardDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true }
    ),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
