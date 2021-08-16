// This is a JavaScript file
window.onload = function(){
  const buscar = document.querySelector("#buscar");

  const cep = document.querySelector("#cep");

  const opcoes = {
    method: 'GET',
    mede: 'cors',
    cache: 'default'
  }
  buscar.addEventListener("click", function(){
   fetch(`http://viacep.com.br/ws/${ cep.value }/json/`, opcoes) //a FETCH necessita que eu passe uma URL, e também que traga parâmetros para essa busca //colocando 'cep.value' para capturar qualquer cep
      .then(response => {response.json()   
      .then(data => {                   //após enviar os dados, o servidor vai retornar através dessa "response"
        // alert("CEP: " +data['cep']+ "\r\nLogradouro: " +data['logradouro']);  //mostrar o cep através do alert
        document.querySelector("#estado").value = data['uf'];
        document.querySelector("#cidade").value = data['localidade'];
        document.querySelector("#bairro").value = data['bairro'];
        document.querySelector("#rua").value = data['logradouro'];
        })
      })      
  });

}
