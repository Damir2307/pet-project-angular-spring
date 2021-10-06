import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './create-room/create-room.component';
import { Room } from './room';
import { RoomListComponent } from './room-list/room-list.component';
import { UpdateRoomsComponent } from './update-rooms/update-rooms.component';

const routes: Routes = [
  {path: 'rooms', component: RoomListComponent},
  {path: 'create-room', component: CreateRoomComponent},
  {path: '', redirectTo: 'rooms', pathMatch: 'full'},
  {path: 'update-room/:id', component: UpdateRoomsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
