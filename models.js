import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
// Averiguar que importar de NODE para realizar el hash del pass
// Averiguar como "activar" la lectura de las variables de entorno del archivo .env (dotenv)
import { handleError } from "./utils/handleError.js";
import { get } from "node:http";
import { config } from "dotenv";

config();

// 1° recuperar variables de entorno
const PATH_USERS_FILE = process.env.PATH_USERS_FILE;
const PATH_USERS_ERROR = process.env.PATH_USERS_ERROR;
// 2° Declarar los metodos

const getUsers = (urlFile) => {
  try {

    if(!urlFile) {
      throw new Error("Don't have permissions")
    }

    const existsFile = existsSync(PATH_USERS_FILE);

    if(!existsFile) {
      writeFileSync(PATH_USERS_FILE, JSON.stringify([]));
      throw new Error("File doesn't exists...")
    }

    const users = JSON.parse(readFileSync(PATH_USERS_FILE));
    return users;
  
  } catch (error) {
     const objError = handleError(error, PATH_USERS_ERROR)
     return objError;
  }
};

const response = getUsers();
console.log(response);

const getUserById = (id) => {
  try {
    if(!id) {
      throw new Error("ID is missing");
    }

    const users = getUsers(PATH_USERS_FILE);
    const user = users.find((user) => movie.id === id);

    if(!user) {
      throw new Error("User not found");
    }
    
    return user;

  } catch (error) {
    const objError = handleError(error, PATH_USERS_ERROR)
    return objError;
   }
};

console.log(getUserById(12345));

// addUser recibe un objeto con toda la data para el nuevo usuario
// valida que esten los datos míminos para añadir un nuevo usuario
// valida que el nombre sea un string
// valida que el apellido sea un string
// valida que el email sea un string y que no se repita
// hashea la contraseña antes de registrar al usuario
const addUser = (userData) => {
  try {
    const { nombre, apellido, email, password } = userData;

    const existsUser = users.find(userData => userData.nombre === nombre);
  
    if (existsUser) {
      throw new Error ("User already exists");
    }

    if(!nombre || !apellido || !email || !password) {
      throw new Error ("Missing data");
    }
  
    const newUser = {
      id: randomUUID(),
      nombre,
      apellido,
      email,
      password,
      isLoggedId,
    };
  
    const users = getUsers(PATH_USERS_FILE);
    users.push(newUser);
    writeFileSync(PATH_USERS_FILE, JSON.stringify(users));
  
    return newUser;

  } catch (error) { 
    const objError = handleError(error, PATH_USERS_ERROR)
    return objError;
  }
};

// todos los datos del usuario seleccionado se podrían modificar menos el ID
// si se modifica la pass debería ser nuevamente hasheada
// si se modifica el email, validar que este no exista
const updateUser = (id, userData) => {
  try {
    const { nombre, apellido, email, password } = userData;

    if(!id || !userData) {
      throw new Error("ID is missing");
    }
  
    const users = getUsers(PATH_USERS_FILE);
    const user = getUserById(id);
  
    if (nombre) user.nombre = nombre;
    if (apellido) user.apellido = apellido;
    if (email) user.email = email;
    if (password) user.password = password;
  
    writeFileSync(PATH_FILE, JSON.stringify(users));
  
    return user;
  
  } catch (error) { 
    const objError = handleError(error, PATH_USERS_ERROR)
    return objError;
  }
};

const deleteUser = (id) => {
  try {
    if(!id) {
      throw new Error("ID is missing");
    }
  
    const users = getUsers(PATH_USERS_FILE);
    const user = getUserById(id);

  const newUser = users.filter((user) => user.id !== id);

  writeFileSync(PATH_FILE, JSON.stringify(newUser));

  return user;

  } catch (error) { 
    const objError = handleError(error, PATH_USERS_ERROR)
    return objError;
  }
};

export { getUsers, getUserById, addUser, updateUser, deleteUser };
