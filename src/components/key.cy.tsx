import Key from "./key";
import { keyboardLetter } from "../hooks/wordleHooks";

describe('Key component',()=>{
    
    function LetterEnter(key:string){return;};
    const k1:keyboardLetter = {color:'', value:'H'};
    const k2:keyboardLetter = {color:'green', value:'H'}
    
    it('should display Key component',()=>{
        cy.mount(<Key key={'k-'+k1.value} letter={k1} LetterEnter={LetterEnter}/>);
        cy.get('button').should('have.attr', 'class', 'key btn btn-outline-dark ');
        cy.get('button').should('have.text', 'H');
        cy.get('button').trigger('mouseover');
        cy.get('button').should('have.css','background-color');
    });

    it('should display Key component post status update',()=>{
        cy.mount(<Key key={'k-'+k2.value} letter={k2} LetterEnter={LetterEnter}/>);
        cy.get('button').should('have.attr', 'class', 'key btn btn-outline-dark green');
        cy.get('button').should('have.text', 'H');

    });

    it('should raise key letter', ()=>{
        const submit = cy.spy().as('enterLogin');

        cy.mount(<Key key={'k-'+k1.value} letter={k1} LetterEnter={submit}/>);
        cy.get('button').click();
        cy.get('@enterLogin').should('have.been.calledWith', k1.value);
    })

    
})