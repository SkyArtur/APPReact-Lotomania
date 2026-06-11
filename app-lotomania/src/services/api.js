const TOKEN = import.meta.env.VITE_TOKEN || '';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
const HEADERS = TOKEN 
    ? {'Content-Type': 'application/json', 'Authorization': `Token ${TOKEN}`} 
    : {'Content-Type': 'application/json'}

export const API_ENDPOINTS = {
    'contests': `${API_URL}/contests/`,
    'contestsAll': `${API_URL}/contests/all/`, 
    'contestLatest': `${API_URL}/contests/latest/`, 
    'bets': `${API_URL}/bets/`,
    'betsAll': `${API_URL}/bets/all/`, 
    'betLatest': `${API_URL}/bets/latest/`, 
    'numbers': `${API_URL}/numbers/`, 
    'numbersAll': `${API_URL}/numbers/all/`, 
    
}


export async function apiFetch(endpoint, urlPath = '') {
    try {
        let url = API_ENDPOINTS[endpoint] ?? ''
        const response = await fetch(`${url}${urlPath}`, { headers: HEADERS });
        if (!response.ok) {
            throw new Error('Failed to fetch lotomania data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching lotomania data:', error);
        throw error;
    }
}
