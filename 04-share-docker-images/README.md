GitHub Packages solo soporta PAT (clasico). Necesitas un token para poder publicar, instalar y eliminar paquetes internos, privados y públicos.

Para crear un personal access token debes ir a tu perfil de GitHub y seleccionar "Settings" -> "Developer settings" -> "Personal access tokens" -> "Generate new token". Y como permisos puedes seleccionar "write:packages" y "read:packages".

Para que la UI no te seleccione directamente el scope de repo (y que no puedas deseleccionarlo) puedes usar este enlace: https://github.com/settings/tokens/new?scopes=write:packages

Ahora lo siguiente que debes hacer es iniciar sesión con el mismo comando que usaste para Docker Hub pero en este caso con algunos parametros adicionales:

```bash
source .env
echo $PAT | docker login ghcr.io -u $GITHUB_USERNAME --password-stdin
```

Y ahora, al igual que nos pasó en Docker Hub, las imagenes que generemos deben seguir una convención. Esto es: `ghcr.io/$GITHUB_USERNAME_OR_ORG/$IMAGE_NAME:$TAG`. Por lo que si queremos publicar la imagen de nuestro proyecto de ejemplo, debemos hacer lo siguiente:

```bash
docker build -t ghcr.io/0gis0/tour-of-heroes-api:v1 tour-of-heroes-api
docker push ghcr.io/0gis0/tour-of-heroes-api:v1
```