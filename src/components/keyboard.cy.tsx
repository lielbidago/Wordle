import {Keyboard} from "./keyboard";
import { keyboardLetter } from "../hooks/wordleHooks";


describe('Key component',()=>{
    
    function LetterEnter(key:string){return};
    const keyboardLetters:keyboardLetter[][] = [  
        [{value:'Q', color:''},{value:'W', color:''},{value:'E', color:''},{value:'R', color:''},{value:'T', color:''},{value:'Y', color:''},{value:'U', color:''},{value:'I', color:''},{value:'O', color:''},{value:'P', color:''}],
        [{value:'A', color:''},{value:'S', color:''},{value:'D', color:''},{value:'F', color:''},{value:'G', color:''},{value:'H', color:''},{value:'J', color:''},{value:'K', color:''},{value:'L', color:''}],
        [{value:'Z', color:''},{value:'X', color:''},{value:'C', color:''},{value:'V', color:''},{value:'space', color:''},{value:'B', color:''},{value:'N', color:''},{value:'M', color:''}]
    ];

    
    it('should display Keyboard component',()=>{
        cy.mount(<Keyboard LetterEnter={LetterEnter} currentKeyBoard={keyboardLetters}/>);
        cy.get('div.keyboard').should('exist');
        cy.get('div.keyboard div.row1').should('exist');
        cy.get('div.keyboard div.row2').should('exist');
        cy.get('div.keyboard div.row3').should('exist');
    });

    const keyboardLettersAfter:keyboardLetter[][] = [  
        [{value:'Q', color:''},{value:'W', color:''},{value:'E', color:''},{value:'R', color:''},{value:'T', color:''},{value:'Y', color:'grey'},{value:'U', color:''},{value:'I', color:''},{value:'O', color:'yellow'},{value:'P', color:''}],
        [{value:'A', color:'green'},{value:'S', color:''},{value:'D', color:''},{value:'F', color:''},{value:'G', color:''},{value:'H', color:''},{value:'J', color:''},{value:'K', color:''},{value:'L', color:'green'}],
        [{value:'Z', color:''},{value:'X', color:''},{value:'C', color:''},{value:'V', color:''},{value:'space', color:''},{value:'B', color:''},{value:'N', color:'yellow'},{value:'M', color:''}]
    ];

    it('should display Keyboard component post status update',()=>{
        cy.mount(<Keyboard LetterEnter={LetterEnter} currentKeyBoard={keyboardLettersAfter}/>);
        cy.get('div.row1 #k-Y').should('have.attr', 'class', 'key btn btn-outline-dark grey');
        cy.get('div.row1 #k-O').should('have.attr', 'class', 'key btn btn-outline-dark yellow');
        cy.get('div.row2 #k-L').should('have.attr', 'class', 'key btn btn-outline-dark green');
        cy.get('div.row3 #k-N').should('have.attr', 'class', 'key btn btn-outline-dark yellow');


    })

    
})