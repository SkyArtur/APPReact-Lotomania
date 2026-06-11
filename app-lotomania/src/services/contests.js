import {apiFetch} from './api';


export async function getContestsList() {
    return await apiFetch('contests');
}

export async function getContestsListDetails() {
    return await apiFetch('contestsAll');
}

export async function getLatestContest() {
    return await apiFetch('contestLatest');
}

export async function getContestByReference(reference) {
    return await apiFetch('contests', `${reference}/`);
}
