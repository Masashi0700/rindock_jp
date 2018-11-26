import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomsTopComponent } from './rooms-top/rooms-top.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: '', redirectTo: '/rooms-top', pathMatch: 'full' },
  { path: 'rooms-top', component: RoomsTopComponent },
  { path: 'rooms/:id', component: RoomsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
