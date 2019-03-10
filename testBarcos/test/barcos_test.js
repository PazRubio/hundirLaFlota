
var expect = require('chai').expect;

describe('comprobarBarco', function () {
    var comprobarBarco = require('../logica_juego/metodos_barco').comprobarBarco;    

    //    it('debería devolver que no hay ningún barco en la coordenada pasada', function () {
    //        jugador = {
    //            barcos: [
    //                {
    //                    localizaciones: [[0, 0]]
    //                }
    //            ]
    //        };
    //        //expect(comprobarBarco(jugador, coordenadas del tiro[9,9])).to.be.false(comprueba que el barco devuelve false)
    //        expect(comprobarBarco(jugador, [9, 9])).to.be.false;
    //
    //    });
    //     it('debería devolver si hay un barco en la coordenada pasada', function () {
    //        
    //        jugador = {
    //            barcos: [
    //                {
    //                    localizaciones: [[0, 0]]
    //                }
    //            ]
    //        };
    //
    //      expect(comprobarBarco(jugador, [0, 0])).to.be.true;
    //
    //    });
    it('debería devolver si hay un barco en más de una coordenada', function () {
        jugador = {
            barcos: [
                {
                    localizaciones: [[0, 1], [0, 2]]
                }
            ]
        };
        expect(comprobarBarco(jugador, [0, 1])).to.be.true;
        expect(comprobarBarco(jugador, [0, 0])).to.be.false;
        expect(comprobarBarco(jugador, [0, 2])).to.be.true;
    });
    it('debería devolver si hay un barco en más de una coordenada', function () {
        jugador = {
            barcos: [
                {
                    localizaciones: [[0, 1], [0, 2]]
                },
                {
                    localizaciones: [[1, 0], [2, 0]]
                }
            ]
        };
        expect(comprobarBarco(jugador, [0, 1])).to.be.true;
        expect(comprobarBarco(jugador, [0, 0])).to.be.false;
        expect(comprobarBarco(jugador, [0, 2])).to.be.true;
        expect(comprobarBarco(jugador, [2, 0])).to.be.true;
        expect(comprobarBarco(jugador, [3, 0])).to.be.false;
        expect(comprobarBarco(jugador, [1, 0])).to.be.true;
    });

});
