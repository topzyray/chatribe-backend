import express, { Express } from "express";

import { ChatribeServer } from "./setupServer";

class Application {
  public initialize(): void {
    const app: Express = express();
    const server: ChatribeServer = new ChatribeServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
