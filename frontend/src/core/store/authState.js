import { writable } from "svelte/store";

const initialState = {
    token: localStorage.getItem('token'),
};

const authState = writable(initialState);

window.addEventListener('storage', () => {
    console.log('AAAAAAAAAAAAa');
    authState.update((state) => ({...state, token: localStorage.getItem('token')}))
});

export default authState;
