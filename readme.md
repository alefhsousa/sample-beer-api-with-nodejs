## Descrição

Uma api simples para cadastrar cervejas utilizando [nodejs](https://github.com/nodejs), [mongoose](http://mongoosejs.com/) e [mongodb](https://github.com/mongodb/mongo). Utilizando [docker](https://www.docker.com/) para prove a infra da aplicação.


------------------------------------------------------------

## Rodando app

 1 - Ter o mongodb instalado na máquina
 2 - Ter o nodejs e npm instalado na máquina

rodar esse comando dentro do diretório da aplicação:
```
npm start ou node app.js
```
### Usando nodemon

Uma desvantagem de usar o node é que sempre fazemos alguma atualização, precisamos para o serviço e subir ele novamente. Uma alternativa para resolver esse problema é utilizando o [nodemon](https://github.com/remy/nodemon) é uma ferramenta criado pela comunidade que faz o rebuild da app sempre que houver alguma alteração.

Instalando o nodemon

    npm install -g nodemon

Rodando o serviço com nodemon

    nodemon app.js

## Rodando com docker

rodar esse comando dentro do diretório da aplicação:
```
docker-compose up
```


## Links

* Conhecendo e entendendo para que serve os status http [httpstatuses](httpstatuses.com)
* Framework para segurança quando usamos o express [helmet](https://helmetjs.github.io/)
* Checklist de segurança quando estamos criando uma API pública [security](https://github.com/shieldfy/API-Security-Checklist/blob/master/README.md)
* Material de estudo para criar apis restfull e boas práticas [white house](https://github.com/WhiteHouse/api-standards) e [heroku](https://github.com/interagent/http-api-design)
* [12factor](12factor.net) -> cloud native boas práticas e coisas que nossa aplicação deve seguir se queremos colocar ela na nuvem
* [Docker Labs](https://github.com/docker/labs) Material para estudar docker feito pela própria Docker Inc.
