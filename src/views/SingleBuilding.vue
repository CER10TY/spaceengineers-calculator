<template>
  <b-container>
    <b-row>
      <b-col>
        <img
          :src="require(`@/assets/${building.icon}`)"
          width="150px"
          height="150px"
        />
        <h1>{{ building.name }}</h1>
        <p>{{ building.description }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4">
        <b-table-simple striped bordered>
          <b-tbody>
            <b-tr v-if="building.power">
              <b-th>Idle Power Consumption</b-th>
              <b-td>{{ building.power[0] }} kW</b-td>
            </b-tr>
            <b-tr v-if="building.power">
              <b-th>Active Power Consumption</b-th>
              <b-td>{{ building.power[1] }} kW</b-td>
            </b-tr>
            <b-tr>
              <b-th>Width</b-th>
              <b-td>{{ building.dimension[0] }}</b-td>
            </b-tr>
            <b-tr>
              <b-th>Height</b-th>
              <b-td>{{ building.dimension[1] }}</b-td>
            </b-tr>
            <b-tr>
              <b-th>Length</b-th>
              <b-td>{{ building.dimension[2] }}</b-td>
            </b-tr>
            <b-tr v-if="building.capacity">
              <b-th>Capacity</b-th>
              <b-td>{{ building.capacity[0] }} MWh</b-td>
            </b-tr>
            <b-tr v-if="building.powerOut">
              <b-th>Power (Output)</b-th>
              <b-td>{{ building.powerOut[0] }} {{ building.powerOut[1] }}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-col>
      <!--<b-col :class='{ "col-4": !building.grids[1], "col-3": building.grids[1] }'></b-col>-->
      <b-col
        :class="{ 'col-5': !building.grids[1], 'col-8': building.grids[1] }"
      >
        <!-- Ingredients needed /Large Ship -->
        <b-table-simple striped bordered>
          <b-thead>
            <b-tr>
              <b-th colspan="2" v-if="building.grids[0]"
                >Large Ship / Station</b-th
              >
              <b-th colspan="2" v-if="building.grids[1]">Small Ship</b-th>
            </b-tr>
            <b-tr>
              <!-- Find a way to shorten this! -->
              <b-th v-if="building.grids[0]">Ingredient</b-th>
              <b-th v-if="building.grids[0]">Amount</b-th>
              <b-th v-if="building.grids[1]">Ingredient</b-th>
              <b-th v-if="building.grids[1]">Amount</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr
              v-for="ingredient in building.components"
              :key="ingredient.name"
            >
              <b-td v-if="building.grids[0]">{{ ingredient.name }}</b-td>
              <b-td v-if="building.grids[0]">{{ ingredient.amountLg }}</b-td>
              <b-td v-if="building.grids[1]">{{ ingredient.name }}</b-td>
              <b-td v-if="building.grids[1]">{{ ingredient.amountSm }}</b-td>
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
  @Getter("getBuildingById") getBuildingById!: (id: string) => object;

  building: object = {};

  mounted(): void {
    const id = this.$route.params.id;
    this.building = this.getBuildingById(id);
  }
}
</script>
