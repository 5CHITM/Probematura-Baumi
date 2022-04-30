<template>
  <div class="news">
    <v-carousel>
      <v-carousel-item v-for="el in slideshowItems" :key="el.location">
        <v-img :src="'http://127.0.0.1:3000/images/' + el.image"></v-img>
      </v-carousel-item>
    </v-carousel>
    <v-card>
      <v-card-title>
        Luxury Estates
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table :headers="menuItems" :items="estates" :search="search">
        <template v-slot:item.image="{ item }">
          <v-img :src="`http://127.0.0.1:3000/${item.image}`" max-width="200" class="ma-2"></v-img>
        </template>
        <template v-slot:item.preis="{ item }">
          <span color="gray" class="cyan--text">
            {{ new Intl.NumberFormat('de-UK', { style: 'currency', currency: 'GBP' }).format(item.preis) }}
          </span>
        </template>
        <template v-slot:item.bedrooms="{ item }">
          <v-chip color="gray" class="cyan--text">
            {{ item.bedrooms }}
          </v-chip>
        </template>
        <template v-slot:item.bathrooms="{ item }">
          <v-chip color="gray" class="cyan--text">
            {{ item.bathrooms }}
          </v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn
            @click="
              activeModal = item;
              dialog = true;
            "
            elevation="0"
            icon
            color="transparent"
          >
            <v-icon color="cyan"> mdi-information </v-icon></v-btn
          >
          <v-btn @click="deleteItem(item)" elevation="0" icon color="transparent"> <v-icon color="error"> mdi-delete </v-icon></v-btn>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> {{ activeModal.title }} </v-card-title>

        <v-card-text>
          <p>Wenn Sie Interesse an dieser Immobilie haben, kontakieren Sie bitte unseren Agent:</p>
          <span class="font-weight-bold">{{ activeModal.name }} </span>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="cyan" text @click="dialog = false"> schließen </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import slideshow from '@/assets/slideshow.json';
import axios from 'axios';

export default {
  methods: {
    async getData() {
      // const { data } = await axios('http://127.0.0.1:3000/estates');
      const { data } = await axios({ url: 'http://127.0.0.1:3000/estates', method: 'get' });
      console.log(data);
      this.estates = data;
    },
    async deletItem(item) {
      const { data } = await axios({ url: `http://127.0.0.1:3000/estate/${item.id}`, method: 'delete' });
      console.log(data);
    },
  },

  async created() {
    await this.getData();
  },
  data() {
    return {
      slideshowItems: slideshow,
      menuItems: [
        {
          text: 'Image',
          align: 'start',
          sortable: false,
          value: 'image',
        },
        { text: 'Bezeichnung', value: 'title' },
        { text: 'Preis', value: 'preis' },
        { text: 'Bedrooms', value: 'bedrooms' },
        { text: 'Bathrooms', value: 'bathrooms' },
        { text: 'actions', value: 'actions' },
      ],
      estates: [],
      search: '',
      activeModal: {},
      dialog: false,
    };
  },
  setup() {},
};
</script>
