<template>
  <v-app style="background-color: #FFF3E0">
    <app-bar />
    <v-container style="background-color: #FFFF ">
         <v-icon>mdi-chevron-left</v-icon><router-link to="/" class="text-decoration-none black--text">
         <span>กลับไปยัง Home</span></router-link>
      
      <div style="margin-top: 10px">
        <v-container>
          <viewDetail />
        </v-container>
      </div>
      
      <br />

      <div style="margin-top: 10px">
        <v-container>
          <v-card-title>
            <h3>ส่วนผสม</h3>
          </v-card-title>

          <viewMainingre />

          <v-divider></v-divider>

            

          <viewSubingre />

          <v-divider></v-divider>

        
          <viewFlavoring />
          <v-divider></v-divider>
        </v-container>
      </div>

      <br />

      <div style="margin-top: 10px">
        <v-container>
          <v-card-title>
            <h3 >วิธีทำ</h3>
          </v-card-title>
          <viewProcess />
        </v-container>
      </div>

      <br />

      <div style="margin-top: 10px">
        <v-container>
          <v-card-title>
            <h3 >ความคิดเห็น</h3>
          </v-card-title>
        </v-container>
      </div>

      <br />

        
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: "EditRecipe",
  data() {
    return {
      todos: [],
      step: 1,
    };
  },
  components: {
    AppBar: () => import("../components/AppBar.vue"),
    viewDetail: () => import("../components/view_recipe/view-detail.vue"),
    viewMainingre: () => import("../components/view_recipe/view-mainingre.vue"),
    viewSubingre: () => import("../components/view_recipe/view-subingre.vue"),
    viewFlavoring: () => import("../components/view_recipe/view-flavoring.vue"),
    viewProcess: () => import("../components/view_recipe/view-process.vue"),
    
  },
}; 
</script>

<style>

</style>
