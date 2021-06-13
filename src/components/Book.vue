<template>
  <div id="books">
    {{ books }}
  </div>
</template>

<script>
export default {
  props: ["books"],
  setup() {},
  // mounted() {
  //   this.emitter.on("updateBooksArray", (newBoookData) => {
  //     let newBook = this.books;
  //     newBook.push(newBoookData);
  //     console.log(this.newBoook);
  //   });
  // },
};
</script>

<style>
</style>