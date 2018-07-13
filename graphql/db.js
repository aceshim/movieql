export let movies = [
    {
        id: 1,
        name: "Avengers - Infinity War",
        score: 8
    },
    {
        id: 2,
        name: "Ant-Man and the Wasp",
        score: 9
    },
    {
        id: 3,
        name: "Hotel Transylvania",
        score: 3
    },
    {
        id: 4,
        name: "Skyscrapper",
        score: 5
    },
    {
        id: 5,
        name: "Incredibles 2",
        score: 10
    }
]

export const getByID = id => {
    const filteredPeople = people.filter(person => String(id) === person.id);
    return filteredPeople[0]
}

export const getMovies = () => movies;

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id));
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length+1}`,
        name, 
        score
    };
    movies.push(newMovie);
    return newMovie;
}