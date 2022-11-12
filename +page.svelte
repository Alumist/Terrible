<script lang="ts">
    let wallet_address;
    let wallet_balance = 0;
    let button_submitted = false;
    let error = ``;
    let submit = "submit";
  </script>
    

<div class="page">
    <input
      bind:value={wallet_address}
      type="textbox"
      placeholder="enter your wallet address..."
      class="page-textbox"
>
</div>



<div 
class="page-button">
   <input 
   bind:value={submit} 
   type="button"
   placeholder="submit"
   
   >
</div>



<style>
    .page {
        background-color: azure;
        text-align: center;
        padding: 2em;
        max-width: 200px;
        margin: 0 auto;
    }
    :global(body){
        background-color: azure;
        background-image: url("https://imgs.search.brave.com/kJPmSl4ClewrNqTxbifwzaQQFfyrS5S1hMRPGxxVAt4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/YVZNVUxyUmYyeFRo/dDJBR2c5bS1RSGFF/SyZwaWQ9QXBp");
    }
    
</style>

