<script lang="index.js">
  let wallet_address;
  let wallet_balance = 0;
  let button_submitted = false;
  let error = ``;
</script>

<div class="page">
  <input
    bind:value={wallet_address}
    type="textbox"
    placeholder="enter your wallet address..."
    class="page-textbox"
  />

  <div
    class="page-button"
    on:click={async () => {
      try {
        error = ``;

        // await the response from your api here
        wallet_balance = await $.getJSON(
          `https://your-api.herokuapp.com/get_wallet_balance/${wallet_address}`,
          function (data) {
            resolve(data);
          }
        ).fail(() => resolve(null));

        button_submitted = true;
      } catch (e) {
        error = `something went wrong!!!!`;
      }
    }}
  >
    click to get balance
  </div>

  {#if error.length > 0}
    {error}
  {/if}

  {#if button_submitted}
    <div class="page-text">
      SOL balance of this wallet: <b>{wallet_balance} SOL</b>
    </div>
  {/if}
</div>

<style lang="scss">
  .page {
  }

  .page-button {
    background-color: orange;
    color: white;
  }
</style>

<script src="main.js"></script>