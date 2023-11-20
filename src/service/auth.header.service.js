class AuthHeaderService {
    getAuthHeader() {
        let jwt = JSON.parse(localStorage.getItem('jwt'));
        if ( jwt ) {
            return { Autorization: 'Bearer ' + jwt };
        } else {
            return {};
        }
    }
}
export default new AuthHeaderService();