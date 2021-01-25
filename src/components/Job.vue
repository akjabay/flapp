<template>
<v-container grid-list-xs>
    <v-row
        justify="center"
    >
        <v-col cols="12" md="8" sm="8">
            <v-card flat outlined class="pa-2">
                <v-card-title primary-title>
                    {{ job.project_name }}
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="9">
                            {{ job.project_desc }}
                        </v-col>
                        <v-col cols="3" class="text-right">
                            <div>                            
                                {{ job.budget_range }}
                            </div>
                            <div>                            
                                {{ job.time_left }}
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-text>
                    <v-row>
                        <v-col cols="9">
                            <span class="pa-2 text-small primary--text" v-for="(item, j) in job.skills_info" :key="j">
                                {{ item.name }}
                            </span>
                        </v-col>
                        <v-col cols="3" class="text-right">
                            <div>
                                bids: {{ job.bid_count }}
                            </div>
                            <div>
                                avg: {{ job.bid_avg }}
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

        </v-col>


    </v-row>
</v-container>
</template>

<script>
export default {
    name: "Job",
    props: {
        job: {
            type: Object,
            require: true,
        }
    }
};
</script>

<style>
</style>