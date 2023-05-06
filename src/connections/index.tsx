export const apiUrl = "http://localhost:8000/api/storage/"

export async function getDataFromAPI() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}