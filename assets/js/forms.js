

    const form = document.getElementById("forms");
    const btnForm = document.getElementById("btn-form");
    const tableList = document.getElementById("lisTable")
    const btnDelete = document.getElementsByClassName("deletar");
    const tr = document.getElementsByTagName("")

    btnForm.addEventListener('click',(e) => {
        e.preventDefault();
        
      //   Variaveis com o valor do inpunt 
        // let paciente = "pacientes";
  
        let nome = document.querySelector('#inputName').value;
        let cpf = document.querySelector('#inputCPF').value;

        tableList.innerHTML += 
        `<tr>
        <td>4</td>
        <td>${nome}</td>
        <td>${cpf}</td>
        <td class="align-middle">
          <div class="progress" data-height="4" data-toggle="tooltip" title="100%">
            <div class="progress-bar bg-success" data-width="100"></div>
          </div>
        </td>
        <td>2021-09-16</td>
        <td><div class="badge badge-success">Ativo</div></td>
        <td><a href="#" class="btn btn-secondary">Detalhes</a></td>
        <td><a href="#" class="btn btn-success">Editar</a></td>
        <td><button class="btn btn-danger del">Apagar</button></td>
        </tr>
      `


      //   let data = document.querySelector('#inputData').value;
      //   let idade = document.querySelector('#inputIdade').value;
      //   let natu = document.querySelector('#inputNatural').value;
      //   let sexo = document.querySelector('#inputSexo').value;
      //   let civil = document.querySelector('#inputCivil').value;
      //   let tel = document.querySelector('#inputTel').value;
      //   let cel = document.querySelector('#inputCel').value;
      //   let ocupa = document.querySelector('#inputProf').value;
      //   let escol = document.querySelector('#inputEscol').value;
      //   let relig = document.querySelector('#inputRelig').value;
      //   let cidade = document.querySelector('#inputCidade').value;
      //   let estado = document.querySelector('#inputEstado').value;
      //   let cep = document.querySelector('#inputZip').value;
      //   let end = document.querySelector('#inputAddress').value;
      //   let bairro = document.querySelector('#inputBairro').value;
  
      //   Enviando dados para o banco
  
        // db.collection(paciente).add({
        //     Nome:nome,
        //     CPF:cpf,
          //   Nascimento:data,
          //   Idade:idade,
          //   Naturalidade:natu,
          //   Sexo:sexo,
          //   Estado_Civil:civil,
          //   Telefone:tel,
          //   Celular:cel,
          //   Ocupação:ocupa,
          //   Escolaridade:escol,
          //   Religião:relig,
          //   Cidade:cidade,
          //   Estado:estado,
          //   Cep:cep,
          //   Endereço:end,
          //   Bairro:bairro
        // })
        // .then((docRef) => {
        //     console.log("Cadastrado Com Sucesso",docRef.id);
  
        // })
        // .catch((err) => {
        //         console.log("Ops,Não foi possível finalizar o cadastro,Chama o Rebertt",err);
        // });
        form.reset();
        swal({
            title: "Bom Trabalho!",
            text: "Cadastro realizado com sucesso!",
            icon: "success",
            button: "Continuar",
          });
    });


    //Deletar
    

    $(".del").click(function() {
        swal({
            title: 'Tem certeza ?',
            text: 'Uma vez excluído, você não poderá recuperar este arquivo !',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            swal('Poof! Seu arquivo foi deletado!', {
              icon: 'success',
            });
            } else {
            swal('Seu arquivo está seguro!');
            }
          });
      });
    

    
