<div align="center" id=topo>

<h1> Agenda de clientes para o grupo WB </h1>

<p>
    <a href="#sobre">Sobre</a> | 
    <a href="#tec">Tecnologia</a> | 
    <a href="#backlog">Backlogs</a> | 
    <a href="#manual">Manual do usuário</a> |
</p>

</div>

<br>

<span id="sobre">

## :mag_right: Sobre o projeto
 O Grupo World Beauty (WB) solicitou um programa de cadastro de clientes para trazer informações que permite um contato mais próximo com seus clientes e para melhorar suas vendas. A agenda, inicialmente, será um sistema do tipo cli (command-line interface), ou seja, deverá funcionar sem uma interface gráfica, apenas pela linha de comando.
    
<br>

<span id="tec">

## 🛠️ Tecnologia

<div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</div>

<br>

<span id="backlog">

## :pushpin: Backlog do Produto  

 #### Épicos (Requisitos Funcionais) 
| CÓDIGO | DESCRIÇÃO |
|:------:|:----------|
|   RF1  | CRUD (Create, Read, Update e Delete) de clientes 
|   RF2  | CRUD de produtos e/ou serviços
|   RF3  | Registro de consumo dos produtos e/ou serviços que cada cliente adquiriu 
|   RF4  | Listagens 

 #### Especificação das Listagens
| CÓDIGO | DESCRIÇÃO |
|:------:|:----------|
|   1    | 10 clientes que mais consumiram produtos ou serviços, em quantidade
|   2    | Todos os clientes por gênero
|   3    | Geral dos serviços ou produtos mais consumidos
|   4    | Serviços ou produtos mais consumidos por gênero
|   5    | 10 clientes que menos consumiram produtos ou serviços
|   6    | 5 clientes que mais consumiram em valor

→ [Voltar ao topo](#topo)

<br>

<span id="manual">

## :scroll: Manual do Usuário

- crie uma pasta, entre nela e abra o cmd
- clone o repositório
~~~
git clone https://github.com/Prog-Technique/atv1.git  
~~~
    
- entre no clone 
~~~
cd atv1
~~~

- compile 
~~~
npx tsc
~~~

- agora é só rodar
~~~   
node out/app/main.js
~~~

