function carregarUsuario(){

    var usuarioLogado = localStorage.getItem("user");
    if(!usuarioLogado){
        window.location="index.html";
    }else{
        var usuarioJson = JSON.parse(usuarioLogado);
        document.getElementById("dados").innerHTML=
        "<h3 id='nomeUsuario'>" + usuarioJson.nome + "</h3>" +
        "<br><h4>" + usuarioJson.email + "<br>" + 
        "Código: " + usuarioJson.id + "<br></h4>";
    
        document.getElementById("foto").innerHTML=
        "<img width='20%' alt='Imagem não encontrada' src=images/" + usuarioJson.foto + ">";
    
    }
}