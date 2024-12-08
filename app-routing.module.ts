import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { LoginComponent } from './auth/login/login.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UsersListComponent } from './users/users-list/users-list.component';

// import { DashboardComponent } from './dashboard/dashboard.component';
 import { ShowsListComponent } from './shows/shows-list/shows-list.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdmindashbaordComponent } from './admindashbaord/admindashbaord.component';
import { Advertiesment } from './Models/Advertiesment';
import { AdvertisementsRoutingModule } from './advertisements/advertisements-routing.module';
import { AddAdComponent } from './advertisements/add-ad/add-ad.component';
import { AdsListComponent } from './advertisements/ads-list/ads-list.component';
import { AddShowComponent } from './shows/add-show/add-show.component';
import { AdvertiesmentdashboardComponent } from './advertiesmentdashboard/advertiesmentdashboard.component';
import { ChanneldashbaordComponent } from './channeldashbaord/channeldashbaord.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';

// import { AdvertisementsComponent } from './advertisements/advertisements.component';
// import { MediaLibraryComponent } from './media-library/media-library.component';
// import { ScheduleComponent } from './schedule/schedule.component';
// import { ViewerFeedbackComponent } from './viewer-feedback/viewer-feedback.component';
// import { TalentManagementComponent } from './talent-management/talent-management.component';
// import { CostManagementComponent } from './cost-management/cost-management.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect root to login
  { path: 'login', component: LoginComponent }, // Define login route
  // { path: '**', redirectTo: 'login' }, // Redirect invalid routes to login

  { path: 'dashboard', component: UsersListComponent },
  { path: 'register', component: RegisterComponent },
 
  {path:'channeldashboard/:id', component:ChanneldashbaordComponent},

  
  { path: 'Channeldata', component: AddShowComponent },

{
  path: '',
  component: AdminlayoutComponent,
  children: [
    { path: 'dashboard', component: UsersListComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'addadvertiesment', component: AddAdComponent },
    { path: 'advertiesmentlist', component: AdsListComponent },
    { path: 'Channelist', component: ShowsListComponent },
    { path: 'admindashboard', component: AdmindashbaordComponent },
    {path:'advertiesmanetdashboard', component:AdvertiesmentdashboardComponent},
   // { path: 'channel-list', component: ChannelListComponent },
    //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  ],
}

  
  //{path:'dashboard', component:UsersListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
