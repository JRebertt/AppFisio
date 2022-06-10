function showUsers() {
  axios.get(`${url}?tipo=ativos`)
    .then((res) => {
      console.log(res)
      let option = res.data.map((val) => {
        console.log(val)
        let id = val.id;

        return `<option value="${id}">${val.nome}</option>`;

      })
      
      
      const contentPacientes = document.getElementById("contentPacientes"); 
      contentPacientes.innerHTML =
        ` 
          <select 
              class="custom-select">
                <option selected>Escolha...</option>
                ${option}
              
          </select>

          <div class="input-group-append">
          <button class="btn btn-primary" type="submit">
            Continuar
          </button>
        </div>
          
            
      `

    })
    .catch((err) => {
      console.log(err)
    })

}

showUsers()

