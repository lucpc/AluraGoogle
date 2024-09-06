console.log(dados);

let section = document.getElementById("resultados-pesquisa");
console.log(section);

// dados.forEach(item =>{
//     section.innerHTML = `
// <div class = "item-resultado"> 
//     <h2>
//         <a href = "https://www.instagram.com/rebecarandrade/?hl=pt-br" target="_blank">${dados[item].titulo}/a>
//     </h2>
//     <p class = "descricao-meta">${dados[item].descricao}</p>
//     <a href="${dados[item].link}" target="_blank"> Mais informações</a>
// </div>
// `
// });
let resultados = "";
for (let dado of dados){
    resultados += `
<div class = "item-resultado"> 
    <h2>
        <a href = "https://www.instagram.com/rebecarandrade/?hl=pt-br" target="_blank">${dados[item].titulo}/a>
    </h2>
    <p class = "descricao-meta">${dados[item].descricao}</p>
    <a href="${dados[item].link}" target="_blank"> Mais informações</a>
</div>
`
}

section.innerHTML = resultados;