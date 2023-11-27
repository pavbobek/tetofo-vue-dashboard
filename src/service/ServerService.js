import { axios } from 'axios'
import { appContextStore } from '../store/AppContextStore.js'
import { serverContextStore } from '../store/ServerContextStore.js'

class ServerService {
    get(endpoint) {
        return axios.get(serverContextStore.getServerUrl + endpoint)
    }
    getAuthenticated(endpoint) {
        return axios.get(serverContextStore.getServerUrl + endpoint, { headers: this.getAuthenticationHeader() })
    }
    getAuthenticationHeader() {
        let jwt = appContextStore.getJWT;
        if (jwt) {
            return { Authorization: 'Bearer ' + jwt };
        } else {
            return {};
        }
    }
}

export default new ServerService()