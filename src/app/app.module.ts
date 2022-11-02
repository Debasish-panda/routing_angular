import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { Studentprofile1Component } from './studentprofile1/studentprofile1.component';
import { Studentprofile2Component } from './studentprofile2/studentprofile2.component';
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './book/bookdetails/bookdetails.component';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {path:'',redirectTo:'home', pathMatch:'full'}, //redirect to home it is base url pathmatch need to mention full means that link should not carry any other component url.
//   //{path:'', component:DashboardComponent}, //its work same like redirectTo but in this case website path will not show home but above one will show home
//   {path:'home', component:DashboardComponent},
//   {path:'contactus', component:ContactusComponent},
//   {path:'aboutus', component:AboutusComponent},
//   //{path:'**', component:PagenotfoundComponent}, // wild card routing, if there is no link it will redirect to page not found
//   {path:'aboutus/:id', component:AboutusComponent},
//   {path:'aboutus/:id/:name', component:AboutusComponent}, //for parameterised route
//   {path:'contactus/:id', component:ContactusComponent}, //parameter for button from ts file
// ];

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    AboutusComponent,
    DashboardComponent,
    PagenotfoundComponent,
    StudentComponent,
    StudentdetailsComponent,
    StudentregistrationComponent,
    Studentprofile1Component,
    Studentprofile2Component,
    BookComponent,
    BookdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
