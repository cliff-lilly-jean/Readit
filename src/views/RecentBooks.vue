<template>
  <div id="recent-books-component">
    <div class="recentBooks">
      <div class="cardHeader">
        <h2>Recent Books</h2>
        <router-link class="btn" to="/library">View All</router-link>
      </div>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Author</td>
            <td>Publsh Date</td>
          </tr>
        </thead>
        <tbody v-for="book in $store.state.books" :key="book.title">
          <tr>
            <!-- TODO: Pull this data from the server -->
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>
              <span class="status delivered">{{ book.publishDate }}</span>
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
    return {};
  },
};
</script>

<style scoped>
.recentBooks {
  position: relative;
  min-height: 530px;
  background: #fefefe;
  padding: 20px;
}

.cardHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cardHeader h2 {
  font-weight: 600;
}

.btn {
  position: relative;
  padding: 5px 10px;
  background: #ff6e69;
  color: #fefefe;
  text-decoration: none;
  border-radius: 6px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table thead td {
  font-weight: 600;
}

.recentBooks table tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.recentBooks table tbody tr:last-child {
  border-bottom: none;
}

.recentBooks table tbody tr:hover {
  background: #ff6e69;
  color: #fefefe;
}

.recentBooks table tr td {
  padding: 9px 5px;
}

.recentBooks table thead tr td:last-child,
.recentBooks table tbody tr td:last-child {
  text-align: right;
}

.recentBooks table thead tr td:nth-child(2),
.recentBooks table tbody tr td:nth-child(2) {
  text-align: right;
  padding-right: 20px;
}

.status {
  position: relative;
  padding: 2px 4px;

  color: #fefefe;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1px;
}

.delivered {
  background: #8de02c;
}

.pending {
  background: #f9ca3f;
}

.return {
  background: #f00;
}

.inprogress {
  background: #1795ce;
}

@media (max-width: 758px) {
  .cardHeader h2 {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .recentBooks {
    overflow-x: auto;
  }

  .recentBooks table {
    width: 600px;
  }
}
</style>