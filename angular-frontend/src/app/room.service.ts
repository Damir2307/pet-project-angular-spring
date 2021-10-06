import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private ipUrl = "http://localhost:8080/api/v1/ip";
  private baseUrl = "http://localhost:8080/api/v1/rooms";
  constructor(private httpClient: HttpClient) { }
  getIpCountry(): Observable<Country> {
    return this.httpClient.get<Country>(`${this.ipUrl}`);
  }
  getRoomList(): Observable<Room[]>{
    return this.httpClient.get<Room[]>(`${this.baseUrl}`);
  }
  createRoom(room: Room): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,room);
  }
  getRoomById(id: number): Observable<Room>{
    return this.httpClient.get<Room>(`${this.baseUrl}/${id}`);
  }
  updateRoom(id: number, room: Room): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,room);
  }
}
