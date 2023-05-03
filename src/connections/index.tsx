export async function getDataFromAPI() {
    const response = await fetch("http://localhost:8000/api/storage/");
    const data = await response.json();
    return data;
  }