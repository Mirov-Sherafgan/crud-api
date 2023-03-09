import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  response(): string {
    return "Backend CRUD API";
  }
}
