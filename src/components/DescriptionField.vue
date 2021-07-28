<template>
  <div id="description-field">
    <h2>Add a short 150 word description about yourself</h2>
    <div class="description-field__container">
      <div class="field-input">
        <textarea
          name=""
          id="user-description-box"
          cols="70"
          rows="5"
          maxlength="150"
        ></textarea>
        <input class="button button--description" type="submit" value="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Font import */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap");

#description-field h2 {
  text-align: center;
  margin: 50px auto 0;
  font-size: 1.9em;
}

.description-field__container {
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

#user-description-box {
  border: none;
  border-radius: 10px;
  font-size: 1.2em;
  font-family: "Poppins", sans-serif;
}

#user-description-box:active,
#user-description-box:focus {
  outline: 3px solid salmon;
}
</style>