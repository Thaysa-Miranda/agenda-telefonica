function adicionar() {
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const telefone = document.querySelector("#telefone");
    const nameContato = document.querySelector(".nomeContato");
    const emailContato = document.querySelector(".emailContato");
    const telContato = document.querySelector(".telContato");
  
    const valueName = name.value;
    const valueEmail = email.value;
    const valueTelefone = telefone.value;
  
    nameContato.innerHTML = `${valueName}`;
    emailContato.innerHTML = `${valueEmail}`;
    telContato.innerHTML = `${valueTelefone}`;
  }