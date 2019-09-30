docker stop mongo_devoir1
docker system prune -f
docker run -d --name mongo_devoir1 mongo:4.2
docker exec -it mongo_devoir1 mongo ds349587.mlab.com:49587/glo4035-datasets -u etudiant -p maison2000
