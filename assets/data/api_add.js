
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
        // console.log(val)
        let id = val.id;

        table.innerHTML += `<tr>        
            <td user-id="${val.id}">${val.id}</td>        
            <td>${val.nome}</td>        
            <td>${val.cpf}</td>              
            <td><div class="badge badge-success">Ativo</div></td>             
            <td>
          <button 
            class="btn btn-primary" type="button" data-toggle="modal" data-target="#modalPaciente" onclick=editUser("${id}")>
            <i class="fas fa-edit"></i>
          </button>
              <button 
                class="btn btn-danger btn-del" type="button" onclick=deleteUser("${id}")>
                <i class="fas fa-trash"></i>
              </button>

            </td>   
                 
        </tr>`;
      });
      // console.log(res.data);
    })
    .catch((err) => console.log(err));
}

getUser();

function deleteUser(id) {
  axios.delete("https://appfisio-api.herokuapp.com/api/pacientes/" + id)

    .then((res) => {
      iziToast.error({
        title: 'Deletado',
        message: 'Paciente Deletado com Sucesso',
        position: 'topRight',
        timeout: '1500',
      });

      setTimeout(() => {
        document.location.reload(true);
        form.reset();
        console.log(res);
      }, 1600)

    })
    .catch((err) => { err })

}


function editUser(id) {
  axios.get("https://appfisio-api.herokuapp.com/api/pacientes/" + id)
    .then((res) => {
      const modal = document.getElementById('contentModal')
      console.log(res.data)

      let val = res.data

      modal.innerHTML = '';

      modal.innerHTML += 
      `
      <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Paciente ${val.nome}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form autocomplete="off" action="post" data-ls-module="form" id="forms" method="POST">
            <div class="form-group">
              <label for="inputName">Nome</label>
              <input type="text" class="form-control" id="inputName" placeholder="${val.nome}" readonly>
            </div>

            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputCPF">CPF</label>
                <input type="text" class="form-control ls-mask-cpf" id="inputCPF" placeholder="${val.cpf}" readonly>
              </div>
              <div class="form-group col-md-4">
                <label for="inputData">Data de Nascimento</label>
                <input type="text" class="form-control ls-mask-date" id="inputData" placeholder="${val.dataNascimento}" readonly>
              </div>
              <div class="form-group col-md-2">
                <label for="inputIdade">Idade</label>
                <input type="text" class="form-control" id="inputIdade" placeholder="${val.idade}" readonly>
              </div>

            </div>

            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputNatural">Naturalidade</label>
                <input type="text" class="form-control" id="inputNatural" placeholder="${val.naturalidade}" readonly>
              </div>

              <div class="form-group col-md-3">
                <label for="inputSexo">Sexo</label>
                <select class="form-control" id="inputSexo" readonly>
                  <option selected>${val.sexo}</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputCivil">Estado Civil</label>
                <select id="inputCivil" class="form-control" readonly>
                  <option selected>${val.estadoCivil}</option>
                  <option value="Solteiro">Solteiro</option>
                  <option value="Casado">Casado</option>
                  <option value="Divorciado">Divorciado</option>
                  <option value="Viuvo">Viúvo</option>
                </select>
              </div>

            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputTel">Telefone Residencial</label>
                <input type="text" class="form-control" id="inputTel" placeholder="${val.telefoneResidencial}" readonly>
              </div>
              <div class="form-group col-md-6">
                <label for="inputCel">Celular</label>
                <input type="text" class="form-control" id="inputCel" placeholder="${val.celular}" readonly>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputProf">Ocupação</label>
                <input type="text" class="form-control" id="inputProf" placeholder="${val.ocupacao}" readonly>
              </div>
              <div class="form-group col-md-6">
                <label for="inputEscol">Escolaridade</label>
                <select id="inputEscol" class="form-control" readonly>
                  <option selected>${val.escolaridade}</option>
                  <option value="SemEscolaridade">Sem escolaridade</option>
                  <option value="Alfabetização">Alfabetização</option>
                  <option value="FundamentalIncompleto">Fundamental incompleto</option>
                  <option value="FundamentalCompleto">Fundamental completo</option>
                  <option value="EnsinoMedioIncompleto">Ensino médio incompleto</option>
                  <option value="EnsinoMedioCompleto">Ensino médico completo</option>
                  <option value="SuperiorIncompleto">Superior incompleto</option>
                  <option value="SuperiorCompleto">Superior completo</option>
                </select>
              </div>
            </div>

            <div class="form-group col-md-14">
              <label for="inputRelig">Religião</label>
              <input type="text" class="form-control" id="inputRelig" placeholder="${val.religiao}" readonly>
            </div>

            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputCidade">Cidade</label>
                <input type="text" class="form-control" id="inputCidade" placeholder="${val.cidade}" readonly >
              </div>
              <div class="form-group col-md-4">
                <label for="inputEstado">Estado</label>
                <select id="inputEstado" class="form-control" readonly>
                  <option selected>${val.estado}</option>
                  <option value="Acre">AC</option>
                  <option value="Alagoas">AL</option>
                  <option value="Amapá">AP</option>
                  <option value="Amazonas">AM</option>
                  <option value="Bahia">BA</option>
                  <option value="Ceará">CE</option>
                  <option value="Espírito Santo">ES</option>
                  <option value="Goías">GO</option>
                  <option value="Maranhão">MA</option>
                  <option value="Mato Grosso">MT</option>
                  <option value="Mato Grosso do Sul">MS</option>
                  <option value="Minas Gerais">MG</option>
                  <option value="Pará">PA</option>
                  <option value="Paraná">PR</option>
                  <option value="Pernambuco">PE</option>
                  <option value="Piauí">PI</option>
                  <option value="Rio de Janeiro">RJ</option>
                  <option value="Rio Grande do Norte">RN</option>
                  <option value="Rio Grande do Sul">RS</option>
                  <option value="Rondônia">RO</option>
                  <option value="Roraima">RR</option>
                  <option value="Santa Catarina">SC</option>
                  <option value="São Paulo">SP</option>
                  <option value="Sergipe">SE</option>
                  <option value="Tocantins">TO</option>
                  <option value="Distrito Federal">DF</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputZip">Cep</label>
                <input type="text" class="form-control" id="inputZip" placeholder="${val.cep}" readonly>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputAddress">Endereço</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="${val.endereco}" readonly>
              </div>

              <div class="form-group col-md-6">
                <label for="inputBairro">Bairro</label>
                <input type="text" class="form-control" id="inputBairro" placeholder="${val.bairro}" readonly>
              </div>
            </div>

            <div class="form-group">
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox"> Confirme
                </label>
              </div>
            </div>
          </form>
            </div>
            <div class="modal-footer bg-whitesmoke br">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary">Salvar</button>
            </div>
          </div>
      `

      

      console.log(res);

      //mask form
    $(document).ready(function () {
      //CPF 000.000.000-00
      $('#inputCPF').mask("000.000.000-00");

      //Data
      $('#inputData').mask("00/00/0000");

      //Idade
      $('#inputIdade').mask("00");

      //celular
      $('#inputCel').mask("(00) 90000 - 0000");

      //cep
      $('#inputZip').mask("00000 - 000");
    });
    })

    .catch(err => console.log(err))
}
