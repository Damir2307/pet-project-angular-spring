package damir.kz.model;

import javax.persistence.*;

@Entity
@Table(name="room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "country")
    private String country;
    @Column(nullable = false, columnDefinition = "TINYINT(1)", name = "on_off")
    private boolean on_off;

    public Room(){}

    public Room(String country, boolean on_off) {
        this.country = country;
        this.on_off = on_off;
    }
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public boolean isOn_off() {
        return on_off;
    }

    public void setOn_off(boolean on_off) {
        this.on_off = on_off;
    }


}
