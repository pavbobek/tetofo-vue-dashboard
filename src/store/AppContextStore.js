import { pinia } from 'pinia'

export const appContextStore = pinia('AppContextStore',{
    state: () => ({ jwt: null }),
    getters: {
        getJWT: (state) => state.jwt
    },
    actions: {
        setJWT(jwt) {
            this.jwt = jwt
        }
    }
})