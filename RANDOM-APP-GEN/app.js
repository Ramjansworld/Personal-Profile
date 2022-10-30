const app = Vue.createApp({
    data() {
        return {
            firstName:'Ramjan Ali',
            lastName:'Khandaker',
            goal:'Future Front End Engineer',
            skils:'VueJS, Laravel,  TailwindCSS, jQuery, SASS',
            email:'ramjansworld@gmail.com',
            github:'https://lnkd.in/gDPTCuyy',
            picture:'./images/Ramjan.jpg',
        }
    },
})

app.mount('#app')