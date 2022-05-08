exports.Mutation = {
    // Create Price Card
    createPriceCard: async (_, args) => {
      try {
        const newPCard = await PriceCard.create(args);
        return newPCard;
      } catch (errors) {
        throw new Error(errors.message);
      }
    },

    // Add ticket type to Price card
    addTicketToPriceCard: async (_, args) => {
      try {
        const addedTicketPriceCard = await PriceCard.findByIdAndUpdate(
          { _id: args._id },
          { $push: { tickets: args.dataTicket } }
        ).populate("tickets");
        return addedTicketPriceCard;
      } catch (err) {
        throw new Error(err.message);
      }
    },
    // Remove ticket type from Price card!!!!!!!!!
    removeTicketFromPriceCard: async (_, args) => {
      try {
        const deletedFromPriceCard = await PriceCard.findOneAndUpdate(
          { _id: args._id },
          { $pull: { tickets: args.dataTicket } },
          { new: true },
          function (err) {
            if (err) {
              console.log(err);
            }
          }
        ).populate("tickets");
        console.log(args.dataTicket);
        return deletedFromPriceCard;
      } catch (err) {
        throw new Error(err.message);
      }
    },

    // Create ticket
    createTicket: async (_, args) => {
      try {
        const newTicket = await Ticket.create(args);
        return newTicket;
      } catch (err) {
        throw new Error(err.message);
      }
    },
    // Delete ticket
    deleteTicket: async (_, args) => {
      const delTicket = await Ticket.findByIdAndDelete(args);
      return delTicket;
    },

    // Update cinema
    updateCinema: async (parent, args) => {
      try {
        const editedCinema = await Cinema.findByIdAndUpdate(
          {
            _id: args._id,
          },
          args.data,
          {
            new: true,
          }
        ).populate("screens");
        return editedCinema;
      } catch (err) {
        throw new Error(err.message);
      }
    },

    // Add screen to Cinema !!! it is duplicated issue
    addScreenToCinema: async (_, args) => {
      try {
        const addedScreenToCinema = await Cinema.findByIdAndUpdate(
          { _id: args._id },
          { $push: { screens: args.data } }
        ).populate("screens");
        return {
          code: 200,
          success: true,
          message: `Successfully`,
          cinema: addedScreenToCinema,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          cinema: null,
        };
      }
    },

    // Create screen
    createScreen: async (parent, args) => {
      try {
        const newScreen = await Screen.create(args);
        return newScreen;
      } catch (err) {
        throw new Error(err.message);
      }
    },

    // Create censor
    createCensor: async (parent, args) => {
      const newCensor = await Censor.create(args);
      return newCensor;
    },
    // Update censor
    updateCensor: async (parent, args) => {
      const editedCensor = await Censor.findByIdAndUpdate(
        {
          _id: args._id,
        },
        args.data,
        {
          new: true,
        }
      );
      return editedCensor;
    },
    // Delete censor
    deleteCensor: async (parent, args) => {
      const deletedCensor = await findByIdAndDelete({ _id: args._id });
      return deletedCensor;
    },
    // Create genre
    createGenre: async (parent, args) => {
      const newGenre = args;
      const createdGenre = await Genres.create(newGenre);
      return createdGenre;
    },

    // Update genre
    updateGenre: async (parent, args) => {
      const updatingGenre = args;
      const updatedGenre = Genres.findByIdAndUpdate(
        { _id: updatingGenre._id },
        { name: updatingGenre.name },
        {
          new: true,
        }
      );
      return updatedGenre;
    },

    // Delete genre
    deleteGenre: async (parent, args) => {
      const deletedGenre = await Genres.findByIdAndDelete({
        _id: args._id,
      });
      return deletedGenre;
    },

    // Create format
    createFormat: async (parent, args) => {
      try {
        const newFormat = await Format.create(args);
        return newFormat;
      } catch (err) {
        console.error(err.message);
      }
    },

    // Delete format
    deleteFormat: async (parent, args) => {
      const deletedFormat = await Format.findByIdAndDelete({
        _id: args._id,
      });
      return deletedFormat;
    },

    // Create Movie
    createMovie: async (parent, args) => {
      const foundMovie = await Movie.find({ title: args.data.title });
      if (!foundMovie) {
        const newMovie = await Movie.create(args.data).populate("genres");
        return newMovie;
      }
      return new Error("Founded it's movie");
    },

    // Update Movie
    updateMovie: async (parent, args) => {
      try {
        const updateResult = await Movie.findByIdAndUpdate(
          { _id: args._id },
          args.data,
          {
            new: true,
          }
        )
          .populate("genres")
          .populate("format")
          .populate("censor");
        return success(updateResult);
      } catch (err) {
        return error(err.message);
      }
    },

    // Delete Movie
    deleteMovie: async (parent, args) => {
      const deletedMovie = await Movie.findByIdAndDelete({ _id: args._id });
      return deletedMovie;
    },
  }