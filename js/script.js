Vue.config.devtools = true;

const add = new Vue(
    {
        el: '#app',
        data: {
            emails: [],
            maxEmail: 10, 
            newEmails: [],
            clock: null
        },
        created() {
            this.populateEmails(this.maxEmail)
        },
        mounted() {
            //prova1 -> funziona
            // this.mapEmails1()

            this.mapEmails2();
        },
        methods: {
            generateEmail: function () {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        // let email = response.data.response;
                        // console.log(email);
                        this.emails.push(response.data.response);
                    })
            },
            populateEmails: function (num) {
                for (let x = 0; x < num; x++) {
                    this.generateEmail();
                }
            },
            //prova 1 -> funziona
            // mapEmails: function () {
            //     setTimeout(() => {
            //         this.newEmails = this.emails.map((email) =>{
            //             return email
            //         })
            //     },1000)
            // },
            //usare un setInterval, che ogni 1sec chiede se la lunghezza
            // è uguale a 10, cosi entra nell'if, stampa e blocca il setInterval
            mapEmails2: function () {
                this.clock = setInterval(() => {
                    console.log('ciao')
                    if (this.emails.length === 10) {
                        this.newEmails = this.emails.map((email) =>{
                            console.log('ciaone');
                            return email
                        });
                        clearInterval(this.clock);
                    }                    
                }, 1000);
            }
        }
    }
)