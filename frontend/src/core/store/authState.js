import { writable } from "svelte/store";

const initialState = {
    token: localStorage.getItem('token'),
};

const authState = writable(initialState);

export default authState;
