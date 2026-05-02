# Pokeneas - Pokedex Antioqueña en Express.js

Proyecto desarrollado en **Node.js + Express.js** que expone una API y una vista web para mostrar Pokeneas, criaturas ficticias nacidas en Antioquia.

La aplicación está preparada para ejecutarse en contenedores Docker, desplegarse en **Docker Swarm sobre GCP** y demostrar balanceo entre múltiples réplicas mostrando el ID del contenedor que responde cada petición.

---

## Descripción del proyecto

Los **Pokeneas** son criaturas inspiradas en la serie pokemon (pero estos si son los originales - Son antioqueños) . Cada Pokenea tiene la siguiente información:

- ID
- Nombre
- Altura
- Habilidad
- Imagen
- Frase filosófica

El sistema tiene dos rutas principales:

1. Una ruta que devuelve un Pokenea aleatorio en formato JSON.
2. Una ruta que muestra una imagen y una frase filosófica de un Pokenea aleatorio.

Además, ambas rutas muestran el **ID del contenedor** desde el cual se está ejecutando la aplicación.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- Docker
- DockerHub
- GitHub Actions
- Google Cloud Platform
- Google Cloud Storage Buckets
- Docker Swarm

---

## Arquitectura del proyecto

El proyecto no está construido en un solo archivo. Se separó en rutas, controladores, modelos y datos estáticos.

```txt
.
├── Dockerfile
├── index.js
├── package.json
├── package-lock.json
└── src
    ├── app.js
    ├── controllers
    │   └── pokeneas.controller.js
    ├── public
    │   └── css
    │       └── styles.css
    ├── routes
    │   └── pokeneas.routes.js
    └── views
        ├── indexPokenea.ejs
        └── layouts
            └── main.ejs


