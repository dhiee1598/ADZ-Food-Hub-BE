import ExpressConfig from "./app";
import env from "./utilities/env";
import sequelize from "./utilities/sequelize";

const SERVER_PORT = env.PORT;
const app = ExpressConfig();

const StartServer = async () => {
  try {
    // * Sync the Sequelize connection with the database to ensure models are updated
    await sequelize.sync();

    // * Log a success message upon successful database connection
    console.log(`Connection to database has been established successfully.`);

    // * Start the server and listen on the specified port
    app.listen(SERVER_PORT, () => {
      console.log(`Listening: http://localhost:${SERVER_PORT}`);
    });
  } catch (error) {
    // ! Log an error message if unable to connect to the database
    console.error(`Unable to connect to the database: ${error}`);
  }
};

StartServer();
