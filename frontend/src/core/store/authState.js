import { writable } from "svelte/store";

export const initialState = () =>  ({
    token: null,
    username: null,
});

export default writable(initialState());