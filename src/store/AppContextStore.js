import { defineStore } from 'pinia'

export const appContextStore = defineStore('AppContextStore',{
    state: () => ({ jwt: null, user: null }),
    getters: {
        getJWT: (state) => state.jwt,
        getUser: (state) => state.user
    },
    actions: {
        setJWT(jwt) {
            this.jwt = jwt
        },
        setUser(user) {
            this.user = user
        }
    }
})