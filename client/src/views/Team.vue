<template>
  <div class="about">
    <v-row justify="center" class="mt-5">
      <v-card class="ma-2" max-width="300" v-for="staff in staffs" :key="staff.staff_id">
        <v-img height="250" :src="`http://127.0.0.1:3000/${staff.image}`"></v-img>

        <v-card-title>{{ staff.name }}</v-card-title>

        <v-card-text>
          <div class="font-weight-bold">Phone:</div>
          <div class="text-subtitle-1 mb-2">{{ staff.phone }}</div>
          <div class="font-weight-bold">Office:</div>
          <div class="text-subtitle-1 mb-2">{{ staff.office }}</div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-container>
      <h3>Neugen Agent hier hinzufügen</h3>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async getData() {
      // const { data } = await axios('http://127.0.0.1:3000/estates');
      const { data } = await axios({ url: 'http://127.0.0.1:3000/staffs', method: 'get' });
      console.log(data);
      this.staffs = data;
    },
  },

  async created() {
    await this.getData();
  },
  data() {
    return {
      staffs: [],
    };
  },
  setup() {},
};
</script>
