import {expect} from 'chai';
import {randomArrIndex} from './gameLogicFunctions';


describe('gameLogicFunctions module tests', ()=>{
    describe('randomArrIndex()',()=>{
        it("return a index between 0 and arrSize", ()=>{
            const len = 5;
            const res = randomArrIndex(len);
            expect(res).to.be.below(len);
            expect(res).to.be.above(-1);
        })
    })
})