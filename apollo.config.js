const PORT = process.env.PORT || 4001;
module.exports = {
    client: {
      service: "my-graphql-app",
      url: `http://localhost:${PORT}/graphql`
    }
  };