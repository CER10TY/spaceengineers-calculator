<template>
    <b-row align-h="start" class="my-2">
        <b-col v-for="building in buildings" :key="building.id" cols="2">
            <b-link class="text-body text-decoration-none no-outline" :to="`/buildings/${building.id}`">
                <img :src="getBuildIcon(building.icon)" class="mb-3" width="75px" height="75px">

                <h4>{{ building.name }}</h4>
            </b-link>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class BuildingList extends Vue {
    @Prop() readonly buildings!: Array<object>;
    
    getBuildIcon(icon: string) {
        return icon && require(`@/assets/${icon}`);
    }
}
</script>