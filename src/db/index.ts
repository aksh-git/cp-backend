import mongoose from "mongoose";

const URI = process.env.MONGO_URI || null;

const convertToBool = (fault = "false") => {
  return fault === "true";
};

export const connectToMongoDB = (MONGO_URI = URI) => {
  if (!MONGO_URI) {
    throw new Error(
      "Looks like you forget to define `MONGO_URI` environment variable."
    );
  }

  // options
  mongoose.set("strictQuery", true);
  //if (convertToBool(process.env.DEBUG)) mongoose.set("debug", true);
  mongoose.set("debug", true);

  // make connection
  mongoose.connect(MONGO_URI, {
    appName: "CirclrPe",
  });

  // listeners
  mongoose.connection.on("connected", () => {
    console.log("~ connected to database.");
  });

  mongoose.connection.on("error", (err) => {
    console.log("[MongoDB Connection ERROR]", err);
  });
};
