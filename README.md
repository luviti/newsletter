# Newsletter Tecnologies
# ![image](https://user-images.githubusercontent.com/108637883/232279140-b8f94bb9-ef6e-4a09-a045-bf299844c134.png)
<h1>Projeto Newsletter Tecnologies</h1>

<p>Este projeto é uma aplicação web para inscrição em uma newsletter e armazenamento dos e-mails cadastrados em um banco de dados MySQL. Desenvolvido com Node.js, Express.js e EJS.</p>

<h2>Tecnologias utilizadas</h2>

   <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>EJS</li>
    <li>MySQL</li>
</ul>

<h2>Como executar o projeto</h2>
    <ol>
    <li>Clone este repositório em sua máquina local</li>
    <li>Instale as dependências do projeto através do comando npm install</li>
    <li>Configure o banco de dados MySQL, criando um novo banco de dados com o nome 'news' e uma tabela chamada 'emails' com os campos 'id' (chave primária) e 'email' (tipo VARCHAR). Certifique-se de que as credenciais de acesso ao banco de dados estejam corretas no arquivo app.js</li>
    <li>No arquivo app.js, modifique as credenciais do banco de dados de acordo com sua configuração
    Inicie a aplicação com o comando node app.js ou nodemon app.js caso tenha instalado o nodemon</li>
</ol>

<h2>Cadastro na Newsletter</h2>

<p>Ao acessar a página principal da aplicação através da URL http://localhost:3000/newsletter, o usuário encontra um formulário para inscrição na newsletter. Após preencher com um e-mail válido e clicar no botão "Inscrever-se", o e-mail é armazenado no banco de dados e a mensagem "Cadastro Realizado com sucesso!" é exibida no console.<p>

<h2>Listagem de clientes cadastrados</h2>

<p>Ao acessar a página http://localhost:3000/lista_emails, a aplicação exibe uma lista com todos os e-mails cadastrados até o momento. Os e-mails são buscados no banco de dados e renderizados na página utilizando a engine de views EJS.</p>
