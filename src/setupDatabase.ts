import mongoose from "mongoose";
import { config } from "./config";

export default () => {
  const connect = () => {
    mongoose
      .connect(
        `${
          config.NODE_ENV == "development"
            ? config.DATABASE_URL_DEV
            : config.NODE_ENV == "production"
            ? config.DATABASE_URL_PROD
            : ""
        }`
      )
      .then(() => {
        // TODO: Change to logging library later
        console.log("Successfully connected to database.");
      })
      .catch((error) => {
        // TODO: Change to logging library later
        console.log("Error connecting to database.", error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect);
};
