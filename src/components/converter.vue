<template>
  <div id="converter" class="page">
    <div class="amount">
      <form action="" id="amountForm">
        <label for="crate">How much do you want to exchange?</label>
        <input
          type="number"
          id="amountExch"
          name="amountExch"
          v-model="exchange"
        />
      </form>
    </div>
    <div class="choose">
      <label for="currencies">Choose a currency: </label>
      <select
        id="currencies"
        name="curenncieslist"
        form="amountForm"
        v-model="selectedCurExch"
      >
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="usd">USD</option>
        <option value="chf">CHF</option>
      </select>
    </div>
    <button type="submit" v-on:click="convertToPLN">Convert</button>
    <label class="result">PLN</label>
  </div>
</template>

<script>
export default {
  name: "Converter",
  data() {
    return {
      exchange: "",
      selectedCurExch: "",
    };
  },
  methods: {
    convertToPLN() {
      const rateExch = this.$store.state[this.selectedCurExch];
      const valuePLN = rateExch * this.exchange;

      document.getElementsByClassName(
        "result"
      )[0].innerHTML = `${valuePLN} PLN`;
    },
  },
};
</script>
