<template>
  <div>
    <v-container>
      <h4>Main ingredient</h4>
    </v-container>
    <v-container class="ma-2">
      <div id="Mainingredient" class="text-center">
        <v-row
          v-for="(mIngredient, i) in mIngredients"
          :key="i"
          align-content-center
          num = i
        >
          <v-col cols="1" lg="1" md="1" sm="1">
            <v-text-field readonly v-text="num = i+1"></v-text-field>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="3">
            <v-text-field
              v-model="mIngredient.ingredients"
              label="แป้งสาลี"
            >
              </v-text-field
            >
          </v-col>
          <v-col cols="12" lg="1" md="1" sm="1"></v-col>
          <v-col cols="12" lg="3" md="3" sm="2">
            <v-text-field
              v-model="mIngredient.amount"
              label="100 กรัม"
            ></v-text-field>
          </v-col>

          <v-col cols="12" lg="2" md="2" sm="2">
            <v-text-field
              v-model="mIngredient.calories"
              label="Calories"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="1" lg="1" md="1" sm="1">
            <v-btn @click="remove(i)" class="error"
              ><v-icon>mdi-delete</v-icon>delete</v-btn
            >
          </v-col>
        </v-row>
        <br>
      </div>
      <div class="text-center">
        <v-btn @click="add" width="100px" rounded class="primary" 
          ><v-icon>mdi-plus </v-icon>add</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>

import router from '@/router'
import { mapState } from "vuex";

export default {
  name: "Mainingre",
  data() {
    return {
      mIngredients: [],
      unitItems: [],
      indredientsItems: [],
      num: ''
    };
  },
  methods: {
    add() {
      this.mIngredients.push({
        number: null,
        ingredients: "",
        amount: "",
        units: "",
        calories: "",
      });
    },
    remove(index) {
      this.mIngredients.splice(index, 1);
    },
  },
  computed: {
    ...mapState('editRecipe', ['recipesingredient']),
    mIngredient(){
      return this.recipesingredient.find(v => v.recipeID == this.$route.params.id)
    }
  },
  created() {
    this.$store.dispatch("editRecipe/loadMainIngre",router.currentRoute.params.id);
  },
};
</script>

<style></style>
