# API con Endpoints

Este es un repositorio de ejemplo que muestra cómo crear una API utilizando Node.js, Express, MySQL2 y dotenv. También se utiliza nodemon para facilitar el reinicio automático del servidor durante el desarrollo.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- Node.js
- MongoDB: Base de datos NoSQL de código abierto, orientada a documentos y altamente escalable. Almacena datos en formato JSON y es ampliamente utilizado para aplicaciones web y móviles.

Además de esto, es necesario mencionar que los paquetes usados fueron las siguientes:

- dotenv: Para usar variables de entorno.
- express: Para realizar el montaje del servidor y de la api como tal.
- jose: Para el uso del Json Web Token (JWT).
- mongodb: Para poder hacer una conexión a nuestra base de datos.
- yup: Para el DTO, es decir, la validación en la transferencia de datos.

## Configuración

1.  Clona este repositorio en tu máquina local.
1.  Abre una terminal en la carpeta raíz del proyecto.
1.  Ejecuta el siguiente comando para instalar las dependencias necesarias:

        npm install

1.  Crea un archivo .env en la carpeta raíz del proyecto y agrega las siguientes variables de entorno:

        MY_CONFIG={"user":"admin","password":"admin123","database": "db_campus_alquiler"}
        MY_SERVER={"hostname":"127.20.20.1", "port":5000}
        JWT_PRIVATE_KEY="PalabraSecreta"

    ###### Asegurate de cambiar NOMBRE_DB y demás configuraciones según tus necesidades

## Base de datos

Para obtener la base de datos, ejecuta el archivo `db.mongodb` que esta ubicado en la carpeta utils dentro de la carpeta src. Ya sea en alguna extensión de tu editor de texto que te permita hacer conexión a tu base local o en tu programa de preferencia puedes copiar y pegar el script.
**Recuerda que para usar tu propio cluster, debes cambiar el link ubicado en _src/utils/connect.js_, si usaras el cluster que trae por defecto, no es necesario correr el script**

## Ejecución

Para ejecutar correctamente el servidor debes asegurarte de tener `nodemon`, ya teniendo esta dependencia, solo escribes en la consola:

        npm run dev

## Autorización

Para ejecutar correctamente los endpoints, debes obtener el token de cada tabla antes de hacer la consulta, por lo que en el apartado de los endpoints dejaremos escrita la url a ejecutar antes, y debes copiar el token en el header de autorización.

## Endpoints

Para este proyecto se desarrollaron los siguiente endpoints diseñados para manipular la base de datos esperando los parametros por el body de la petición.

RECUERDA QUE LA IP DEL SERVIDOR SERÁ LA CORRESPONDIENTE EN EL ARCHIVO `.env` descrita en el `hostname`.

Los datos acontinuación son netamente ejemplos de lo que podrían contener los datos de entrada.

1.  Lista de bodegas ordenadas alfabéticamente

    - Authorization: `http://127.20.20.1:5000/api/token/bodegas`
    - URL: `http://127.20.20.1:5000/api/get/ordenarBodegas`
    - Método: `GET`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
      [
          {
              "_id": 8,
              "nombre": "leeche",
              "id_responsable": 13,
              "estado": 1,
              "created_by": null,
              "update_by": null,
              "created_at": "2022-06-03T02:43:08.000Z",
              "updated_at": "2022-06-03T02:43:08.000Z",
              "deleted_at": null
          },
          {
              "_id": 15,
              "nombre": "micasa",
              "id_responsable": 18,
              "estado": 1,
              "created_by": null,
              "update_by": null,
              "created_at": "2022-06-03T06:31:09.000Z",
              "updated_at": "2022-06-03T06:31:09.000Z",
              "deleted_at": null
          },
          {
              "_id": 13,
              "nombre": "prueba",
              "id_responsable": 12,
              "estado": 1,
              "created_by": null,
              "update_by": null,
              "created_at": "2022-06-03T05:10:32.000Z",
              "updated_at": "2022-06-03T05:10:32.000Z",
              "deleted_at": null
          },
          {
              "_id": 11,
              "nombre": "prueba",
              "id_responsable": 12,
              "estado": 1,
              "created_by": null,
              "update_by": null,
              "created_at": "2022-06-03T02:47:48.000Z",
              "updated_at": "2022-06-03T02:47:48.000Z",
              "deleted_at": null
          },
          {
              "_id": 9,
              "nombre": "soto1",
              "id_responsable": 15,
              "estado": 1,
              "created_by": null,
              "update_by": null,
              "created_at": "2022-06-03T02:46:40.000Z",
              "updated_at": "2022-06-03T02:46:40.000Z",
              "deleted_at": null
          },
          {
              "_id": 10,
              "nombre": "soto2",
              "id_responsable": 15,
              "estado": 1,
              "created_by": null,
              "update_by": null,
              "created_at": "2022-06-03T02:47:29.000Z",
              "updated_at": "2022-06-03T02:47:29.000Z",
              "deleted_at": null
          }
      ]
      ```

1.  Creación de bodegas

    - Authorization: `http://127.20.20.1:5000/api/token/bodegas`
    - URL: `http://127.20.20.1:5000/api/post/agregarBodega`
    - Método: `POST`
    - Datos de entrada (body):

      ```
      {
            "nombre":"bodegaEmily",
            "id_responsable":1,
            "estado":1,
            "creador":1
      }
      ```

    - Datos de salida:

            Bodega 33 creada correctamente

