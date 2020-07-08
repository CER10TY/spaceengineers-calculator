<template>
  <b-table-simple striped bordered>
    <b-thead>
      <b-tr>
        <b-th colspan="5">Ore Processing</b-th>
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
          />
          <span>(in kg)</span></b-td
        >
      </b-tr>
      <b-tr>
        <b-th>Input</b-th>
        <b-th>Input Rate</b-th>
        <b-th>Output Rate</b-th>
        <b-th>Output</b-th>
        <b-th>Time to produce</b-th>
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
            <strong
              >{{ material.outputEfficiency[index][0] }}
              {{ material.outputEfficiency[index][1] }}</strong
            >
            {{ output[0] }} <br />
          </span>
        </b-td>
        <b-td>{{ material.outputTime }}</b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
</template>

<script lang="ts">
import { Getter } from "vuex-class";
import { Component, Vue, Prop } from "vue-property-decorator";
import { Material, OutputInfo } from "@/interfaces/refines.ts";

@Component({})
export default class RefineRates extends Vue {
  
  @Getter("getRefineRateForBuilding") getRefineRateForBuilding!: (
    building: string
  ) => Material;

  @Prop() readonly building!: string;
  refineRatesRaw!: Material;
  private oreInput = 10;

  get oreInputAmount(): number {
    return this.oreInput;
  }
  set oreInputAmount(input: number) {
    this.oreInput = input >= 0 ? input : 0;
  }

  private refineRates(): Record<string, object> {
    // We get raw refine rates from store
    this.refineRatesRaw = this.getRefineRateForBuilding(this.building);
    const refineRates: Record<string, OutputInfo> = {};

    // Display needs the following: Input (Ore type), Rate, Output Rate, Output (Ingot type)
    // Ores ingame are handled in kg so we output kg/s exclusively.

    Object.keys(this.refineRatesRaw).forEach(material => {
      const inputRate: string =
        this.refineRatesRaw[material].consumption + " kg/s";
      const outputRate: string =
        this.refineRatesRaw[material].production + " kg/s";

      // Output is ["name", percentage]
      const output = this.refineRatesRaw[material].output;

      // OutputEfficiency is built: [ore output, unit of output (g/kg)]
      const outputEfficiency: (number | string)[][] = [];

      output.forEach(outputMaterial => {
        const modifier = parseFloat(outputMaterial[1].toString()); // Be explicit here since it can be string | number

        let unit = " kg";

        let rawEfficiency: number =
          this.oreInputAmount *
          (this.refineRatesRaw[material].efficiency / 100) *
          modifier;
        if (rawEfficiency < 0.1) {
          rawEfficiency *= 1000; // to grams
          unit = " g";
        }

        const effiency: (number | string)[] = [
          Math.round((rawEfficiency + Number.EPSILON) * 100) / 100,
          unit
        ];
        outputEfficiency.push(effiency);
      });

      const outputTime: string = this.exactOutputTime(
        this.oreInputAmount * this.refineRatesRaw[material].productionTime
      );
      refineRates[material] = {
        material,
        inputRate,
        outputRate,
        output,
        outputEfficiency,
        outputTime
      };
    });

    return refineRates;
  }

  private exactOutputTime(time: number): string {
    return new Date(time * 1000).toISOString().substr(11, 8);
  }
}
</script>
