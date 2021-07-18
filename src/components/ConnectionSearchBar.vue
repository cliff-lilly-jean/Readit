<template>
  <div id="connection-search-bar">
    <div class="search" :class="{ active: searchToggle }">
      <div @click="searchBarToggle" class="icon"></div>
      <div class="input">
        <input
          type="text"
          placeholder="Make a connection"
          v-model="userConnections"
          autocomplete="off"
          @input="filterUsers"
        />
      </div>
      <span class="clear" @click="clearSearch"></span>
    </div>
    <!-- TODO: Create a dropdown list of users, by name pulled from firebase as the user types -->
    <div class="returned-connections" v-if="filteredUserConnections">
      <ul class="connections-list" :class="{ active: searchToggle }">
        <li
          class="connections-list__user"
          v-for="filteredConnection in filteredUserConnections"
          :key="filteredConnection"
          @click="addNewConnection(filteredConnection)"
        >
          <span class="connectionImage" v-if="filteredConnection.photo == null">
            <img
              src="https://img.icons8.com/material-rounded/48/000000/user.png"
              alt=""
            />
          </span>
          <span class="connectionImage" v-else>
            <img :src="filteredConnection.photo" alt="" />
          </span>
          <span class="connectionName">{{ filteredConnection.name }}</span>
          <span class="connectionBooks">
            {{ filteredConnection.books.length }}
          </span>
          <span><i class="fas fa-book"></i></span>
        </li>
      </ul>
    </div>

    <!-- TODO: Create request queue functionality for pending requests -->
  </div>
</template>

<script>
import { ref } from "vue";
import getAllDbConnections from "../composables/getAllDbConnections";
import getUser from "../composables/getUser";
import firebase from "firebase/app";
import { auth, db } from "../firebase/config";
export default {
  setup() {
    // Data
    const searchToggle = ref(false);
    const userConnections = ref("");
    const filteredUserConnections = ref([]);
    const { load, allCurrentUsersInDb } = getAllDbConnections();

    const { user } = getUser();
    const newConnection = ref(null);

    // Methods
    const filterUsers = () => {
      if (!userConnections.value) {
        filteredUserConnections.value = "";
      } else {
        filteredUserConnections.value = allCurrentUsersInDb.value.filter(
          (user) => {
            return user.name
              .toLowerCase()
              .startsWith(userConnections.value.toLowerCase());
          }
        );
      }
    };

    // TODO: Fix bug where a user can add themselves as a connection
    const addNewConnection = async (connection) => {
      newConnection.value = connection;

      // TODO: Add the new connections name, photo and books to the connections arr
      const currentConnection = {
        name: newConnection.value.name,
        photo: newConnection.value.photo,
        email: newConnection.value.email,
        books: newConnection.value.books,
        id: newConnection.value.id,
      };
      await db
        .collection("users")
        .doc(user.value.uid)
        .update({
          connections:
            firebase.firestore.FieldValue.arrayUnion(currentConnection),
        });
      searchToggle.value = !searchToggle.value;
      filteredUserConnections.value = "";
      userConnections.value = "";
    };

    const searchBarToggle = () => {
      searchToggle.value = !searchToggle.value;
      filteredUserConnections.value = "";
      userConnections.value = "";
    };

    const clearSearch = () => {
      userConnections.value = "";
      filteredUserConnections.value = "";
    };

    load();

    return {
      searchToggle,
      searchBarToggle,
      clearSearch,
      userConnections,
      allCurrentUsersInDb,
      filterUsers,
      filteredUserConnections,
      addNewConnection,
    };
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
  margin: 0 auto;
}

.search {
  position: relative;
  max-width: 60px;
  width: 100%;
  max-height: 60px;
  height: 100%;
  background: #e8505b;
  border-radius: 60px;
  transition: 0.5s;
  box-shadow: 0 0 0 5px #ffedee;
  overflow: hidden;
  margin: 50px auto 0;
}

.search.active {
  max-width: 360px;
  width: 100%;
}

.search .icon {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 60px;
  width: 100%;
  max-height: 60px;
  height: 100%;
  background: #e8505b;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;
}

.search .icon:before {
  content: "";
  position: absolute;
  max-width: 15px;
  width: 100%;
  max-height: 15px;
  height: 100%;
  border: 3px solid #fefefe;
  border-radius: 50%;
  transform: translate(-4px, -4px);
}

.search .icon:after {
  content: "";
  position: absolute;
  max-width: 3px;
  width: 100%;
  max-height: 12px;
  height: 100%;
  background: #fefefe;
  transform: translate(6px, 6px) rotate(315deg);
}

.search .input {
  position: relative;
  max-width: 300px;
  width: 100%;
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
  max-width: 15px;
  width: 100%;
  max-height: 15px;
  height: 100%;
  right: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clear:before {
  position: absolute;
  content: "";
  max-width: 1px;
  width: 100%;
  max-height: 15px;
  height: 100%;
  background: #fff;
  transform: rotate(45deg);
}

.clear:after {
  position: absolute;
  content: "";
  max-width: 1px;
  width: 100%;
  max-height: 15px;
  height: 100%;
  background: #fff;
  transform: rotate(315deg);
}

/* Connections List */

.returned-connections {
  display: flex;
  justify-content: center;
  margin: 10px auto;
}

.connections-list {
  max-width: 500px;
  width: 100%;
  padding: 20px;
  transition: 0.5s;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1000;
}

.connections-list.active {
  background: #e8505b;
  z-index: 1;
}

.connections-list__user {
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  color: #fff;
  margin: 5px 0;
  transition: 0.5s;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.connections-list__user:nth-child(1) {
  background: rgba(255, 255, 255, 0.6);
}

.connections-list__user:nth-child(2) {
  background: rgba(255, 255, 255, 0.4);
}

.connections-list__user:nth-child(3) {
  background: rgba(255, 255, 255, 0.2);
}

.connections-list__user span img {
  border-radius: 50%;
  max-width: 50px;
}

.connections-list__user:hover {
  transform: scale(1.05);
  transition: 0.5s;
  cursor: pointer;
  background: #e8505b;
}

/* Media Queries */
@media (max-width: 676px) {
  .search .input input {
    font-size: 16px;
  }
}
</style>