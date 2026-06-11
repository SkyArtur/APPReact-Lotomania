import {apiFetch} from './api';


export async function getBetsList() {
    return await apiFetch('bets');
}

export async function getBetsListDetails() {
    return await apiFetch('betsAll');
}

export async function getLatestBet() {
    return await apiFetch('betLatest');
}

export async function getBetById(id) {
    return await apiFetch('bets', `${id}/`);
}
