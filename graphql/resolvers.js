import { getByID, getMovies, addMovie, deleteMovie } from "./db";

const pensivej = {
    name: "pensivej",
    age: 18,
    gender: "male"
}

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getByID(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
};

export default resolvers;