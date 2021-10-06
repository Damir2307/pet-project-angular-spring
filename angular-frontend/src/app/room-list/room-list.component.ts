import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../country';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[];
  countryByIp: Country = new Country();
  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRoomList();
    this.roomService.getIpCountry().subscribe(data => {
      this.countryByIp = data;
    }, error => console.log(error));
  }
  private getRoomList(){
    this.roomService.getRoomList().subscribe(data => {
      this.rooms = data;
    }
      )
  }

  updateRoom(id: number){
    this.router.navigate(['update-room', id]); 
  }
}
