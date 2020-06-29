<template>
  <div>
      <ul class="list-inline">
          <li v-for="building in this.$store.state.buildings" :key="building.id" class="list-inline-item">
            <b-link class="d-block build-highlight" :to="`/building/${building.id}`">
                <img :src="require(`@/assets/${building.icon}`)" class="mb-3" width="75px" height="75px">

                <h4>{{ building.name }}</h4>
                <p>{{ building.description }}</p>
            </b-link>
          </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Buildings extends Vue {
    
}
</script>

<style lang="scss" scoped>
.build-highlight {
    border: 1px solid #2c3e50;
    border-radius: 10px;
    padding: 2rem !important;
    text-decoration: none;
    color: black;
}

.build-highlight:hover {
    background: #87c3ff;
    cursor: pointer;
}
</style>