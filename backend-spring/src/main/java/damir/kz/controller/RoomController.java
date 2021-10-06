package damir.kz.controller;

import damir.kz.exception.ResourceNotFoundException;
import damir.kz.model.Country;
import damir.kz.model.Room;
import damir.kz.repository.RoomRepository;
import damir.kz.service.IpInfoDto;
import io.ipinfo.api.errors.RateLimitedException;
import org.checkerframework.checker.units.qual.C;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @GetMapping("/rooms")
    public List<Room> getAllRooms(){
        return roomRepository.findAll();
    }

    @PostMapping("/rooms")
    public Room createRoom(@RequestBody Room room){
        return roomRepository.save(room);
    }

    @GetMapping("/rooms/{id}")
    public ResponseEntity<Room> getRoomById(@PathVariable Long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Room not exist with id :" + id));
        return ResponseEntity.ok(room);}

    @PutMapping("/rooms/{id}")
    public ResponseEntity<Room> updateRoom(@PathVariable Long id, @RequestBody Room roomDetails){
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("room not exist with id :" + id));

        room.setCountry(roomDetails.getCountry());
        room.setOn_off(roomDetails.isOn_off());

        Room updatedEmployee = roomRepository.save(room);
        return ResponseEntity.ok(updatedEmployee);
    }

    @GetMapping("/ip")
    public ResponseEntity<Country> bar(HttpServletRequest request) throws RateLimitedException {
        RestTemplate restTemplate=new RestTemplate();
        HttpHeaders httpHeaders=new HttpHeaders();
        HttpEntity requestEntity=new HttpEntity(null,httpHeaders);
        ResponseEntity<IpInfoDto> responseEntity = restTemplate.exchange("https://ipinfo.io/?token=3d5072cb266700", HttpMethod.GET, requestEntity, IpInfoDto.class);
        Country country=new Country(responseEntity.getBody().getCountry());
        return ResponseEntity.ok(country);

    }


}
