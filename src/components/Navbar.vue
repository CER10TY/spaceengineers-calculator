<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="space-eg-nav">
      <b-navbar-brand to="/">
        <img src="@/assets/s_e_logo.png" width="100px" height="32px"/> Calculator
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Game Resources">
            <b-dropdown-item to="/buildings">Buildings</b-dropdown-item>
            <b-dropdown-item to="#" disabled>Tools</b-dropdown-item>
            <b-dropdown-item to="#" disabled>Items</b-dropdown-item>
            <b-dropdown-item to="#" disabled>Planets</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="#" disabled>Production Planner</b-nav-item>
          <b-nav-item to="#" disabled>Resource Planner</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              variant="info"
              >Search</b-button
            >
          </b-nav-form>
          <b-nav-item-dropdown text="Language" disabled>
            <b-dropdown-item to="#">EN</b-dropdown-item>
            <b-dropdown-item to="#">ES</b-dropdown-item>
            <b-dropdown-item to="#">RU</b-dropdown-item>
            <b-dropdown-item to="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.space-eg-nav {
  background: #486d82;
}

.space-eg-search {
  background: #b2d5e8;
}
</style>
