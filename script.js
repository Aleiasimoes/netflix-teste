const filmes = [
    {
        nome: "Filme 1",
        imagem: "IMAGEM1.JPG"
    },
    {
        nome: "Filme 2",
        imagem: "IMAGEM2.JPG"
    },
    {
        nome: "Filme 3",
        imagem: "IMAGEM3.JPG"
    }
];

document.getElementById("filmeDestaque").src = "IMAGEM4.JPG";

const filmesContainer = document.querySelector(".filmes");
filmes.forEach(filme => {
    const filmeDiv = document.createElement("div");
    filmeDiv.classList.add("filme");
    
    const imagem = document.createElement("img");
    imagem.src = filme.imagem;
    imagem.alt = filme.nome;
    
    const titulo = document.createElement("h3");
    titulo.textContent = filme.nome;
    
    filmeDiv.appendChild(imagem);
    filmeDiv.appendChild(titulo);
    
    filmesContainer.appendChild(filmeDiv);
});