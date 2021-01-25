<template>
  <v-app>
    <app-bar />

    <v-main style="background-color: #fafafa">
      <div v-if="!loading" class="doc-page">
        
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
          </v-row>
         </v-container>




        <v-row justify="end">
          <v-col cols="12" md="8" sm="10">
            <v-pagination
              v-model="page"
              :length="dataLength"
              @input="fetchData()"
            ></v-pagination>
          </v-col>
        </v-row>
        <div v-for="(job, i) in jobs" :key="i">
          <Job :job="job" />
        </div>
      </div>

      <v-row v-else justify="center" class="text-center pt-10 mt-10">
        <v-col cols="4">
          <v-progress-circular
          class="align-self-center"
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import Job from "./components/Job";
// import FilterComponent from "./components/FilterComponent";
import countries from "./data/countries.json";

export default {
  name: "App",

  components: {
    AppBar,
    Job,
  },

  data: () => ({
    jobs: [],
    page: 1,
    offset: 0,
    length: 100,
    dataLength: 0,
    loading: false,
    countries: Object.freeze(countries),
    hidden_countries: [],
  }),
  methods: {
    async fetchData() {
      this.loading = true;
      this.offset = (this.page - 1) * this.length;
      const result = await this.$axios.get(
        "/ajax/table/project_contest_datatable.php?tag=&type=false&budget_min=false&budget_max=false&contest_budget_min=false&contest_budget_max=false&hourlyrate_min=false&hourlyrate_max=false&hourlyProjectDuration=false&skills_chosen=false&languages=false&status=open&vicinity=false&countries=false&lat=false&lon=false&" +
          "iDisplayStart=" +
          this.offset +
          "&iDisplayLength=" +
          this.length +
          "&iSortingCols=1&iSortCol_0=6&sSortDir_0=desc&format_version=3&"
      );
      this.loading = false;
      this.jobs = result.data.aaData;
      // this.jobs = this.jobs.filter((js) => {
      //   return js.
      // })
      this.dataLength = Math.ceil(
        parseInt(result.data.iTotalRecords) / parseInt(this.length)
      );
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
.is-app-bar {
  border-width: 5px;
  border: solid;
}
.doc-page {
  font-weight: 300;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
