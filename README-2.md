# Configurando back-server

Caso ocorra algum erro: 
Tente executar o node serve.js no terminal, caso dê erro...

rm -rf node_modules e reinstale tudo seguindo os passos.

Após clonar o repositório:
npm init ------> Para substituir os pacotes node_modules.
npm i express mongoose axios dotenv cors ------> Ajudará na configuração do servidor.

Para testar o servidor: 
node server.js ------> Retornará a porta 8000.

Em localhost:8000
Teste a rota  http://localhost:8000/user/posts 

"Com o banco de dados online, com o cluster carregado, essa rota exibirá um JSON dos objetos que estão contidos na coleção post dentro do banco eng_soft."
