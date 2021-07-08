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
            this.mapEmails();

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
            mapEmails: function () {
                setTimeout(() => {
                    this.newEmails = this.emails.map((email) =>{
                        return email
                    })
                },1000)
            }
        }
    }
)