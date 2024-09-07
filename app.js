function pesquisar(){
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(campoPesquisa == ""){
        section.innerHTML = `<p>Nada Foi Encontrado!!!</p>`
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada dado da pesquisa e constrói o HTML
    for(let dado of dados){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2><a href="#">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"><b>Mais Informações</b></a>
            </div>
            `;           
        }
    }

    if(!resultados){
        resultados = "<p>Nada Foi encontrado!!!</p>"
    }
  
    // Insere os resultados construídos na seção HTML
    section.innerHTML = resultados;
  }