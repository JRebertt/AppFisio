
db.collection("pacientes").onSnapshot((data) => {
  const contentPacientes = document.getElementById("contentPacientes")

  contentPacientes.innerHTML += `
            <select class="custom-select" id="selectPacientes">
            <option selected>Escolha...</option>
            </select>
            <div class="input-group-append">
            <button class="btn btn-primary" type="button" onclick=select_active()>Continuar</button>
            </div>
  `
  // // aqui eu esvazio antes de popular os novos dados.
  // // adiciono apenas cabeçalho substituindo todo o conteúdo

  data.docs.forEach((val) => {
    const select = document.getElementById("selectPacientes");

    // Add conteudo de dados no table
    // Pego o id
    let id = val.id;
    //  no lugar de pegar aquele array e adicionar um addEventListenner, eu altero o typo do button
    // para type="button" porque por padrão ele vem com type="submit"
    // adiciono um onclick passando o id atual pegado anteriormente no for
    select.innerHTML += `
          <option value="${val.id}">${val.data().Nome}</option>`;
    console.log();

  });
});

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