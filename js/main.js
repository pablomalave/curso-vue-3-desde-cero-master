const API = "https://api.github.com/users/";

const app = Vue.createApp({
    data(){
        return {
            search: null,
            title: "Buscador de Perfiles de Github",
            result: null,
            error: null,
            favorites: new Map()
        }; //end return
    }, //end data
    methods:{
        //inicia doSeatch
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
          },//end doSearch
        //inicia addFavorites
        addFavorites() {
          this.favorites.set(this.result.id, this.result);
          console.log(this.favorites);
          },//end addFavorites
        //inicia removeFavorites
        removeFavorites(){
          this.favorites.delete(this.result.id);
          }//end removeFavorites
      }, //end methods
    computed:{
      isFavorite(){
        return this.favorites.has(this.result.id);
      }//end isFavorite
    }//end computed
});//end createApp

const mountedApp = app.mount("#app");