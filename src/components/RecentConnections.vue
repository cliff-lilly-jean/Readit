<template>
  <div id="recent-connections-component">
    <div class="recentConnections">
      <div class="cardHeader">
        <h2>Recent Connections</h2>
      </div>
      <table>
        <tbody>
          <tr>
            <td width="60px">
              <div class="imgBx">
                <img
                  src="../assets/images/_img/cliff-jean-portrait.jpg"
                  alt=""
                />
              </div>
            </td>
            <td>
              <h4>
                <!-- TODO: Pull this data from the server -->
                {{ connectionName }}<br />
                <span>{{ connectionLocation }} </span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div class="imgBx">
                <img
                  src="../assets/images/_img/cliff-jean-portrait.jpg"
                  alt=""
                />
              </div>
            </td>
            <td>
              <h4>
                <!-- TODO: Pull this data from the server -->
                {{ connectionName }}<br />
                <span>{{ connectionLocation }} </span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div class="imgBx">
                <img
                  src="../assets/images/_img/cliff-jean-portrait.jpg"
                  alt=""
                />
              </div>
            </td>
            <td>
              <h4>
                <!-- TODO: Pull this data from the server -->
                {{ connectionName }}<br />
                <span>{{ connectionLocation }} </span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div class="imgBx">
                <img
                  src="../assets/images/_img/cliff-jean-portrait.jpg"
                  alt=""
                />
              </div>
            </td>
            <td>
              <h4>
                <!-- TODO: Pull this data from the server -->
                {{ connectionName }}<br />
                <span>{{ connectionLocation }} </span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div class="imgBx">
                <img
                  src="../assets/images/_img/cliff-jean-portrait.jpg"
                  alt=""
                />
              </div>
            </td>
            <td>
              <h4>
                <!-- TODO: Pull this data from the server -->
                {{ connectionName }}<br />
                <span>{{ connectionLocation }} </span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div class="imgBx">
                <img
                  src="../assets/images/_img/cliff-jean-portrait.jpg"
                  alt=""
                />
              </div>
            </td>
            <td>
              <h4>
                <!-- TODO: Pull this data from the server -->
                {{ connectionName }}<br />
                <span>{{ connectionLocation }} </span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div class="imgBx">
                <img
                  src="../assets/images/_img/cliff-jean-portrait.jpg"
                  alt=""
                />
              </div>
            </td>
            <td>
              <h4>
                <!-- TODO: Pull this data from the server -->
                {{ connectionName }}<br />
                <span>{{ connectionLocation }} </span>
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connectionName: "Cliff Jean",
      connectionLocation: "North Lauderdale",
    };
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