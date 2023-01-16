"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var gameLogicFunctions_1 = require("./gameLogicFunctions");
describe('gameLogicFunctions module tests', function () {
    describe('randomArrIndex()', function () {
        it("return a index between 0 and arrSize", function () {
            var len = 5;
            var res = (0, gameLogicFunctions_1.randomArrIndex)(len);
            (0, chai_1.expect)(res).to.be.below(len);
            (0, chai_1.expect)(res).to.be.above(-1);
        });
    });
});
