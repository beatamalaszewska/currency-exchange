<template>
  <div id="table" class="page">
    <table>
      <tr>
        <th>Currency</th>
        <th>Exchange rate</th>
      </tr>
      <tr v-for="(value, name) in this.$store.state" :key="value">
        <td>
          {{ name.toUpperCase() }}
        </td>
        <td>{{ value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
};
</script>
