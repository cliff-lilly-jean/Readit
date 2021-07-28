<template>
  <!-- TODO: Create a page that shows the books details when clicked -->
  <div id="clubs">
    <div v-if="clubs.length" class="club-container">
      <div v-for="club in clubs" :key="club.name" class="club">
        <div class="club__portrait" v-for="img in club" :key="img.photo">
          <div v-if="img.photo.length">
            <img :src="img.photo" />
          </div>
          <div v-else>
            <img src="../assets/images/_img/image_not_available.jpeg" alt="" />
          </div>
        </div>
        <div class="club__body">
          <p class="club__name">Name: {{ club.club.name }}</p>
          <p class="club__email">Email: {{ club.club.email }}</p>
          <!-- <p class="club__books"># of Books: {{ club.club..length }}</p> -->
        </div>
      </div>
    </div>
    <div v-else class="no-clubs">
      <h1>You have no clubs currently</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["clubs"],
};
</script>

<style scoped>
.club {
  max-width: 350px;
  width: 100%;
  background: #44cba1;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.club img {
  border-radius: 50%;
  max-width: 50px;
  width: 100%;
}

.club__body {
  font-weight: bold;
  font-size: 18px;
}

.club-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
}

.no-clubs {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 70px auto;
  text-align: center;
}

/* Media Queries */
@media (max-width: 676px) {
  .club-container {
    flex-direction: column;
    align-items: center;
  }

  .club__body {
    font-size: 16px;
  }

  .club {
    max-width: 600px;
  }
}
</style>