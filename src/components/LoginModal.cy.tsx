import {LoginModal} from "./LoginModal";


describe('LoginModal component',()=>{
    
    let userName = '';
    const enterLogin = (name:string)=>{userName=name};
    const toggleLoginModal = () => {}

    
    it('should display LoginModal component default',()=>{
        cy.mount(<LoginModal enterLogin={enterLogin} toggleLoginModal={toggleLoginModal}/>);
        cy.get('div .Modal-header h2').should('have.text','Login');
        cy.get('.login-form h4').should('have.text', 'Enter your name: ');
        cy.get('.login-form input').should('exist');
        cy.get('.login-form button').should('have.attr','class','btn btn-info submit');

    });



    it('should raise data', () => {
        const submit = cy.spy().as('enterLogin');

        cy.mount(<LoginModal enterLogin={submit} toggleLoginModal={toggleLoginModal}/>);
        cy.get('.login-form input').type('my name');
        cy.get('button[type="button"]').click();
        cy.get('@enterLogin').should('have.been.calledWith', 'my name');
    });
    
})