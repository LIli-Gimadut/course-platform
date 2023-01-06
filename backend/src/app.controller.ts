import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello-world")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("all-courses")
  getAllCourses(): { title: string }[] {
    return [{ title: "Заголовок" }, { title: "Тимур красавчик" }];
  }
}
