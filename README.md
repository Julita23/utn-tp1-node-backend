# APLICACION GESTION DE USUARIOS

Esta aplicación está diseñada para administrar usuarios al proporcionar comandos para agregar, actualizar, enumerar y eliminar usuarios a través de la terminal. También maneja errores y los registra en un archivo. Desarrollada con Node.js, la aplicación utiliza variables de entorno, manipulación del sistema de archivos y mecanismos de manejo de errores para un funcionamiento sin inconvenientes.

## Modo de instalacion

1. **Clone the repository:**
```bash
   git clone https://github.com/Julita23/utn-tp1-node-backend

2. **Dirigirse al directorio:**
```bash
   cd utn-tp1-node-backend

3. **Instalar dependencias:**

```bash
   npm install

## Modo de uso
### list
Muestra todos los usuarios en el sistema.

```bash
   node index.js list

### getId
Recuperar la información de un usuario por su ID.

```bash
   node index.js id <id>

###add
Agregue un nuevo usuario al sistema. El sistema valida los datos y crea un algoritmo hash con la contraseña antes de guardarla.

```bash
   node index.js add <firstName> <lastName> <email> <password>

###update
Actualizar la información de un usuario existente, incluido el hash de la contraseña si se actualiza.

```bash
node index.js update <id> <firstName> <lastName> <email> <password>

