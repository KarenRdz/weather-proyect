import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {WeatherService} from './weather.service/weather.service.component';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details.component/details.component.component';
import { DashboardComponent } from './dashboard.component/dashboard.component.component';


const appRoutes: Routes = [
  { path: 'details/:location',      component: DetailsComponent },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
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
    DetailsComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]




})
export class AppModule { }
