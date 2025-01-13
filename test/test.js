const { before } = require("mocha");
const hAPIMock = require("../FluigMock/hAPI");
const logMock = require("../FluigMock/log");
const servicetask6 = require("../fluig-experimental-babel/workflow/src_scripts/fluig-experimental-babel.servicetask6");

var assert = require('assert');
describe('Testing if acessa form',  ()=>{
    before(()=>{
        console.log(servicetask6);
        hAPI = new hAPIMock({
            "userId":"gabriel.persike",
            "comentarioAprovador":"Testando Comentario"
        });
        log = new logMock();
    });

    it('should return gabriel.persike: Testando Comentario', ()=> {
        const comentario = servicetask6.montaComentarioDoUsuarioParaInserirNoHistorico();
      assert.equal(comentario, "gabriel.persike: Testando Comentario");
    });
});