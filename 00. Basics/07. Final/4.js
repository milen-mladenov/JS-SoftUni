function movieRating(input) {


    let numberOfMovies = Number(input[0]);
    let maxRating = Number.MIN_SAFE_INTEGER
    let bestMovie = "";
    let minRating = Number.MAX_SAFE_INTEGER
    let worstMovie = "";
    let totalScore = 0;
    let inputL = input.length;

    for (let index = 1; index < inputL; index++) {
        let movieName = input[index++];
        let movieScore = Number(input[index]);
        totalScore += movieScore;

        if (movieScore > maxRating) {
            maxRating = movieScore;
            bestMovie = movieName;
        } else if (movieScore < minRating) {
            minRating = movieScore;
            worstMovie = movieName;
        }
    }

    let averageScore = totalScore / numberOfMovies;
    console.log(`${bestMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${worstMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${averageScore.toFixed(1)}`);

}

movieRating(["5", "A Star is Born", "7.8", "Creed 2", "7.3",
    "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"])