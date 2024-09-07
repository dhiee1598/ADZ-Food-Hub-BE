import env from "./utilities/env";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { ErrorHandler, NotFound } from "./middlewares/error.handler";
import UserRoutes from "./routes/user.route";
import TokenRoutes from "./routes/token.route";

const ExpressConfig = (): Application => {
  const app = express();

  // * MIDDLEWARE SETUP
  app.use(bodyParser.json()); // Parse JSON bodies of requests
  app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies of requests
  app.use(
    cors({
      credentials: true, // Allow requests from the specified frontend origin
      origin: env.FRONTEND_URL, // Allow sending cookies from frontend to backend
    })
  );
  app.use(morgan("dev")); // Log HTTP requests to the console in development mode
  app.use(cookieParser()); // Parse cookies attached to the requests

  // * MAIN HEALTH CHECK ROUTE
  app.get("/main/healthcheck", (_req: Request, res: Response) => {
    res.status(200).json({ message: "HAPPY CODING - 👋✨🌍" });
  });

  // * API ROUTES FOR TOKEN
  app.use("/api/auth/token", TokenRoutes);

  // * API ROUTES FOR USERS
  app.use("/api/users", UserRoutes);

  // ! CATCH ALL ERROR HANDLING
  app.use(NotFound);
  app.use(ErrorHandler);

  return app;
};

export default ExpressConfig;
