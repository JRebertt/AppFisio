
btnForm.addEventListener("click", (e) => {
  e.preventDefault();

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

  axios.post(url, {
    nome: nome,
    cpf: cpf,
    idade: idade,
    naturalidade: natu,
    sexo: sexo,
    estadoCivil: civil,
    telefoneResidencial: tel,
    celular: cel,
    ocupacao: ocupa,
    escolaridade: escol,
    religiao: relig,
    cidade: cidade,
    estado: estado,
    cep: cep,
    endereco: end,
    bairro: bairro,
    dataNascimento: data,
  })

    .then(() => {
      
      iziToast.success({
        title: 'Sucesso',
        message: 'Paciente Cadastrado com Sucesso',
        position: 'topRight',
        timeout: '1500',
      });
      console.log(iziToast)
      setTimeout(() => {
        document.location.reload(true);
        form.reset();
      }, 1600)
      

    })
    .catch((err) => console.log(err));
});

function getUser() {
  axios.get(`${url}?tipo=ativos`)
    .then((res) => {
      const table = document.getElementById("lisTable");
      table.innerHTML =
        `<tr>
              <th>Id</th>
              <th>Nome</th>                          
              <th>Cpf</th>                           
              <th>Status</th>                          
              <th>Interação</th>                        
        </tr>`;

      res.data.map((val) => {
        console.log(val)
        let id = val.id;

        table.innerHTML += `<tr>        
            <td user-id="${val.id}">${val.id}</td>        
            <td>${val.nome}</td>        
            <td>${val.cpf}</td>              
            <td><div class="badge badge-success">Ativo</div></td>             
            <td>
            <div class="btn-group dropdown">
          <button 
            class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mais
          </button>
          <div class="dropdown-menu"><a class="dropdown-item has-icon" href="#"><i class="far fa-eye"></i> Detalhes</a>
              <a class="dropdown-item has-icon" href="historico.html"><i class="far fa-file"></i> Histórico</a>
          </div>
            </div>
              <button 
                class="btn btn-danger btn-del" type="button" onclick=deleteUser("${id}")>
                Apagar
              </button>

            </td>   
                 
        </tr>`;
      });
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}

getUser();

function deleteUser(id) {
  axios.delete("https://appfisio-api.herokuapp.com/api/pacientes/" + id)

    .then((res) => {
      console.log(res);
      document.location.reload(true);
    })
    .catch((err) => { err })

}
