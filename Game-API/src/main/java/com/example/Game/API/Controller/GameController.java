package com.example.Game.API.Controller;

import com.example.Game.API.Model.Player;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
@RestController
public class GameController {

    CopyOnWriteArrayList<Player> listOfPlayers = new CopyOnWriteArrayList<>();
    static String resVal;

    @PostMapping
    public Player createPlayer(@RequestBody Player incomingPlayer){
        listOfPlayers.add(incomingPlayer);
        return incomingPlayer;
    }

    @GetMapping
    public List<Player> getAllPlayers() {
        return listOfPlayers;
    }

    @GetMapping(path = "/{id}")
    public Player getSpecificPlayer(@PathVariable String id) {
        Player existingPLayer = listOfPlayers.stream().filter(
                (currPlayer) -> {
                    return currPlayer.id.equals(id);
                }
        ).findFirst().get();

        return existingPLayer;
    }

    @PutMapping(path = "/{id}")
    public Player updateSpecificPlayer(@PathVariable String id, @RequestBody Player incomingPlayer) {
        Player existingPlayer = getSpecificPlayer(id);
        existingPlayer.name = incomingPlayer.name;
        return existingPlayer;
    }
    @DeleteMapping(path = "/{id}")
    public Player removePlayer(@PathVariable String id) {
        Player existingPlayer = getSpecificPlayer(id);
        listOfPlayers.remove(existingPlayer);
        return existingPlayer;
    }
}
