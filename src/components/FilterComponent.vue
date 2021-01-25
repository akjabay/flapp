<template>
  <v-container grid-list-xs>
    <v-row justify="center">
      <v-col class="" cols="3">
        <div class="mt-2">hide countries:</div>
      </v-col>
      <v-col class="" cols="9" sm="6">
        <v-select
          solo
          dense
          multiple
          chips
          :items="countries"
          item-text="name"
          item-value="code"
          v-model="hidden_countries"
          label="select countries"
        ></v-select>
      </v-col>
      <!-- <v-col class="" cols="4">
        <div class="mt-2">Payment Verified</div>
      </v-col>
      <v-col class="" cols="4">
        <div class="mt-2">Deposite Made</div>
      </v-col>
      <v-col class="" cols="4">
        <div class="mt-2">Minimum Completed Jobs :</div>
      </v-col>
      <v-col class="" cols="4">
        <div class="mt-2">Maximum Bids Placed :</div>
      </v-col>
      <v-col class="" cols="4">
        <div class="mt-2">18,352 Jobs Found.</div>
      </v-col>
      <v-col class="" cols="4">
        <div class="mt-2">Minimum Fixed Price :</div>
      </v-col>
      <v-col class="" cols="4">
        <div class="mt-2">Minimum Hourly Price :</div>
      </v-col>
      <v-col class="" cols="4">
        <div class="mt-2">Must Have Skills :</div>
      </v-col>
      <v-col class="" cols="4">
        <div class="mt-2">Exclude Skills :</div>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import countries from "../data/countries.json";

export default {
  name: "FilterComponent",
  data: () => ({
    countries: Object.freeze(countries),
    queries: {
      tag: "",
      type: false,
      budget_min: false,
      budget_max: false,
      contest_budget_min: false,
      contest_budget_max: false,
      hourlyrate_min: false,
      hourlyrate_max: false,
      hourlyProjectDuration: 1,
      skills_chosen: false,
      languages: false,
      status: open,
      vicinity: false,
      countries: false,
      lat: false,
      lon: false,
      local: true,
      featured: true,
      recruiter: true,
      iDisplayStart: 0,
      iDisplayLength: 50,
      iSortingCols: 1,
      iSortCol_0: 9,
      sSortDir_0: "asc",
      format_version: 3,
    },
    hidden_countries: [],
  }),
};
</script>