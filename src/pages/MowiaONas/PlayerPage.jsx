import React from "react";
import { useParams } from "react-router-dom";
import Player from "./Player";

export default function PlayerPage() {
    let { playerId } = useParams();

    let playerData = fetchPlayerData(playerId);

    return <Player {...playerData} />;
}

function fetchPlayerData(playerId) {
    const players = {
        '1': { title: 'Ulice Poznania 1', description: 'Odcinek 4 Podcastu o ulicach Poznania z własną historią', date: '01-02-2024', radioName: 'Radio Poznan', link: 'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Ulice_Poznania_21.04.mp3' },
        '2': { title: 'Ulice Poznania 2', description: 'Odcinek 5 Podcastu o ulicach Poznania z własną historią', date: '01-02-2024', radioName: 'Radio Poznan', link: 'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Ulice_Poznania_28.04.mp3' },
        '3': { title: 'Ulice Poznania 3', description: 'Odcinek 2 Podcastu o ulicach Poznania z własną historią', date: '01-02-2024', radioName: 'Radio Poznan', link: 'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Ulice_Poznania_05.05.mp3' },
        '4': { title: 'Ulice Poznania 4 - Poznań rzeczny', description: 'Odcinek 6 Podcastu o ulicach Poznania z własną historią', date: '01-02-2024', radioName: 'Radio Poznan', link: 'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Historia_Żywa_-_Poznań_rzeczny.mp3' },
        '5': { title: 'Ulice Poznania 5 - Poznań wyspowy', description: 'Odcinek 7 Podcastu o ulicach Poznania z własną historią', date: '01-02-2024', radioName: 'Radio Poznan', link: 'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Historia_żywa_-_Poznań_wyspowy.mp3' },
        '6': { title: 'Ulice Poznania 6', description: 'Odcinek 1 Podcastu o ulicach Poznania z własną historią', date: '01-02-2024', radioName: 'Radio Poznan', link: 'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Ulice_09.06.24.mp3' },
        '7': { title: 'Ulice Poznania 7', description: 'Odcinek 3 Podcastu o ulicach Poznania z własną historią', date: '01-02-2024', radioName: 'Radio Poznan', link: 'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Ulice_Poznania_16.06.mp3' },
    };

    // Return the data for the requested player
    return players[playerId];
}