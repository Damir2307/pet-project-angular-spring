import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../room';
import { Country } from '../country';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  room: Room = new Room();
  countryByIp: Country = new Country();
  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit(): void {
    this.roomService.getIpCountry().subscribe(data => {
      this.countryByIp = data;
    }, error => console.log(error));
  }
  saveRoom(){
    this.roomService.createRoom(this.room).subscribe(data => {
      console.log(data);
      this.goToRoomList();
    },
    error => console.log(error));
  }
  goToRoomList(){
    this.router.navigate(['/rooms']);

  }
  
  onClick(){

    if (this.room.on_off == false) {
      this.room.on_off = true;

    } else {
        this.room.on_off= false;
    }
  }
  onSubmit(){
    console.log(this.room);
    this.saveRoom();
  }
}
