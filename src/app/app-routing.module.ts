import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants } from './constants/constants';
import { AuthGuard } from './services/authGuard.service';

const routes: Routes = [
  //Common
  // {path: Constants.ROUTE_HOME, component: HomePageComponent},
  // {path: Constants.ROUTE_RESULTS, component: ResultPageComponent, canActivate: [AuthGuard]},
  //Required
  // {path: '', redirectTo: '/' + Constants.HOME, pathMatch: 'full'},
  // {path: '**',   redirectTo: '/' + Constants.HOME}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
