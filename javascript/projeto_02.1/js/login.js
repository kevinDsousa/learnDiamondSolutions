async function fazerLogin(username, senha) {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: senha,
        expiresInMins: 60,
      })
    });
    
    if (!response.ok) {
      throw new Error('Erro ao fazer login. Verifique seus dados.');
    }

    const data = await response.json();
    const newData = {
      id: data.id,
    }
    const token = data.token;
    localStorage.setItem('token', token);
    localStorage.setItem('data', JSON.stringify(newData));
    alert('Seja bem vindo, ' + username);

    window.location.href = 'home.html';
  } catch (error) {
    alert('Dados inválidos: ' + error.message);
  }
}

const inputUsername = document.getElementById('username');
const inputSenha = document.getElementById('senha');
const btnLogar = document.getElementById('logar');

btnLogar.addEventListener('click', (event) => {
  event.preventDefault();
  const username = inputUsername.value;
  const senha = inputSenha.value;
  fazerLogin(username, senha);
});