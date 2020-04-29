
//função para inserir oq o usuario digitar no campo input ser adicionado a lista html.


function adicionarIngrediente(){
    
    var ingredientes = document.getElementById("Ingrediente").value;
    var listahtml = document.getElementById("lista").innerHTML;

    listahtml = listahtml + "<li>"+ingredientes+ "</li>";
    document.getElementById("lista").innerHTML = listahtml;
}
function apagarIngrediente(){
    var deletar = document.getElementById("lista").innerHTML = "";

   window.location.href="projetoteste.html";
}