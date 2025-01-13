"use strict";

function servicetask6(attempt, message) {
  log.info(montaComentarioDoUsuarioParaInserirNoHistorico());
}
var montaComentarioDoUsuarioParaInserirNoHistorico = function montaComentarioDoUsuarioParaInserirNoHistorico() {
  var user = hAPI.getCardValue("userId");
  var comentario = hAPI.getCardValue("comentarioAprovador");
  if (!user || !comentario) {
    throw "Usuário ou Comentario não informados";
  }
  return "".concat(user, ": ").concat(comentario);
};
