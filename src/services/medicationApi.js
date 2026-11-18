// api utilizada
const API_URL = import.meta.env.VITE_MEDICATION_API_URL;

function getApiUrl() {
  if (!API_URL) {
    throw new Error('API não configurada. Crie o arquivo .env e informe VITE_MEDICATION_API_URL.');
  }
  return API_URL;
}

async function request(path = '', options = {}) {
  const response = await fetch(`${getApiUrl()}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const message = `A API retornou um erro (${response.status}). Verifique a URL e tente novamente.`;
    throw new Error(message);
  }

  if (response.status === 204) return null;
  return response.json();
}

export async function getMedications() {
  const data = await request();
  if (!Array.isArray(data)) throw new Error('A resposta da API não está no formato esperado.');
  return data;
}

export function createMedication(medication) {
  return request('', { method: 'POST', body: JSON.stringify(medication) });
}

export function updateMedication(id, medication) {
  return request(`/${encodeURIComponent(id)}`, {
    method: 'PUT',
    body: JSON.stringify(medication),
  });
}

export function deleteMedication(id) {
  return request(`/${encodeURIComponent(id)}`, { method: 'DELETE' });
}