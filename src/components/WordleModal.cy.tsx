import {HelpModal} from "./WordleModal";


describe('HelpModal component',()=>{
    

    const useModalHelp = (val:boolean)=>{}

    
    it('should display HelpModal component default',()=>{
        cy.mount(<HelpModal useModalHelp={useModalHelp} />);
        cy.get('div.modal-backdrop div.Modal div.Modal-header').should('exist');
        cy.get('div.Modal div.Modal-header h2').should('have.text','Wordle Rules');
        cy.get('div.Modal-header button.btn-close').should('exist');
        cy.get('p').should('exist');
        cy.get('p .model-example-style').should('have.attr','style','background-color: lightgray;');

    });




    
})