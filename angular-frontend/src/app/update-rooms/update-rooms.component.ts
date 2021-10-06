import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../country';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-update-rooms',
  templateUrl: './update-rooms.component.html',
  styleUrls: ['./update-rooms.component.css']
})
export class UpdateRoomsComponent implements OnInit {

  id: number;
  room: Room = new Room();
  roomChecker: Room = new Room();
  countryByIp: Country = new Country();
  checker: boolean = false;
  constructor(private roomService: RoomService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.roomService.getIpCountry().subscribe(data => {
      this.countryByIp = data;
    }, error => console.log(error));
    this.roomService.getRoomById(this.id).subscribe(data => {
      this.room = data;
    }, error => console.log(error));}

  onSubmit(){
    this.roomService.updateRoom(this.id, this.room).subscribe( data =>{
      this.goToRoomList();
    }
    , error => console.log(error));
  }
  onClick(){
        if (this.room.on_off == false) {
          this.room.on_off = true;

        } else {
            this.room.on_off= false;
        }
  }

  goToRoomList(){
    this.router.navigate(['/rooms']);
  }
}