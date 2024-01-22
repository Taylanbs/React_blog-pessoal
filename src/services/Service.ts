import axios from "axios";
// axios ferramenta de comunicação entre o front e o back

const api = axios.create({
	baseURL: "https://blogpessoal-xee7.onrender.com/",
});// temos que criar um objeto que será nocectado ao backend

export const cadastrarUsuario = async (
	url: string,
	dados: Object,
	setDados: Function
) => {
	const resposta = await api.post(url, dados);
	setDados(resposta.data);
};
// função assincrona = elas esperam que uma ação finalize e só então  continua sua logica 
export const login = async (url: string, dados: Object, setDados: Function) => {
	const resposta = await api.post(url, dados);
	setDados(resposta.data);
};