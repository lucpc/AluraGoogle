// Função para realizar uma pesquisa e exibir os resultados
function pesquisar() {

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa) // Exibe o termo de pesquisa no console

    if (campoPesquisa === "") {
        section.innerHTML = "<p>Digite algo para pesquisar.</p>"; // Exibe uma mensagem de erro se o campo de pesquisa estiver vazio
        return;
    }
    campoPesquisa = campoPesquisa.toLowerCase(); // Converte o termo de pesquisa para minúsculas
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = ""; 
    let titulo = "";
    let descricao = "";

    // Itera sobre os dados da pesquisa
    for (let dado of dados) { 
        titulo = dado.titulo.toLowerCase(); // Converte o título para minúsculas
        descricao = dado.descricao.toLowerCase(); // Converte a descrição para minúsculas
        tags = dado.tags.toLowerCase(); // Converte as tags para minúsculas
        if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            console.log(dado.titulo.includes(campoPesquisa))// Verifica se o termo de pesquisa está presente no título ou na descrição do item
        // Se o termo de pesquisa estiver presente, formata o resultado em HTML
        resultados += `
            <div class="item-resultado"> 
                <h2>
                    <a href="https://www.instagram.com/rebecarandrade/?hl=pt-br" target="_blank">${dado.titulo}</a> 
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank"> Mais informações</a>
            </div>
        `;
        }   
    }
    //abaixo temos outra forma de fazer o que foi feito na linha 10. Ao invés de igualar a variável a uma string vazia, 
    //podemos usar o operador ternário para verificar se a variável é nula e, caso seja, atribuir o valor desejado.
    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado.</p>"; // Exibe uma mensagem se nenhum resultado for encontrado
    }
        
    // Define o conteúdo HTML da seção com os resultados formatados
    section.innerHTML = resultados; 
}