import dotenv from "dotenv";
import appRootPath from "app-root-path";

export function EnvConfig() {
    dotenv.config({
        path: appRootPath.resolve("/configs/env/.env"),
      });
}