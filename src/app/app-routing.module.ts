import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ActivatechildGuard } from './activatechild.guard';
import { AuthGuard } from './auth.guard';
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './book/bookdetails/bookdetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeactivateguardGuard } from './deactivateguard.guard';
import { ResolvGuard } from './resolv.guard';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { Studentprofile1Component } from './studentprofile1/studentprofile1.component';
import { Studentprofile2Component } from './studentprofile2/studentprofile2.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
//import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //redirect to home it is base url pathmatch need to mention full means that link should not carry any other component url.
  //{path:'', component:DashboardComponent}, //its work same like redirectTo but in this case website path will not show home but above one will show home
  { path: 'home', component: DashboardComponent },
  //{ path: 'contactus', component: ContactusComponent, data: { id: 1022, name: 'debu pana' } },
  { path: 'contactus', component: ContactusComponent, canDeactivate: [DeactivateguardGuard] },
  { path: 'aboutus', component: AboutusComponent, canDeactivate: [DeactivateguardGuard] }, //canActivate: [AuthGuard] },
  //{path:'**', component:PagenotfoundComponent}, // wild card routing, if there is no link it will redirect to page not found
  //{path:'aboutus/:id', component:AboutusComponent},
  //{path:'aboutus/:id/:name', component:AboutusComponent}, //for parameterised route
  //{path:'contactus/:id', component:ContactusComponent}, //parameter for button from ts file
  { path: 'student', component: StudentComponent },
  //{path:'student/studentdetails', component: StudentdetailsComponent},{path:'student/studentregistration', component: StudentregistrationComponent}, //this is not right way, during common gurd if we use it will take problem
  {
    path: 'student', //canActivateChild:[ActivatechildGuard], //only one children. //this guard will work but it will resist access to student as well.
    children: [
      { path: '', component: StudentComponent, },
      { path: 'studentregistration', component: StudentregistrationComponent },
      {
        path: '', canActivateChild: [ActivatechildGuard],
        children:
          [{ path: 'studentdetails', component: StudentdetailsComponent },]

      }, //here we can use canActivate:[AuthGuard] this will work in children

    ]
  },

  // for childrens of children or nested children
  // {
  //   path: 'student',
  //   children: [
  //     { path: '', component: StudentComponent, },
  //     {
  //       path: 'studentdetails',
  //       children: [
  //         { path: '', component: StudentdetailsComponent },
  //         { path: 'studentprofile1', component: Studentprofile1Component },
  //         { path: 'studentprofile2', component: Studentprofile2Component },
  //       ]

  //     },
  //     { path: 'studentregistration', component: StudentregistrationComponent },
  //   ]
  // },

  { path: 'book', component: BookComponent },
  { path: 'bookdetails/:id', component: BookdetailsComponent },
  { path: 'bookdetails/:id', component: BookdetailsComponent, resolve:{objbook:ResolvGuard} },

  { path: 'aboutusnew', component: AboutusComponent, outlet: 'aboutrouter' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
