const pensivej = {
    name: "pensivej",
    age: 18,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => pensivej
    }
};

export default resolvers;