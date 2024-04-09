const date = new Date()
const dia = date.getDate()
const mes = date.getMonth()-1
const ano = date.getFullYear()

const paramData = `${mes}-${dia}-${ano}`;

function exibirNoticias (){
fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?de=${paramData}`).then(res =>{
return res.json()}   
).then(jsonBody  =>{

    for(let i = 0; i<=9 ; i++){
        console.log(i)        
        console.log(jsonBody.items[i])
        console.log(jsonBody.items[i].data_publicacao)

        
        let div = document.createElement('div')
        let h1 = document.createElement('h1')
        h1.classList.add('titulo')
        let p = document.createElement('p')
        let span = document.createElement('span')
        span.classList.add('horario')
        p.classList.add('conteudo')
        
        innerHTML = jsonBody.items[i].titulo
        innerHTML = jsonBody.items[i].conteudo
        innerHTML = jsonBody.items[i].horario
        
        h1.innerHTML = jsonBody.items[i].titulo
        p.innerHTML = jsonBody.items[i].introducao
        span.innerHTML = jsonBody.items[i].data_publicacao



        p.classList.add('conteudo')
        div.appendChild(span)
        div.appendChild(h1)
        div.appendChild(p)
        document.body.appendChild(div)
        
        
    }
})}
exibirNoticias()

