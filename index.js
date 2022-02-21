Vue.createApp({
    data() {
        return {
            uneString: ""
        };
    },
    methods: {
        capteEventInput($event) {
            console.log($event);
            this.uneString = event.target.value;
        },
        alertMethod() {
            alert('Coucou');
        }
    }
}).mount('#monApp');