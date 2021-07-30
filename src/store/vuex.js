import Vue from "vue";
import Vuex from "vuex";
import myrecipes from "./modules/MyRecipe";
import auth from "./modules/auth.module";
import editRecipe from './modules/EditRecipe'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    myrecipes,
    auth,
    editRecipe,
  },
});
