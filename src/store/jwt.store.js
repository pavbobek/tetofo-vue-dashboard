import { pinia } from 'pinia'

export const jwtStore = pinia('JWTStore',{
    state: () => ({ jwt: null }),
    actions: {
        getAuthHeader() {
            if (this.jwt) {
                return { Autorization: 'Bearer ' + this.jwt };
            } else {
                return {};
            }
        }
    }
})