<template>
  <v-container>
    <v-row justify-space-around>
      <v-col xs="12" sm="12" md="12" lg="12">
        <v-carousel cycle>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      items: [
        {
          src: "https://images5.alphacoders.com/431/thumb-1920-431638.jpg",
        },
        {
          src: "https://images4.alphacoders.com/151/thumb-1920-1514.jpg",
        },
        {
          src: "https://images5.alphacoders.com/399/399563.jpg",
        },
        {
          src: "https://images.alphacoders.com/657/657699.jpg",
        },
      ],
    };
  },
};
</script>
