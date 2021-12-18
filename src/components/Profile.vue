<template>
  <!-- Make a component -->
  <div class="profile__container">
    <!-- Create an input field for the full name -->
    <input type="text" class="profile__name" />
    <!-- Create an input field for email -->
    <input type="email" name="email" id="" class="profile__email" />
    <!-- Create an textfiled for bio/description -->
    <textarea
      class="profile__bio"
      name="bio"
      id=""
      cols="30"
      rows="10"
    ></textarea>

    <!-- Create a way to get a users image -->
    <!-- Open user camera -->
    <!-- Take a still photo -->
    <!-- Make the still photo the users profile photo -->
    <!-- Or -->
    <!-- Open the users drive -->
    <!-- get the users photo from drive -->
    <!-- Make the still photo the users profile photo -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#description-field h2 {
  text-align: center;
  margin: 50px auto 0;
  font-size: 1.9em;
}

.profile__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.field-input {
  display: flex;
  flex-direction: column;
}

.profile__bio {
  border: none;
  border-radius: 10px;
  font-size: 1.2em;
  font-family: "Poppins", sans-serif;
}

.profile__bio:active,
.profile__bio:focus {
  outline: 3px solid salmon;
}
</style>