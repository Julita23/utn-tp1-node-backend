import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
// Averiguar que importar de NODE para realizar el hash del pass
// Averiguar como "activar" la lectura de las variables de entorno del archivo .env (dotenv)
import { handleError } from "./utils/handleError.js";

// 1° recuperar variables de entorno
const PATH_FILE = ".data/users.json";
// 2° Declarar los metodos

const getUsers = () => {

  const existsFile = existsSync(PATH_FILE);

  if(!existsFile) {
    writeFileSync(PATH_FILE, JSON.stringify([]));
    return []
  }

  return JSON.parse(readFileSync(PATH_FILE));
  try {
  } catch (error) {
    // const objError = handleError()
    // return objError;
  }
};

console.log(getUsers);

const getUserById = (id) => {
  try {
  } catch (error) {}
};

// addUser recibe un objeto con toda la data para el nuevo usuario
// valida que esten los datos míminos para añadir un nuevo usuario
// valida que el nombre sea un string
// valida que el apellido sea un string
// valida que el email sea un string y que no se repita
// hashea la contraseña antes de registrar al usuario
const addUser = (userData) => {
  try {
  } catch (error) {}
};

// todos los datos del usuario seleccionado se podrían modificar menos el ID
// si se modifica la pass debería ser nuevamente hasheada
// si se modifica el email, validar que este no exista
const updateUser = (userData) => {
  try {
  } catch (error) {}
};

const deleteUser = (id) => {
  try {
  } catch (error) {}
};

export { getUsers, getUserById, addUser, updateUser, deleteUser };
