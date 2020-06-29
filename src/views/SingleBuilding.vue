<template>
    <b-container>
        <b-row>
            <b-col>
                <img :src="require(`@/assets/${building.icon}`)" width="150px" height="150px">
                <h1>{{ building.name }}</h1>
                <p>{{ building.description }}</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="4">
                <b-table-simple striped bordered>
                    <b-tbody>
                        <b-tr>
                            <b-th>Idle Power Consumption</b-th>
                            <b-td>{{ building.power[0] }}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-th>Active Power Consumption</b-th>
                            <b-td>{{ building.power[1] }}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-th>Dimensions</b-th>
                            <b-td>Width: {{ building.dimension[0] }} <br/> Height: {{ building.dimension[1] }} <br/> Depth: {{ building.dimension[2] }}</b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </b-col>
            <b-col cols="4"></b-col>
            <b-col cols="4">
                <!-- Ingredients needed -->
                <b-table-simple striped bordered>
                    <b-thead>
                        <b-tr>
                            <b-th>Ingredient needed to craft</b-th>
                            <b-th>Amount</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr v-for="ingredient in building.components" :key="ingredient.name">
                            <b-td>{{ ingredient.name }}</b-td>
                            <b-td>{{ ingredient.amount }}</b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </b-col>
        </b-row>
    </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component({})
export default class SingleBuilding extends Vue {
    @Getter('getBuildingById') getBuildingById!: (id: string) => object;

    building: object | undefined = {};

    mounted(): void {
        const id = this.$route.params.id;
        this.building = this.getBuildingById(id);
    }
}
</script>