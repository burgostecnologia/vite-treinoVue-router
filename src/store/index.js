import { createStore } from "vuex";

export default createStore({
    //State seria o banco de dados global
    state: {
        user: {
            nome: 'Roberto',
            email: 'burgos@gmail.com'
        },
        products: [
            {
                id: 1,
                nome: 'Esfoliante',
                preço: '20.00',
                foto: '',
                qtd: 5
            },    
            {
                id: 2,
                nome: 'Aroma de ambiente',
                preço: '25.00',
                foto: '',
                qtd: 3
            },    
            {
                id: 3,
                nome: 'Sabonete de cidreira',
                preço: '10.00',
                foto: '',
                qtd: 5
            },    
        ],
        carrinho: [],
    },
    //Mutation seria onde alterar o conteudo do State
    mutations: {
        updateUser(state, dados){
            state.user = dados
        }
    },
    getters: {

    },
    actions: {

    }
})