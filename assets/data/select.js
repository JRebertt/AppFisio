
function showUsers() {
  axios.get(`${url}?tipo=ativos`)
    .then(res => {
      const contentPacientes = document.getElementById("contentPacientes")

      contentPacientes.innerHTML += `
            <select class="custom-select" id="selectPacientes">
            <option selected>Escolha...</option>
            </select>
            <div class="input-group-append">
            <button class="btn btn-primary" type="button" onclick=select_active("${val.id}")>Continuar</button>
            </div>
  `


      res.data.map((val) => {
        const select = document.getElementById("selectPacientes");

        select.innerHTML += `
          <option value="${val.id}">${val.nome}</option>`;
        console.log();

      });
      console.log(res)
    })
};

function select_active(id) {
  // pego o id passado no onclick e apago o item necessário
  // service
  //     .firestore()
  //     .collection("pacientes")
  //     .doc(id)
  //     .delete()
  //     .then(() => {
  //         console.log("Apagado");
  //     });
}