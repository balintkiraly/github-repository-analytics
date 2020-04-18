import { Route } from "./utils/types";
import { createImage } from "./controllers/image.controller";

export const routes: Route[] = [
  {
    path: "/",
    method: "get",
    action: createImage
  }
];