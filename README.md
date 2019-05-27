### Levantar en desarrollo 🔧

# Cliente:
```
C:\Users\mapescio\Desktop\Abm-Paises\cliente\abm>npm install
C:\Users\mapescio\Desktop\Abm-Paises\cliente\abm>npm start 

Con estas lineas levantas el web server en http://localhost:3000/
```

# Server:
```
C:\Users\mapescio\Desktop\Abm-Paises\server>npm install
C:\Users\mapescio\Desktop\Abm-Paises\server>npm start 

Con estas lineas levantas la api en http://localhost:8082/
```


### Levantar en docker 🔧

# Cliente:
```
Es importante primero hacer el build del sitio:

C:\Users\mapescio\Desktop\Abm-Paises\cliente\abm>npm run build

Despues de hacer el buil crear la imagen de docker, el web server va a correr sobre nginx:

C:\Users\mapescio\Desktop\Abm-Paises\cliente\abm>docker build --rm -f Dockerfile -t webserver .

Crear el contenedor para que escuche en el puerto 8081 y redirija internamente al 80

C:\Users\mapescio\Desktop\Abm-Paises\cliente\abm>docker run --rm -d -p 8081:80 webserver

Con estas lineas levantas el web server en http://localhost:8081/

```


# Server:
```
La api va a correr sobre un node:

C:\Users\mapescio\Desktop\Abm-Paises\server>docker build --rm -f Dockerfile -t api .

Crear el contenedor para que escuche en el puerto 9000 y redirija internamente al 8082

C:\Users\mapescio\Desktop\Abm-Paises\server>docker run --rm -d -p 9000:8082 webserver

Con estas lineas levantas la api en http://localhost:9000/api/paises

```


