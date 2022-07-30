
// Listando Usuarios no Select
function showUsers() {
  axios.get(`${url}?tipo=ativos`)
    .then((res) => {

      let option = res.data.map((val) => {
        let id = val.id;
        return `<option value="${id}">${val.nome}</option>`;

      })

      contentPacientes.innerHTML =
        ` 
          <select class="custom-select" id="elementId">
                <option selected>Escolha...</option>
                ${option}
              
          </select>

          <div class="input-group-append">
          <button class="btn btn-primary" type="button" onclick=showUserHistoric()>
            Continuar
          </button>
        </div>            
      `

      gamB.innerHTML += `<button class="btn btn-primary" onclick="handleNewEvolution()">Enviar</button>`

    })
    .catch((err) => {
      console.log(err)
    })
}
showUsers()


// Historicos de Atividades
function showUserHistoric() {

  let select = document.getElementById('elementId');
  let idUser = select.options[select.selectedIndex].value

  console.log(idUser)

// Listando Historico de Evoluções/Avaliações

  function getHistoric() {
    axios.get(urlHistoric + idUser)
      .then((res) => {

        console.log(res, "Aqui é o response do then")
        

        res.data.map((val) => {
         
          console.log(val, "val aqui map")

          histoc.innerHTML = `
          <h2> Historico: <span class="text-primary">${val.paciente.nome}</span></h2>
                           <div class="row">
                             <div class="col-12">
                               <div class="activities">
                                 <div class="activity">
                                   <div class="activity-icon bg-primary text-white shadow-primary">
                                     <i class="fas fa-comment-alt"></i>
                                   </div>
                                   <div class="activity-detail">
                                     <div class="mb-2">
                                       <span class="text-job text-primary" style="font-size: 0.8rem; margin-right: 0.5rem">${val.dataCadastro}</span>
                                       <div class="float-right dropdown">
                                         <a href="#" data-toggle="dropdown"><i class="fas fa-ellipsis-h"></i></a>
                                         <div class="dropdown-menu">
                                           <div class="dropdown-title">Options</div>
                                           <a href="#" class="dropdown-item has-icon"><i class="fas fa-eye"></i> View</a>
                                           <a href="#" class="dropdown-item has-icon"><i class="fas fa-list"></i> Detail</a>
                                           <div class="dropdown-divider"></div>
                                           <a href="#" class="dropdown-item has-icon text-danger"
                                             data-confirm="Wait, wait, wait...|This action can't be undone. Want to take risks?"
                                             data-confirm-text-yes="Yes, IDC"><i class="fas fa-trash-alt"></i> Archive</a>
                                         </div>
                                       </div>
                                     </div>
                                     <p>Vai entrar algo aqui!!</p>
                                   </div>
                                 </div>
                               </div>
          `
        })

      }).catch((err) => {
        console.log(err)
      })
  }
  getHistoric()
}



function handleNewEvolution() {
  const textArea = document.getElementById('TArea').value;

   let select = document.getElementById('elementId');
  let idUser = select.options[select.selectedIndex].value

  console.log(idUser)

  axios.post(urlEvolution + idUser, 
  {
    texto: textArea,
  })
  .then((res) => {
    console.log(res)
  }).catch((err) => {err})

  console.log(textArea)
}