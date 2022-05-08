const Genres = require("../models/genreModel");
const Movie = require("../models/movieModel");
const Format = require("../models/formatModel");
const Censor = require("../models/censorModel");
const Cinema = require("../models/cinemaModel");
const Screen = require("../models/screenModel");
const Ticket = require("../models/ticketModel");
const PriceCard = require("../models/priceCardModel");

const { GraphQLScalarType, Kind } = require("graphql");



const QueryStatus = {
  success: "SUCCESS",
  notFound: "NOT_FOUND",
  error: "ERROR",
};
const ResponseMessage = {
  CreateComplete: "Created successfully!",
  UpdateComplete: "Update successfully",
};
const success = (e) => ({
  status: QueryStatus.success,
  message: ResponseMessage.UpdateComplete,
  data: [e],
});
const error = (e) => ({ status: QueryStatus.error, message: e });

const resolvers = {
  

  

  // MutationResponse: {
  //   __resolveType(mutationResponse, context, info) {
  //     return null;
  //   },
  // },
};

module.exports = { resolvers };
