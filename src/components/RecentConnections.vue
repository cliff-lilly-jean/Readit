<template>
  <div id="recent-connections-component">
    <div class="recentConnections">
      <div class="cardHeader">
        <h2>Recent Connections</h2>
      </div>
      <table>
        <tbody v-for="connection in connections" :key="connection.name">
          <tr>
            <td width="60px">
              <div class="imgBx">
                <img :src="connection.connection.photo" width="100px" alt="" />
              </div>
            </td>
            <td>
              <h4>
                <!-- TODO: Pull this data from the server -->
                {{ connection.connection.name }}<br />
                <span>{{ connection.connection.email }} </span>
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import getConnections from "../composables/getConnections";

export default {
  setup() {
    const { connections, error, loadConnections } = getConnections();
    loadConnections();
    return { connections, error, loadConnections };
  },
};
</script>

<style scoped>
/* Connections */
.recentConnections {
  position: relative;
  min-height: 530px;
  background: #fefefe;
  padding: 20px;
}

.recentConnections .imgBx {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.recentConnections .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recentConnections table tr td h4 span {
  font-size: 14px;
  color: #999;
}

.recentConnections table tr:hover td h4 span,
.recentConnections table tr:hover {
  background: #ff6e69;
  color: #fefefe;
}

.recentConnections table tr td {
  padding: 7px 10px;
}

.recentConnections table tr td h4 {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2em;
}
</style>