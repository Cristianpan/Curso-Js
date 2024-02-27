const url = "http://localhost:3000/clientes";

export async function createClient(client) {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });

    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
}

export async function updateClient(client) {
  try {
     await fetch(`${url}/${client.id}`, {
      method: "PUT",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });

    window.location.href = "/"; 
  } catch (error) {
    console.log(error); 
  }
}

export async function getClients() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getClientById(clientId) {
  try {
    const result = await fetch(`${url}/${clientId}`);
    return await result.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteClient(clientId) {
  try {
    await fetch(`${url}/${clientId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
}
