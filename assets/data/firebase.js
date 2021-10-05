
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyADjNtHhcfBAhn64BKIP8x4T6uqZyk7ISk",
        authDomain: "firestore-cdf82.firebaseapp.com",
        databaseURL: "https://firestore-cdf82-default-rtdb.firebaseio.com",
        projectId: "firestore-cdf82",
        storageBucket: "firestore-cdf82.appspot.com",
        messagingSenderId: "347902797715",
        appId: "1:347902797715:web:6d31c0c8cae973f9582a66"
    };


    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);





    // Declarando Variaveis 
    const db = firebase.firestore();
    const form = document.getElementById("forms");
    const btnForm = document.getElementById("btn-form");
    const deletar = document.querySelectorAll("btn-del");
  


    // Função para criar enviar os dados ao banco
    btnForm.addEventListener('click',(e) => {
      e.preventDefault();
      


    //   Variaveis com o valor do inpunt 

      let paciente = "pacientes";

      let nome = document.querySelector('#inputName').value;
      let cpf = document.querySelector('#inputCPF').value;
      let data = document.querySelector('#inputData').value;
      let idade = document.querySelector('#inputIdade').value;
      let natu = document.querySelector('#inputNatural').value;
      let sexo = document.querySelector('#inputSexo').value;
      let civil = document.querySelector('#inputCivil').value;
      let tel = document.querySelector('#inputTel').value;
      let cel = document.querySelector('#inputCel').value;
      let ocupa = document.querySelector('#inputProf').value;
      let escol = document.querySelector('#inputEscol').value;
      let relig = document.querySelector('#inputRelig').value;
      let cidade = document.querySelector('#inputCidade').value;
      let estado = document.querySelector('#inputEstado').value;
      let cep = document.querySelector('#inputZip').value;
      let end = document.querySelector('#inputAddress').value;
      let bairro = document.querySelector('#inputBairro').value;



    //   Enviando dados para o banco
      db.collection(paciente).add({
          Nome:nome,
          CPF:cpf,
          Nascimento:data,
          Idade:idade,
          Naturalidade:natu,
          Sexo:sexo,
          Estado_Civil:civil,
          Telefone:tel,
          Celular:cel,
          Ocupação:ocupa,
          Escolaridade:escol,
          Religião:relig,
          Cidade:cidade,
          Estado:estado,
          Cep:cep,
          Endereço:end,
          Bairro:bairro
      })
      .then((docRef) => {
          console.log("Cadastrado Com Sucesso",docRef.id);

      })
      .catch((err) => {
              console.log("Ops,Não foi possível finalizar o cadastro,Chama o Rebertt",err);
      });

      form.reset();
  });




// Lendo todos os dados de uma coleção em tempo real!!
db.collection("pacientes").onSnapshot((data)=>{
  const table = document.getElementById("lisTable");  
  data.docs.map((val)=>{


    // O codigo apenas funciona após remover o esses inner

  //   table.innerHTML += 

  //   `<tr>
  //   <td>4</td>
  //   <td>${val.data().Nome   }</td>
  //   <td>${val.data().CPF}</td>
  //   <td class="align-middle">
  //     <div class="progress" data-height="4" data-toggle="tooltip" title="100%">
  //       <div class="progress-bar bg-success" data-width="100"></div>
  //     </div>
  //   </td>
  //   <td>${val.data().Nascimento}</td>
  //   <td><div class="badge badge-success">Ativo</div></td>
  //   <td><a href="#" class="btn btn-secondary">Detalhes</a></td>
  //   <td><a href="#" class="btn btn-success">Editar</a></td>
  //   <td><button class="btn btn-danger" id="btn-del">Apagar</button></td>
  //   </tr>
  // `

  

    });

});




// Deletando conteudos
deletar.addEventListener("click",deletando);
function deletando(){
  alert("deu certo"); 
}

 
