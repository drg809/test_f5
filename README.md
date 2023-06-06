# test_f5 #

## Descripción ##

Este proyecto contiene la prueba técnica de Factoria F5 realizada por Daniel Rodríguez García. 

Consta únicamente de un cliente en React ya que he elegido una opción serverless. He tomado esta decisión ya que me parece más ingeniosa y creativa, esto se debe a que he tenido que solventar la manera de almacenar imágenes de otra forma que no fuera mediante el archivo de la imagen, he usado codificación de base64, lo cual reduce el espacio ocupado por la aplicación y facilita la tarea a la hora de eliminar las imágenes y que no queden los archivos en el servidor (generalmente se borran de la base de datos únicamente). Un front-end muy parecido a este más una api en node.js (por ejemplo) no hubiera supuesto un reto, ya que tengo varias repos con la base ya programada y configurada, de haber entregado una api correría la tentación de hacerla con el lenguaje Go [Ver más](https://go.dev/), el cual es un suplicio de instalar pero ofrece un rendimiento mucho mayor que node.

Con esta elección serverless se simplifica el proceso de despliegue y se abarata el coste de proceso. 

Lenguaje utilizado: Typescrypt [Ver más](https://www.typescriptlang.org/)

Framework utilizado: React [Ver más](https://es.react.dev/)


## Instalación ##

Para gestionar los paquetes necesarios para correr la app se ha utilizado el gestor de paquetes yarn, ya que tiene un mejor comportamiento que npm, pero se puede utilizar el que se desee. Notese que para instalar yarn hace falta tener instalado npm previamente, por lo que si no contamos con ninguno de ellos recomiendo npm por simplificar.

Ambos gestores se instalan desde la terminal de comandos de manera sencilla por lo que abrimos la terminal e introducimos el siguiente comando:
```
npm install npm@latest -g
```

Si se desea instalar npm mediante un archivo ejecutable, puedes encontrar [aquí](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#os-x-or-windows-node-installers) las instrucciones. 