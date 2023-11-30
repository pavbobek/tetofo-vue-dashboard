import { appContextStore } from '../store/AppContextStore.js'

class AuthService {
    isUserLogged() {
        return appContextStore().user != null;
    }
    login(user) {
        appContextStore().setJWT('MOCK')
        appContextStore().setUser(user)
    }
    logout() {
        appContextStore().setJWT(null)
        appContextStore().setUser(null)
    }
}

export default new AuthService()