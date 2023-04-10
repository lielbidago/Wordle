import { wordleLetter } from "src/hooks/wordleHooks";
import { WordleScreen } from "./WordleScreen";

describe('wordleScreen component',()=>{
    
    const wordleState:wordleLetter[][] =[  
        [{char:'',color:'white', x:0, y:0},{char:'',color:'white', x:1, y:0},{char:'',color:'white', x:2, y:0},{char:'',color:'white', x:3, y:0},{char:'', color:'white', x:4, y:0}],
        [{char:'',color:'white', x:0, y:1},{char:'',color:'white', x:1, y:1},{char:'',color:'white', x:2, y:1},{char:'',color:'white', x:3, y:1},{char:'' ,color:'white', x:4, y:1}],
        [{char:'',color:'white', x:0, y:2},{char:'',color:'white', x:1, y:2},{char:'',color:'white', x:2, y:2},{char:'',color:'white', x:3, y:2},{char:'', color:'white', x:4, y:2}],
        [{char:'',color:'white', x:0, y:3},{char:'',color:'white', x:1, y:3},{char:'',color:'white', x:2, y:3},{char:'',color:'white', x:3, y:3},{char:'',color:'white', x:4, y:3}],
        [{char:'',color:'white', x:0, y:4},{char:'',color:'white', x:1, y:4},{char:'',color:'white', x:2, y:4},{char:'',color:'white', x:3, y:4},{char:'',color:'white', x:4, y:4}],
        ];
    
    const LetterPointer = {x:1, y:2, pRef:null};
    

    
    it('should display wordleScreen component default',()=>{
        cy.mount(<WordleScreen currentBoard={wordleState} currLetterPointer={LetterPointer}/>);
        cy.get('div.screen').should('exist');

    });

    const wordleStateAfter:wordleLetter[][] =[  
        [{char:'L',color:'green', x:0, y:0},{char:'A',color:'grey', x:1, y:0},{char:'S',color:'grey', x:2, y:0},{char:'E',color:'yellow', x:3, y:0},{char:'N', color:'green', x:4, y:0}],
        [{char:'',color:'white', x:0, y:1},{char:'',color:'white', x:1, y:1},{char:'',color:'white', x:2, y:1},{char:'',color:'white', x:3, y:1},{char:'' ,color:'white', x:4, y:1}],
        [{char:'',color:'white', x:0, y:2},{char:'',color:'white', x:1, y:2},{char:'',color:'white', x:2, y:2},{char:'',color:'white', x:3, y:2},{char:'', color:'white', x:4, y:2}],
        [{char:'',color:'white', x:0, y:3},{char:'',color:'white', x:1, y:3},{char:'',color:'white', x:2, y:3},{char:'',color:'white', x:3, y:3},{char:'',color:'white', x:4, y:3}],
        [{char:'',color:'white', x:0, y:4},{char:'',color:'white', x:1, y:4},{char:'',color:'white', x:2, y:4},{char:'',color:'white', x:3, y:4},{char:'',color:'white', x:4, y:4}],
        ];

    it('should display wordleScreen component after word checks',()=>{
        cy.mount(<WordleScreen currentBoard={wordleStateAfter} currLetterPointer={LetterPointer}/>);
        cy.get('div.screen').should('exist');

    });

    
})