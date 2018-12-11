import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

import { RoomsTopComponent } from './rooms-top/rooms-top.component';
import { RoomsComponent } from './rooms/rooms.component';
import { UsersComponent } from './users/users.component';
import { PostTimelineComponent } from './post-timeline/post-timeline.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'rooms', component: RoomsTopComponent },
  { path: 'rooms/:id', component: RoomsComponent },
  { path: 'users/:id', component: UsersComponent },
  { path: 'index', component: PostTimelineComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
