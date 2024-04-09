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
        console.log(jsonBody.items[i].link)
        

        
        let div = document.createElement('div')
        let h1 = document.createElement('h1')
        h1.classList.add('titulo')
        let p = document.createElement('p')
        let a = document.createElement('a')
        let span = document.createElement('span')
        span.classList.add('horario')
        p.classList.add('conteudo')
        
        h1.innerHTML = jsonBody.items[i].titulo
        p.innerHTML = jsonBody.items[i].introducao
        span.innerHTML = jsonBody.items[i].data_publicacao
        a.href = jsonBody.items[i].link
        a.innerHTML = "saiba mais"

        div.appendChild(span)
        div.appendChild(h1)
        div.appendChild(p)
        div.appendChild(a)

        document.body.appendChild(div)
        
    }
})}
exibirNoticias()

