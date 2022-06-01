
// Criar e Enviar dados para firestore
btnForm.addEventListener("click", (e) => {
  e.preventDefault();

  // Variavel Collection name
  let paciente = "pacientes";

  // Variaveis com o valor do inpunt
  let nome = document.querySelector("#inputName").value;
  let cpf = document.querySelector("#inputCPF").value;
  let data = document.querySelector("#inputData").value;
  let idade = document.querySelector("#inputIdade").value;
  let natu = document.querySelector("#inputNatural").value;
  let sexo = document.querySelector("#inputSexo").value;
  let civil = document.querySelector("#inputCivil").value;
  let tel = document.querySelector("#inputTel").value;
  let cel = document.querySelector("#inputCel").value;
  let ocupa = document.querySelector("#inputProf").value;
  let escol = document.querySelector("#inputEscol").value;
  let relig = document.querySelector("#inputRelig").value;
  let cidade = document.querySelector("#inputCidade").value;
  let estado = document.querySelector("#inputEstado").value;
  let cep = document.querySelector("#inputZip").value;
  let end = document.querySelector("#inputAddress").value;
  let bairro = document.querySelector("#inputBairro").value;

  // Enviando dados para o banco
  db.collection(paciente)
    .add({
      Nome: nome,
      CPF: cpf,
      Nascimento: data,
      Idade: idade,
      Naturalidade: natu,
      Sexo: sexo,
      Estado_Civil: civil,
      Telefone: tel,
      Celular: cel,
      Ocupação: ocupa,
      Escolaridade: escol,
      Religião: relig,
      Cidade: cidade,
      Estado: estado,
      Cep: cep,
      Endereço: end,
      Bairro: bairro,
    })
    .then((docRef) => {
      console.log("Cadastrado Com Sucesso", docRef.id);
    })
    .catch((err) => {
      console.log("Ops,Não foi possível finalizar o cadastro", err);
    });

  form.reset();
});

// Lendo todos os dados de uma coleção em tempo real!!
db.collection("pacientes").onSnapshot((data) => {
  const table = document.getElementById("lisTable");
  // aqui eu esvazio antes de popular os novos dados.
  // adiciono apenas cabeçalho substituindo todo o
  table.innerHTML = `<tr>
              <th>Id</th>
              <th>Nome</th>                          
              <th>Cpf</th>                           
              <th>Status</th>                          
              <th>Interação</th>                        
              </tr>`;
  data.docs.forEach((val, index) => {
    // Add conteudo de dados no table
    // Pego o id
    let id = val.id;
    //  no lugar de pegar auqele array e adicionar um addEventListenner, eu altero o typo do button
    // para type="button" porque por padrão ele vem com type="submit"
    // adiciono um onclick passando o id atual pegado anteriormente no for
    table.innerHTML += `<tr>        
            <td user-id="${val.id}">${index + 1}</td>        
            <td>${val.data().Nome}</td>        
            <td>${val.data().CPF}</td>              
            <td><div class="badge badge-success">Ativo</div></td>             
            <td>
            <div class="btn-group dropup">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mais</button>
          <div class="dropdown-menu"><a class="dropdown-item has-icon" href="#"><i class="far fa-eye"></i> Detalhes</a>
          <a class="dropdown-item has-icon" href="historico.html"><i class="far fa-file"></i> Histórico</a>
          </div>
            </div>
              <button class="btn btn-danger btn-del" type="button" onclick=apagar_do_banco("${id}")>Apagar</button>

            </td>   
                 
        </tr>`;
  });
}); -

  function apagar_do_banco(id) {
    // pego o id passado no onclick e apago o item necessário
    service
      .firestore()
      .collection("pacientes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Apagado");
      });
  }
