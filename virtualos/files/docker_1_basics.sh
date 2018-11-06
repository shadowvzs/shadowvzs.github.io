{
"text":
[
["sudo apt-get update","refresh the repo lists"],
["sudo apt-get install docker-ce","install Docker CE"],
["sudo docker --version","display the version info, you can use <b>--version</b>, <b>version</b> or <b>info</b>"],
["sudo docker image","list every downloaded docker <b>image</b>"],
["sudo docker run hello-world","run hello-world image<br>If docker <b>image</b> not exist then it will pull it from docker repo"],
["sudo docker ps","list every running docker <b>container</b><br>you can use also: <b>docker container ls --all</b><br>if you use ls then you can use: <b>--all</b> or <b>-aq</b>"],
["sudo docker run -v /home/shadowvzs/myproject/www/public_html:/var/www/html -it -p 80:80 myImage:1 /bin/bash","what this do?<br>- this command create container from <b>myImage</b> image file (<b>:1</b> is tag name)<br>- mount volume, external folder (<b>/home/shadowvzs/myproject/www/public_html</b>) into container (<b>/var/www/html</b>)<br>- <b>it</b> = interactive mode + --tty (container run in forground), if you want you can use -d (container run in background)<br>- port foward, external:internal port<br>- use <b>/bin/bash</b> entrypoint, this mean if you exit from bash then container will be closed"],
["sudo docker kill 3ac41b7f1", "close a running container with hash (you can get hash with <b>sudo docker ps</b>)"],
["sudo docker stop $(docker ps -a -q)", "stop all container, <b>-q</b> give ids"],
["sudo docker rm --force redis", "force remove running container"],
["sudo docker rm $(docker ps -a -q)", "remove all stopped container"],
["sudo docker rm $(docker ps -a -f status=exited -q)", "remove all exited container"],
["sudo docker rmi myImage:1","remove myImage image which got tag 1 (taging images is optional)"],
["sudo docker images -f dangling=true","list all dangle image (docker image layers which have no relationship with any tagged images)"],
["sudo docker images -a | grep 'pattern' | awk '{print $3}' | xargs docker rmi","remove all image which grep 'pattern' found"]
]
}