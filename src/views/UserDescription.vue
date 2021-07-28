<template>
  <div id="user-description">
    <!-- Navigation Start -->
    <Navigation :toggleState="toggleState"></Navigation>
    <!-- Navigation End -->
    <!-- Main Start -->
    <div :class="{ active: toggleState }" class="main">
      <!-- Top Bar Start -->
      <Topbar @toggleMenu="toggleStateChange"></Topbar>
      <!-- Top Bar End -->
      <!-- Desctiption Field Start -->
      <DescriptionField></DescriptionField>
      <!-- Description Field End -->
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Topbar from "../components/Topbar";
import DescriptionField from "../components/DescriptionField";
export default {
  components: {
    Navigation,
    Topbar,
    DescriptionField,
  },
  setup() {},
  data() {
    return {
      toggleState: false,
    };
  },
  methods: {
    toggleStateChange(value) {
      this.toggleState = value;
    },
  },
};
</script>

<style scoped>
</style>