import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"

import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import ListagemClientes from "../negocio/Cliente/listagemClientes";
import ApagaCliente from "../negocio/Cliente/apagaCliente";
import AtualizaCliente from "../negocio/Cliente/atualizaCliente";
import DadosDeCliente from "../negocio/Cliente/dados";

import CadastroProduto from "../negocio/Produto/cadastroProduto";
import ListagemProdutos from "../negocio/Produto/listagemProdutos";
import ApagaProduto from "../negocio/Produto/apagaProduto";
import AtualizaProduto from "../negocio/Produto/atualizaProduto";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true
let dadosClientes = new DadosDeCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
dadosClientes.dados();

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar cliente`);
    console.log(`4 - Apagar cliente`);
    console.log(`----------------------------`);
    console.log(`5 - Cadastrar produto`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Atualizar produto`);
    console.log(`8 - Apagar produto`);
    console.log(`----------------------------`);
    console.log(`0 - Sair`);
    console.log();

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    console.log();

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizaCliente = new AtualizaCliente(empresa.getClientes)
            atualizaCliente.atualizar()
            break;
        case 4:
            let apagaCliente = new ApagaCliente(empresa.getClientes)
            apagaCliente.apagar()
            break;
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 6:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 7:
            let atualizaProduto = new AtualizaProduto(empresa.getProdutos)
            atualizaProduto.atualizar()
            break;
        case 8:
            let apagaProduto = new ApagaProduto(empresa.getProdutos)
            apagaProduto.apagar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida`)
    }
}