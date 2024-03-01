import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
  Query,
} from "@nestjs/common";

@Controller("users")
export class UsersController {
  //

  @Get() //  /users
  findAll(@Query("role") role?: string) {
    console.log("🚀 ~ UsersController ~ findAll ~ role:", role);
    return [];
  }

  @Get(":id") // /users/01
  findOneUser(@Param("id") id: string) {
    return { id };
  }

  @Post() // post /users
  createUser(@Body() user: object) {
    return user;
  }

  @Patch() //  /users
  updateUser(@Param("id") id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate };
  }

  @Delete(":id") //  /users/1
  deleteUser(@Param("id") id: string) {
    return { id };
  }
}
