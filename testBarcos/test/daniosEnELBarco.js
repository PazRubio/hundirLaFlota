
var expect = require('chai').expect;

describe('daniosEnElBarco', function(){
    var daniosEnElBarco = require('../logica_juego/metodos_barco').daniosEnElBarco; it('debería registrar el daño en un barco en una localización dada', function () {
        danios = [];
        expect(daniosEnElBarco(danios)).to.be.true;
        expect(daniosEnElBarco([2,1])).to.be.false;

    }); 
});
