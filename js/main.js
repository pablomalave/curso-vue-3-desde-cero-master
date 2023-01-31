const API = "https://api.github.com/users/";

const app = Vue.createApp({
    data(){
        return {
            search: null,
            title: "Buscador de Perfiles de Github",
            result: null,
            error: null
        }; //end return
    }, //end data
    methods:{
        async doSearch() {
          try {
            const response = await fetch(API + this.search);
            const data = await response.json();
            console.log(data);
            this.result = true;
          } catch (e) {
            this.error = true;
          } finally {
            this.search = null;
            }
          }//end doSearch
          } //end methods
});//end createApp

const mountedApp = app.mount("#app");