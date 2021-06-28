<template>
  <div id="connection-search-bar">
    <div class="search" :class="{ active: searchToggle }">
      <div @click="searchBarToggle" class="icon"></div>
      <div class="input">
        <input
          type="text"
          placeholder="Make a connection"
          v-model="userSearch"
        />
      </div>
      <span class="clear" @click="clearSearch"></span>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const searchToggle = ref(false);
    const userSearch = ref("");

    const searchBarToggle = () => {
      searchToggle.value = !searchToggle.value;
    };

    const clearSearch = () => {
      userSearch.value = "";
    };

    return { searchToggle, searchBarToggle, clearSearch, userSearch };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#connection-search-bar {
  align-self: flex-start;
  margin: 50px auto;
}

.search {
  position: relative;
  width: 60px;
  height: 60px;
  background: #e8505b;
  border-radius: 60px;
  transition: 0.5s;
  box-shadow: 0 0 0 5px #ffedee;
  overflow: hidden;
}

.search.active {
  width: 360px;
}

.search .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  background: #e8505b;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}

.search .icon:before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  border: 3px solid #fefefe;
  border-radius: 50%;
  transform: translate(-4px, -4px);
}

.search .icon:after {
  content: "";
  position: absolute;
  width: 3px;
  height: 12px;
  background: #fefefe;
  transform: translate(6px, 6px) rotate(315deg);
}

.search .input {
  position: relative;
  width: 300px;
  height: 60px;
  left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search .input input::placeholder {
  color: #fefefe;
}

.search .input input {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 20px;
  background: #e8505b;
  color: #fefefe;
  padding: 10px 0;
}

.clear {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  right: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clear:before {
  position: absolute;
  content: "";
  width: 1px;
  height: 15px;
  background: #fff;
  transform: rotate(45deg);
}

.clear:after {
  position: absolute;
  content: "";
  width: 1px;
  height: 15px;
  background: #fff;
  transform: rotate(315deg);
}
</style>