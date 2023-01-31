const API = "https://api.github.com/users/";

const app = Vue.createApp({
    data(){
        return {
            search: null,
            title: "Buscador de Perfiles de Github",
            result: null
        };
    },
    methods:{
        async doSearch() {
            const response = await fetch(API + this.search);
            const data = await response.json();
            console.log(data);
            this.result = true;
        }
    }
});

const mountedApp = app.mount("#app");