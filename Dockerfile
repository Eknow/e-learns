# Usa la imagen de Node.js como base
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Construye la aplicación React para producción
RUN npm run build

# Usa una imagen de servidor web para servir la aplicación construida
FROM nginx:alpine

# Copia los archivos de la construcción a la imagen de Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Expone el puerto en el que Nginx está escuchando
EXPOSE 80

# Inicia Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
