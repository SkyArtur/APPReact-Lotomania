
import {apiFetch} from './api';


export async function getNumbers() {
    return await apiFetch('numbers');
}

export async function getNumbersAll() {
    return await apiFetch('numbersAll');
}
