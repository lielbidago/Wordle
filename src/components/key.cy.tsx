import Key from "./key";
import { keyboardLetter } from "../hooks/wordleHooks";

describe('Key component',()=>{
    
    function LetterEnter(key:string){return;};
    const k:keyboardLetter = {color:'green', value:'H'}
    
    it('should display Key component',()=>{
        cy.mount(<Key key={'k-'+k.value} letter={k} LetterEnter={LetterEnter}/>);
        // cy.get('key btn btn-outline-dark');
    })
})