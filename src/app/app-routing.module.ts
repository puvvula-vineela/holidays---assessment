import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HolidaydetailsComponent } from './holidaydetails/holidaydetails.component';
import { HolidayslistComponent } from './holidayslist/holidayslist.component';

const routes: Routes = [
  {path:'details/:id',component:HolidaydetailsComponent},
  {path:'list',component:HolidayslistComponent},
  {path:'', redirectTo:'/list', pathMatch:'full'},
  {path:'*', redirectTo:'/list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
