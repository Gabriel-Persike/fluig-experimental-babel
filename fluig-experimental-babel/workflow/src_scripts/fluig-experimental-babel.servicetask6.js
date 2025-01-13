
function servicetask6(attempt, message) {
	log.info(montaComentarioDoUsuarioParaInserirNoHistorico());

	
	
}

const montaComentarioDoUsuarioParaInserirNoHistorico = () => {
	let user = hAPI.getCardValue("userId");
	let comentario = hAPI.getCardValue("comentarioAprovador");
	
	if (!user || !comentario) {
		throw "Usuário ou Comentario não informados";
	}
	
	return `${user}: ${comentario}`;
};
module.exports = {
	montaComentarioDoUsuarioParaInserirNoHistorico: montaComentarioDoUsuarioParaInserirNoHistorico,
};