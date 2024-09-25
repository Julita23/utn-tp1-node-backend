// 1° recibir los argumentos pasados por la terminal
// 2° enviarselos a ./utils/createObjectUser (en caso de crear o actualizar el usuario)
// 3° evaluar que acción quiere realizar el usuario (list, search/get, add, update, delete)
// 4° DEVOLVER EL OUTPUT AL CLIENTE FINAL

import {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    getUserById,
} from "./models.js";

import dotenv from "dotenv";
dotenv.config();

import { createUserObject, createUpdateUserObject } from "./utils/createObjectUser.js";

const args = process.argv.splice(2);
const action = args[0];

switch (action) {
   case "list":
        console.log(getUsers(process.env.PATH_FILE_USER));
        break;
    case "getId":
        console.log(getUserById(args[1]));
        break;
    case "add":
        const newUser = createUserObject(args);
        console.log(addUser(newUser));
        break;
    case "update":
        const updatedUser = createUpdateUserObject(args);
        console.log(updateUser(updatedUser));
        break;
    case "delete":
        console.log(deleteUser(args[1]));
        break;
    default:
        const error = handleError(
            new Error("wrong command please use list, getId, update or delete for successful response"),
            process.env.PATH_FILE_ERROR
        );
        console.log(error);
        break;
}

