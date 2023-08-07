async function pegarUsuario() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

function pegarUsuarioPorID(usersArray, id) {
  return usersArray.find((user) => user.id === id) || null;
}

async function pegarUsuarioLocal() {
  try {
    const dataJsonString = localStorage.getItem("data");
    const data = JSON.parse(dataJsonString);

    if (!data || !data.id) {
      throw new Error("Dados invalidos no localstorage");
    }

    const users = await pegarUsuario();
    const user = pegarUsuarioPorID(users, data.id);

    if (user) {
      return user;
    } else {
      console.log("Usuario nao localizado com este ID:", data.id);
      return null;
    }
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}

pegarUsuarioLocal();

function displayUserData(user) {
    const imageElement = document.getElementById('image');
    const nameElement = document.getElementById('name');
    const idElement = document.getElementById('id');
    const fullNameElement = document.getElementById('fullName');
    const addressElement = document.getElementById('address');
    const localityElement = document.getElementById('locality');
    const sexElement = document.getElementById('sex');
    const hairElement = document.getElementById('hair');
    const eyesElement = document.getElementById('eyes');
    const heightElement = document.getElementById('height');
    const widthElement = document.getElementById('width');
  
    imageElement.src = user.image || '';
    nameElement.innerText = user.firstName;
    idElement.innerText = user.id;
    fullNameElement.innerText = `${user.firstName} ${user.lastName}`;
    addressElement.innerText = user.address?.address || '';
    localityElement.innerText = user.address?.city || '';
    sexElement.innerText = user.gender || '';
    hairElement.innerText = user.hair?.type || '';
    eyesElement.innerText = user.eyeColor || '';
    heightElement.innerText = user.height || '';
    widthElement.innerText = user.weight || '';
  }
  
  async function carregarUser() {
    try {
      const userData = await pegarUsuarioLocal();
      if (!userData) {
        console.log('Requisição para busca de dados falhou.');
        return;
      }
  
      displayUserData(userData);
    } catch (error) {
      console.error('Erro:', error);
    }
  }
  carregarUser();