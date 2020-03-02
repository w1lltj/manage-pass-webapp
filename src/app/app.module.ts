import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {RouterModule, Routes} from '@angular/router';
import {PasswordManagementComponent} from './password-management/password-management.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ContentModalComponent} from './shared/content-modal.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'password-management', component: PasswordManagementComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DashboardComponent,
    PasswordManagementComponent,
    ContentModalComponent
  ],
  entryComponents: [
    ContentModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
