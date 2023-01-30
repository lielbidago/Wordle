import LetterTile from "./LetterTile";
import { wordleLetter } from "../hooks/wordleHooks";


describe('LetterTile component',()=>{
    
    const letterObj1:wordleLetter = {char:'', color:'white', x:1, y:2};
    const letterObj3:wordleLetter = {char:'H', color:'green', x:1, y:2};
    const LetterPointerIsNotKey = {x:2, y:3, pRef:null};
    const LetterPointerIsKey = {x:1, y:2, pRef:null};
    

    
    it('should display LetterTile component when currLetterPointer is not LetterTile',()=>{
        cy.mount(<LetterTile letterObj={letterObj1} key={letterObj1.x+letterObj1.y} currLetterPointer={LetterPointerIsNotKey}/>);
        cy.get('input').should('have.attr', 'class', 'tile white');
        cy.get('input').should('have.text', '');

    });

    it('should display LetterTile component when currLetterPointer is LetterTile',()=>{
        cy.mount(<LetterTile letterObj={letterObj1} key={letterObj1.x+letterObj1.y} currLetterPointer={LetterPointerIsKey}/>);
        cy.get('input').should('have.attr', 'class', 'tile white');
        cy.get('input').should('have.text', '');
        cy.get('input').focus();
        cy.get('input').should('have.css','border');

    })

    it('should display LetterTile component post letter check',()=>{
        cy.mount(<LetterTile letterObj={letterObj3} key={letterObj3.x+letterObj3.y} currLetterPointer={LetterPointerIsNotKey}/>);
        cy.get('input').should('have.attr', 'class', 'tile green');
        cy.get('input').should('have.value', 'H');
        cy.get('input.tile.green').should('have.css','background-color', 'rgba(18, 226, 198, 0.76)');
        

    })

    
})