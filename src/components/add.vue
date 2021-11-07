<template>
  <div id="add_currency" class="page">
    <div class="rate">
      <label for="currencies">Choose a currency: </label>
      <select id="currencies" name="curenncieslist" form="currenciesform">
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="usd">USD</option>
        <option value="chf">CHF</option>
      </select>
    </div>
    <div class="choose">
      <form action="" id="currenciesform">
        <label for="crate">Rate:</label>
        <input type="number" id="crate" name="crate" />
      </form>
    </div>
    <button type="submit" @click="saveRate">Save currency</button>
  </div>
</template>

<script>
export default {
  name: "Add",
  methods: {
    saveRate() {
      router.state.currencies.value = crate.value;
    },
  },
};
</script>
