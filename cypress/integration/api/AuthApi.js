export default class AuthApi {
    signup(user, code = 201) {
        return cy.request('POST', '/api/auth/signup', user).then(response => {
            expect(response.status).to.eql(code);
            return response;
        })
    }
}