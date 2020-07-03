<template>
  <b-container fluid style="margin-top: 0 !important">
    <b-row class="nav-helper py-3">
      <b-col sm="auto">
        Buildings / Ore Processing
      </b-col>
    </b-row>
    <BuildingList :buildings="oreProcessors"></BuildingList>
    <b-row class="nav-helper py-3">
      <b-col sm="auto">
        Buildings / Assembly
      </b-col>
    </b-row>
    <BuildingList :buildings="assemblers"></BuildingList>
    <b-row class="nav-helper py-3">
      <b-col sm="auto">
        Buildings / Energy
      </b-col>
    </b-row>
    <BuildingList :buildings="energy"></BuildingList>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import BuildingList from "@/components/BuildingList.vue";

@Component({
  components: {
    BuildingList
  }
})
export default class Buildings extends Vue {
  @Getter("getBuildingsByType") getBuildingsByType!: (
    type: string
  ) => Array<object>;

  oreProcessors: Array<object> = [{}];
  assemblers: Array<object> = [{}];
  energy: Array<object> = [{}];

  mounted(): void {
    this.oreProcessors = this.getBuildingsByType("ore-processing");
    this.assemblers = this.getBuildingsByType("assembly");
    this.energy = this.getBuildingsByType("energy");
  }
}
</script>

<style lang="scss" scoped>
.link-highlight:hover {
  background: #87c3ff;
  cursor: pointer;
}

.nav-helper {
  background: #b2d5e8;
}
</style>
