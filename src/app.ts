import express, { Request, Response } from "express";
import { routes } from "./routes";
const app = express();

routes.forEach(route => {
  app[route.method](route.path, (request: Request, response: Response, next: Function) => {
    try {
      route.action(request, response, next);
    } catch (error) {
      throw new Error(error);
    }
  });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
