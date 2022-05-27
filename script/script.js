function chamaAPI(){
    let chave = "nBD7vkxQXRxytRdZPNSmFgqBfy9DVFxHLBTilClz"; //chave
    let data = document.getElementById("data").value; //data escolhida
    
     $.ajax({ //requisição
    type: "GET",
    url: `https://api.nasa.gov/planetary/apod?api_key=${chave}&date=${data}`,
    success (res){
        mostraImagem(res.hdurl);
        mostraDescricao(res.explanation)
    },
    error (){
        console.log("erro de comunicação com API");
    }
    
})
    

}

function mostraImagem(urlImagem)
{
  $("#constelacao").attr("src", urlImagem)    
}

function mostraDescricao(descricao)
{
  $("#descricao").html(descricao);
}


/*
$(document).ready(function () {
  //your code here
   

*/