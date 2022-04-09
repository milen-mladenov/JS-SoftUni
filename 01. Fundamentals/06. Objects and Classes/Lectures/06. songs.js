function songList(input) {

    let songs = [];
    let numberOfSongs = input.shift();
    let typeOfSong = input.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split("_");
        let song = new Song(type, name, time);
        songs.push(song)
    }

    if (typeOfSong === "all") {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filreted = songs.filter((i) => i.type === typeOfSong);
        filreted.forEach((i) => console.log(i.name));
    }

}

songList([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)
console.log("------");
songList([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
)
console.log("-=------===");
songList([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)