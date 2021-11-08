<template>
  <div id="add_currency" class="page">
    <div class="choose">
      <label for="currencies">Choose a currency: </label>
      <select
        id="currencies"
        name="curenncieslist"
        form="currenciesForm"
        v-model="selectedCur"
      >
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="usd">USD</option>
        <option value="chf">CHF</option>
      </select>
    </div>
    <div class="rate">
      <form action="" id="currenciesForm">
        <label for="cRate">Rate:</label>
        <input type="number" id="crate" name="cRate" v-model="savedRate" />
      </form>
    </div>
    <button type="submit" v-on:click="saveRate">Save currency</button>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      savedRate: "",
      selectedCur: "",
    };
  },
  methods: {
    saveRate() {
      this.$store.commit("saveRate", {
        selectedCur: this.selectedCur,
        savedRate: this.savedRate,
      });
    },
  },
};
</script>
