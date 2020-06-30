<template>
  <div>
      <b-list-group horizontal>
          <b-list-group-item v-for="building in this.$store.state.buildings" :key="building.id" class="w-25 link-highlight">
            <b-link class="text-body text-decoration-none" :to="`/buildings/${building.id}`">
                <img :src="require(`@/assets/${building.icon}`)" class="mb-3" width="75px" height="75px">

                <h4>{{ building.name }}</h4>
                <p>{{ building.description }}</p>
            </b-link>
          </b-list-group-item>
      </b-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Buildings extends Vue {
    
}
</script>

<style lang="scss" scoped>
.link-highlight:hover {
    background: #87c3ff;
    cursor: pointer;
}
</style>