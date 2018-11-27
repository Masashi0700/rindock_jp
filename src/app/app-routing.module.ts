import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

import { RoomsTopComponent } from './rooms-top/rooms-top.component';
import { RoomsComponent } from './rooms/rooms.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/rooms-top', pathMatch: 'full' },
  { path: 'rooms-top', component: RoomsTopComponent },
  { path: 'rooms/:id', component: RoomsComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UsersComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
