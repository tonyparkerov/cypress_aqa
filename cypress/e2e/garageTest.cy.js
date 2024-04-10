const logIn = 'guest';
const password = 'welcome2qauto';
const testUrl = `https://${logIn}:${password}@qauto2.forstudy.space/`;
const name = 'Anton';
const lastName = 'Test';
const userPassword = 'Qwerty123!'
const emailGenerator = emailLength => {
  const chars = 'abcdefjhijklmnopqrstuvwxyz0123456789';
  let res = '';
  let randIndex;
  for(let i = 0; i < emailLength; i++) {
    if(i === 0) {
      randIndex = Math.floor(Math.random() * chars.indexOf('0'));
    } else {
      randIndex = Math.floor(Math.random() * chars.length)
    }
    res += chars[randIndex];
  }
  return `${res}@gmail.com`;
};

const email = emailGenerator(7);

describe('Test Suite', () => {
  it('Test sign up in Garage service', () => {
    cy.visit(testUrl);
    cy.get('button').contains('Sign up').click();
    cy.get('input#signupName').type(name).should('have.value', name);
    cy.get('input#signupLastName').type(lastName).should('have.value', lastName);
    cy.get('input#signupEmail').type(email).should('have.value', email);
    cy.get('input#signupPassword').type(userPassword).should('have.value', userPassword);
    cy.get('input#signupRepeatPassword').type(userPassword).should('have.value', userPassword);
    cy.get('button').contains('Register').click();
    cy.url().should('include', '/panel/garage');
    cy.get('.-profile').contains('Profile').click();
    cy.url().should('include', '/panel/profile');
    cy.get('p.profile_name.display-4').should('contain.text', `${name} ${lastName}`);
  })
})