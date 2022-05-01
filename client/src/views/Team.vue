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
      <p>{{ valid }}</p>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
        <v-text-field v-model="phone" :counter="20" :rules="phoneRules" label="Phone" required></v-text-field>
        <v-text-field v-model="office" :counter="100" :rules="officeRules" label="Office" required></v-text-field>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"> Einfügen </v-btn>
        <v-btn color="error" class="mr-4" @click="reset"> Löschen </v-btn>
      </v-form>
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
    async addStaff() {
      // const { data } = await axios('http://127.0.0.1:3000/estates');
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/staff',
        method: 'post',
        data: {
          name: this.name,
          image: 'images/staff/placeholder.jpg',
          phone: this.phone,
          office: this.office,
        },
      });
      console.log(data);
    },
    async validate() {
      if (this.$refs.form.validate() == true) {
        await this.addStaff();
        await this.getData();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },

  async created() {
    await this.getData();
  },
  data() {
    return {
      staffs: [],
      valid: true,
      name: '',
      nameRules: [(v) => !!v || 'Name is required', (v) => (v && v.length <= 10) || 'Name darf nicht länger als 10 Buchstaben sein'],
      phone: '',
      phoneRules: [
        (v) => !!v || 'Number is required',
        (v) => /^\+\d\d\(\d{1,5}\)\d+$/.test(v) || 'Die Telefonnummber muss Ländervorwahl und Vorwahl haben',
        (v) => (v && v.length <= 20) || 'Nummer darf nicht länger als 20 Zeichen sein',
      ],
      office: '',
      officeRules: [
        (v) => !!v || 'Office is required',
        (v) => (v && v.length >= 20) || 'Die Officeangabe muss mindestens 20 Zeichen haben',
        (v) => (v && v.length <= 100) || 'Die Officeangabe darf nicht länger als 100 Zeichen sein',
      ],
    };
  },
};
</script>
