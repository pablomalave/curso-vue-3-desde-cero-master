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
          this.result = this.error = null;
          try {
            const response = await fetch(API + this.search);
            console.log(response.ok);
            if (!response.ok) throw new Error("Usuario no encontrado");
            const data = await response.json();
            console.log(data);
            this.result = data;
            console.log(this.result.name);
          } catch (e) {
            this.error = e;
            console.log(this.error);
          } finally {
            this.search = null;
            }
          }//end doSearch
          } //end methods
});//end createApp

const mountedApp = app.mount("#app");