1.  Lista de productos con su total en inventario de todas las bodegas

    - Authorization: `http://127.20.20.1:5000/api/token/inventarios`
    - URL: `http://127.20.20.1:5000/api/get/totalInventarios`
    - Método: `GET`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
        [
            {
                "_id": 27,
                "Total": 156772
            },
            {
                "_id": 28,
                "Total": 96999
            },
            {
                "_id": 30,
                "Total": 52222
            }
        ]
      ```

1.  Agregar productos con inventario por default (en la bodega 10, con una cantidad de 100unds)

    - Authorization: `http://127.20.20.1:5000/api/token/productos`
    - URL: `http://127.20.20.1:5000/api/post/agregarProducto`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "nombre":"productoNuevo",
            "descripcion":"descripción",
            "estado":1,
            "creador":1
        }
      ```

    - Datos de salida:

            El producto 54 fue agregado correctamente a la bodega 10 con inventario 53

1.  Creación de un inventario nuevo o actualización del inventario (si el inventario ya existía)

    - Authorization: `http://127.20.20.1:5000/api/token/inventarios`
    - URL: `http://127.20.20.1:5000/inventario/nuevoInventario`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "bodega":10,
            "producto":10,
            "cantidad":10,
            "creador":1
        }
      ```

    - Datos de salida:

            El inventario 55 se agregó

      ó

            El inventario 55 se actualizó

1.  Traslado de productos de bodega a bodega

    - Authorization: `http://127.20.20.1:5000/api/token/historiales`
    - URL: `http://127.20.20.1:5000/api/post/traslado`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "bodega_origen":28,
            "bodega_destino":18,
            "producto":27,
            "cantidad":10,
            "creador":1
        }
      ```

    - Datos de salida:

            Traslado numero 16 creado

## DTO con YUP

### Validación de datos (DTO)

- Se realizó la validación de datos a través de la librería `YUP`. La librería Yup permite definir un esquema que describe la forma en que los datos deben ser validados.

- Al utilizar Yup para los DTO, puedes definir un esquema que especifique las reglas de validación que se deben aplicar a cada campo del DTO. Estas reglas pueden incluir validaciones como requerido, tipo de dato, longitud mínima o máxima, formato específico, entre otros.

- Un ejemplo de uno de los esquemas que se pueden crear es este:

  ```
  const addProductValidator = async (req, res, next) => {
    try {
      const productSchema = object({
        nombre: string()
          .strict()
          .matches(/^[a-z A-Z]+$/, "Is not in correct format")
          .required(),
        descripcion: string().optional(),
        estado: number().max(1).required(),
        created_by: number().nullable().optional(),
        update_by: number().nullable().optional(),
        created_at: date().nullable().optional(),
        updated_at: date().nullable().optional(),
        deleted_at: date().nullable().optional(),
      });
      await productSchema.validate(req.body);
      next();
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.errors });
    }
  };
  ```

- Se creó un middleware, donde se valida la composición de los datos dentro de la request. Se instancia un objeto que describe el esquema de la request y se valida el body o el query según lo escrito en el esquema. El `validate()` es una promesa que generas una excepción en caso de no pasar la validación, y dentro del catch se hace la validación de excepciones, respondiendo un status `400` y un mensaje de error. Si la request sale OK, se ejecuta un `next`, que le avisa a express de debe ejecutar el siguiente middleware (en este caso, el endpoint o servicio que genera y responde a una consulta).

  #### Autora: Emily Nieves
