const dateScalar = new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    serialize(value) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    },
    parseValue(value) {
      return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then Date
      }
      return null; // Invalid hard-coded value (not an integer)
    },
  });

exports.Query = {
    getPriceCards: async () => {
      const priceCards = await PriceCard.find().populate("tickets");
      console.log(priceCards);
      return priceCards;
    },
    getTickets: async () => {
      const tickets = await Ticket.find();
      return tickets;
    },
    getScreens: async () => {
      try {
        const screens = await Screen.find();
        return screens;
      } catch (err) {
        throw new Error(err.message);
      }
    },

    getCinemas: async () => {
      try {
        const cinemas = await Cinema.find().populate("screens");
        return cinemas;
      } catch (err) {
        throw new Error(err.message);
      }
    },

    getFormat: async () => {
      try {
        const formats = await Format.find();
        return formats;
      } catch (err) {
        throw new Error(err.message);
      }
    },

    getGenres: async () => {
      try {
        const genres = await Genres.find();
        return genres;
      } catch (err) {
        throw new Error(err.message);
      }
    },

    getCensors: async () => {
      try {
        const censors = await Censor.find();
        return censors;
      } catch {
        err;
      }
      {
        throw new Error(err.message);
      }
    },

    getMovies: async () => {
      try {
        const movies = await Movie.find()
          .populate("genres")
          .populate("format")
          .populate("censor");
        return movies;
      } catch (err) {
        throw new Error(err.message);
      }
    },

    movieDetail: async (parent, args) => {
      const findMovie = await Movie.find({ _id: args._id })
        .populate("genres")
        .populate("format")
        .populate("censor");
      return findMovie;
    },
  }