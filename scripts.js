atividades = [
    {
        name: 'Estudar Vue.js',
    }
]

const listaDeTarefas = {

    data() {
        return {
            atividades: window.atividades,
            novaAtividade: {

            }
        }
    },

    methods: {
        addAtividade: function() {
            if (!(this.novaAtividade.name)) {
                alert("O input deve ser preenchido!")
            } else {
                this.atividades.push(this.novaAtividade);
                this.novaAtividade = {};
            }
        },
        excluiAtividade: function() {
            this.atividades.remove(atividades);
        }
    }

};

Vue.createApp(listaDeTarefas).mount('#app');
