const { createApp } = Vue;

createApp({
    data() {
        return {
            display: "0",
            numeroAnt: null,
            numAtual: null,
            operador: null
        };
    },
    methods: {
        LidarBotao(valor) {
            switch (valor) {
                case '*':
                case '/':
                case '-':
                case '+':
                    this.lidarOperador(valor);
                    break;

                case ".":
                    this.lidarDecimal();
                    break;

                case "C":
                    this.lidarLimpar();
                    break;

                case "=":
                    this.lidarIgual();
                    break;

                default:
                    this.lidarNumero(valor);
            }
        },

        lidarOperador(valor) {
            console.log("o botão digitado foi:", valor);
        },
        lidarDecimal() {
            console.log("entrou decimal.");
        },
        lidarLimpar() {
            this.display = '0';
            this.numAtual = null;
            this.numeroAnt = null;
            this.operador = null;
        },
        lidarIgual() {
            console.log("Entrou igual.");
        },
        lidarNumero(valor) {
            console.log("O botão digitado foi: ", valor);
        }
    }
}).mount('#app');
