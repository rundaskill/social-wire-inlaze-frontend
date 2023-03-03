# Frontend - Social Wires

### Descripción

Social Wires es una red social que busca facilitar en un espacio publicaciones de personas con el fin de expresar lo que gusten en la red. Los usuarios se podrán registrar y con cuenta iniciada podrán publicar y ver mensajes de los demás usuarios.

### Aspectos tecinicos

El sistema está en [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6. utiliza [primeng](https://primeng.org/) para los input y se ejecuta [nginx](https://www.nginx.com/)

### Requerimientos

- Docker
- Docker compose

### Installation

```sh
git clone https://github.com/rundaskill/social-wire-inlaze-frontend.git
cd social-wire-inlaze-frontend
npm run docker:dev
npm run docker-compose:dev
```

### Uso

EL api va estar en el puerto 4501 para acceder al la ruta http://localhost:4201/
