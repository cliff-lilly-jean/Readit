<template>
  <footer id="footer">
    <div class="footer__content">
      <p class="footer__title">ReadIt</p>
      <p class="footer__copyright">
        &copy; Copyright 2021 Cliff Jean. All rights reserved.
      </p>
      <!-- TODO: Decide what links to add -->
      <div class="footer__links"></div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  background: #2f2e41;
  padding: 20px;
}

.footer__content {
  display: flex;
  justify-content: space-between;
  color: #fefefe;
  max-width: 1140px;
  margin: 0 auto;
  align-items: center;
}

.footer__title {
  color: #f4999d;
  font-size: 2rem;
  font-weight: bold;
}
</style>