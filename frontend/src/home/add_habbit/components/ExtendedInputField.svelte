<script lang="ts">
  export let value: string | null;
  export let placeholder: string;
</script>

<div class="input" on:click={() => alert("Функціонал у розробці...")}>
  {value ?? placeholder}
</div>

<style>
  .input {
    cursor: pointer;
    color: #000;
    display: flex;
    align-items: center;
    padding-left: 6pt;
    border-bottom: 1px solid gray;
    width: 100%;
    outline: none;
    border-radius: 20px;
    height: 45pt;
    font-size: 20px;
    text-align: left;
    margin-bottom: 12pt;
    margin-top: 2pt;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    background: linear-gradient(91deg, #d4b2ee -8.94%, #875b9e 110.58%);
  }
</style>
