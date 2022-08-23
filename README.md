# Scripts
## npm install
## npm run build
## npm run prettier
## npm run lint
## npm run test
## npm run start

# Server will listen on port 3000

# Endpoints
## http://localhost:3000/ => main page route
## http://localhost:3000/resize => resize images
## query params required for resizing:
## -width , height , imagename
## -Example => http://localhost:3000/resize/?width=200&height=400&imageName=fjord
## -Image filename must exist in images directory in order to work

# Notes
## Images are served from images folder.
## Resized images will be stored in a folder named thumbnails /images/thumbnails
## For first time resizing => thumbnails folder should be deleted to make sure it will be re-created
