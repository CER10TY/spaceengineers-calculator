<template>
  <b-table-simple striped bordered>
    <b-thead>
      <b-tr>
        <b-th colspan="4">Ore Processing</b-th>
      </b-tr>
      <b-tr>
        <b-td
          ><label for="oreinput" class="mr-2">Ore Amount: </label>

          <input
            id="oreinput"
            v-model="oreInputAmount"
            type="number"
            placeholder="Amount of ore"
            min="0"
        /></b-td>
      </b-tr>
      <b-tr>
        <b-th>Input</b-th>
        <b-th>Input Rate</b-th>
        <b-th>Output Rate</b-th>
        <b-th>Output</b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr v-for="material in refineRates()" :key="material.oreType">
        <b-td
          ><strong>{{ oreInputAmount }} kg</strong>
          {{ material.material }}</b-td
        >
        <b-td>{{ material.inputRate }}</b-td>
        <b-td>{{ material.outputRate }}</b-td>
        <b-td>
          <span v-for="(output, index) in material.output" :key="output[0]">
            <strong>{{ material.outputEfficiency[index] }} kg</strong>
            {{ output[0] }} <br />
          </span>
        </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
</template>

<script lang="ts">
import { Getter } from "vuex-class";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class RefineRates extends Vue {
  @Getter("getRefineRateForBuilding") getRefineRateForBuilding!: (
    building: string
  ) => object;

  @Prop() readonly building!: string;
  refineRatesRaw!: Record<string, any>;
  oreInput = 10;

  get oreInputAmount(): number {
    return this.oreInput;
  }
  set oreInputAmount(input: number) {
    this.oreInput = input >= 0 ? input : 0;
  }

  refineRates(): Record<string, any> {
    // We get raw refine rates from store
    this.refineRatesRaw = this.getRefineRateForBuilding(this.building);
    const refineRates: Record<string, any> = {};

    // Display needs the following: Input (Ore type), Rate, Output Rate, Output (Ingot type)
    // Ores ingame are handled in kg so we output kg/s exclusively.

    Object.keys(this.refineRatesRaw).forEach(material => {
      const inputRate: string =
        this.refineRatesRaw[material].consumption + " kg/s";
      const outputRate: string =
        this.refineRatesRaw[material].production + " kg/s";

      // Output is ["name", percentage]
      const output: Array<Array<string>> = this.refineRatesRaw[material].output;

      const outputEfficiency: Array<number> = [];
      output.forEach(outputMaterial => {
        const modifier = parseFloat(outputMaterial[1]);
        outputEfficiency.push(
          Math.round(
            (this.oreInputAmount *
              (this.refineRatesRaw[material].efficiency / 100) *
              modifier +
              Number.EPSILON) *
              100
          ) / 100
        );
      });

      refineRates[material] = {
        material,
        inputRate,
        outputRate,
        output,
        outputEfficiency
      };
    });

    return refineRates;
  }
}
</script>
