import { Request, Response } from "express";

export type Route = {
  path: string;
  method: "get" | "post";
  action: (request: Request, response: Response, next: Function) => any;
}
