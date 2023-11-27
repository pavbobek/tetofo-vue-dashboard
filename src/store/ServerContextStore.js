import { pinia } from 'pinia'

export const serverContextStore = pinia('ServerContextStore',{
    state: () => ({ serverUrl: null }),
    getters: {
        getServerUrl: (state) => state.serverUrl
    },
    actions: {
        setServerUrl(serverUrl) {
            this.serverUrl = serverUrl
        }
    }
})