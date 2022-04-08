function gramophone(band, album, song){

    let timeOfSongPlate = (album.length * band.length) * song.length / 2;
    let sum = timeOfSongPlate / 2.5;

    console.log(`The plate was rotated ${Math.ceil(sum)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')