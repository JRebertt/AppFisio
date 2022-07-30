
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






function handleNewEvolution() {
  const textArea = document.getElementById('TArea').value;

   let select = document.getElementById('elementId');
  let idUser = select.options[select.selectedIndex].value

  console.log(idUser)

  // axios.post(urlEvolution + idUser, 
  // {
  //   texto: textArea,
  // })
  // .then((res) => {
  //   console.log(res)
  // }).catch((err) => {err})

  console.log(textArea)
}
