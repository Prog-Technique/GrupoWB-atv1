import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"

import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import ListagemClientes from "../negocio/Cliente/listagemClientes";
import ApagaCliente from "../negocio/Cliente/apagaCliente";
import AtualizaCliente from "../negocio/Cliente/atualizaCliente";
import DadosDeCliente from "../negocio/Cliente/dadosCliente";

import CadastroProduto from "../negocio/Produto/cadastroProduto";
import ListagemProdutos from "../negocio/Produto/listagemProdutos";
import ApagaProduto from "../negocio/Produto/apagaProduto";
import AtualizaProduto from "../negocio/Produto/atualizaProduto";
import DadosDoProduto from "../negocio/Produto/dadosProduto";

import CadastroServico from "../negocio/Servico/cadastroServico";
import ListagemServicos from "../negocio/Servico/listagemServicos";
import ApagaServico from "../negocio/Servico/apagaServico";
import AtualizaServico from "../negocio/Servico/atualizaServico";
import DadosDoServico from "../negocio/Servico/dadosServico";

import DezMais from "../negocio/listagens/lista10mais";
import Genero from "../negocio/listagens/listaGenero";
import GeralConsumido from "../negocio/listagens/listaGeralConsumido";
import ConsumidoGenero from "../negocio/listagens/listaConsumidoGenero"
import DezMenos from "../negocio/listagens/lista10menos";
import Valor from "../negocio/listagens/lista5valor";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true
let dadosClientes = new DadosDeCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
dadosClientes.dados();
let dadosProdutos = new DadosDoProduto(empresa.getProdutos)
dadosProdutos.dados();
let dadosServicos = new DadosDoServico(empresa.getServicos)
dadosServicos.dados();

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
    console.log(`9 - Cadastrar serviço`);
    console.log(`10 - Listar todos os serviços`);
    console.log(`11 - Atualizar serviço`);
    console.log(`12 - Apagar serviço`);
    console.log(`----------------------------`);
    console.log(`Listagens:`);
    console.log(`13 - 10 clientes que mais consumiram produtos/serviços`);
    console.log(`14 - Todos os clientes por gênero`);
    console.log(`15 - Todos serviços/produtos mais consumidos`);
    console.log(`16 - Serviços/produtos mais consumidos por gênero`);
    console.log(`17 - 10 clientes que menos consumiram produtos/serviços`);
    console.log(`18 - 5 clientes que mais consumiram em valor`);
    console.log(`----------------------------`);
    console.log(`0 - Sair \n`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

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


        case 9:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 10:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 11:
            let atualizaServico = new AtualizaServico(empresa.getServicos)
            atualizaServico.atualizar()
            break;
        case 12:
            let apagaServico = new ApagaServico(empresa.getServicos)
            apagaServico.apagar()
            break;


        case 13:
            let dezMais = new DezMais(empresa.getClientes)
            dezMais.listar()
            break;
        case 14:
            let generoLista = new Genero(empresa.getClientes)
            generoLista.listar()
            break;
        case 15:
            let geralConsumido = new GeralConsumido(empresa.getClientes)
            geralConsumido.listar()
            break;
        case 16:
            let consumidoGenero = new ConsumidoGenero(empresa.getClientes)
            consumidoGenero.listar()
            break;
        case 17:
            let dezMenos = new DezMenos(empresa.getClientes)
            dezMenos.listar()
            break;
        case 18:
            let cincoValor = new Valor(empresa.getClientes)
            cincoValor.listar()
            break;
            
        case 0:
            execucao = false
            console.log(`Até mais \n`)
            break;
        default:
            console.log(`Operação não entendida`)
    }
}