# test_f5 #

## Descripción ##

Este proyecto contiene la prueba técnica de Factoria F5 realizada por Daniel Rodríguez García. 

Consta únicamente de un cliente en React ya que he elegido una opción serverless. He tomado esta decisión ya que me parece más ingeniosa y creativa, esto se debe a que he tenido que solventar la manera de almacenar imágenes de otra forma que no fuera mediante el archivo de la imagen, he usado codificación de base64, lo cual reduce el espacio ocupado por la aplicación y facilita la tarea a la hora de eliminar las imágenes y que no queden los archivos en el servidor (generalmente se borran de la base de datos únicamente). Un front-end muy parecido a este más una api en node.js (por ejemplo) no hubiera supuesto un reto, ya que tengo varias repos con la base ya programada y configurada, de haber entregado una api correría la tentación de hacerla con el lenguaje Go [Ver más](https://go.dev/), el cual es un suplicio de instalar pero ofrece un rendimiento mucho mayor que node.

Con esta elección serverless se simplifica el proceso de despliegue y se abarata el coste de proceso.

Lenguaje utilizado: Typescrypt [Ver más](https://www.typescriptlang.org/)

Framework utilizado: React [Ver más](https://es.react.dev/)

He utilizado React con Typescrypt porque son las tecnologías en front-end que más se solicitan.


## Instalación ##

Para gestionar los paquetes necesarios para ejecutar la app se ha utilizado el gestor de paquetes yarn, ya que tiene un mejor comportamiento que npm, pero se puede utilizar el que se desee. Notese que para instalar yarn hace falta tener instalado npm previamente, por lo que si no contamos con ninguno de ellos recomiendo npm por simplificar.

Ambos gestores se instalan desde la terminal de comandos de manera sencilla por lo que abrimos la terminal e introducimos el siguiente comando:

```
npm install npm@latest -g
```

Si se desea instalar npm mediante un archivo ejecutable, puedes encontrar [aquí](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#os-x-or-windows-node-installers) las instrucciones. 

Ya se podría iniciar la app, si queremos instalar yarn se haría mediante el siguiente comando:

```
npm install --global yarn
```

Para comprobar que la instalación ha sido correcta podemos introducir lo siguiente:

NPM
```
npm -v
```
YARN
```
yarn --version
```

Se mostrará el número de versión instalado. En caso de error se mostrará un mensaje diciendo que no reconoce el comando utilizado.


Ahora podemos instalar los paquetes necesarios para ejecutar la app, para ello nos situamos en la carpeta del proyecto que se ha descargado de github y ejecutaremos el comando install del paquete que hayamos escogido:

NPM
```
npm install
```
YARN
```
yarn i
```

Una vez transcurridos unos minutos se habrán instalado todos los paquetes y nos mostrará un mensaje de confirmación, en caso de suceder algún error se mostrará el mensaje de error en su lugar.


## Ejecutar la app ##

Ahora podemos ejecutar la app en modo desarrollo (para hacerlo en producción necesitaríamos un servidor web), he utilizado vite en lugar de webpack porque esta ahora de moda ya que dicen que es más rápido.

En el archivo package.json encontramos la sección de script, la cual nos sirve para ejecutar tareas relacionadas con los paquetes instalados en la app, para ejecutarla utilizamos el script start mediante el siguiente comando:

NPM
```
npm run start
```
YARN
```
yarn start
```

En pocos segundos se habrá ejecutado la app y nos aparecerá la dirección url para verla. Generalmente es 'http://localhost:5173', pero si el puerto ya se encuentra en uso probará con los siguientes, siendo 'http://localhost:5174' o 'http://localhost:5175'.