<template>
  <div>
    <div id="app">
      <router-view></router-view>
    </div>
    <div class="nav">
      <nav>
        <div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/add" class="nav-link">Add currency</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/rate_table" class="nav-link"
                >Table with rates</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/converter" class="nav-link"
                >Convert</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Arial;
  color: #8ebff1;
  height: 100%;
  width: 80%;
  right: 0;
  display: inline-block;
}
.nav {
  font-family: Arial;
  display: fixed;
  width: 20%;
  height: 100vh;
  background: blue;
  float: left;
}
ul {
  padding-inline-start: 0px;
  padding-top: 5vh;
}
.nav-item {
  left: 0;
  padding: 5% 0 5% 10%;
}
ul li {
  list-style: none;
}
a {
  color: white;
  text-decoration: none;
}
.nav-item:hover {
  background-color: turquoise;
}
.page {
  width: 100%;
  height: 100%;
  margin-top: 5vh;
}

table {
  margin: 0 auto;
  width: 50%;
  border-color: black;
  border-collapse: collapse;
  text-align: center;
}
th,
td {
  padding: 5%;
  width: 50%;
  border: 1px solid #000;
}
#add_currency {
  text-align: center;
}
.rate,
.choose {
  width: 75%;
  margin: 0 auto;
  padding: 10px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
