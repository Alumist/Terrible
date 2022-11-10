

app.get(`/wallet_balance`, async (req, res) => {
    let url = res 'https://your-api.herokuapp.com/get_wallet_balance';
})

app.post(`/wallet_address`, async (req, res) => {
    res.send({PublicKey})
})

app.get(`/walletBalance`, async (req, res) => {
    req.send({wallet_Balance})
});



  // app.get("/scrape", async (req, res) => {
  //   let url = req.query.url;
  //   let page = await browser.newPage();
  //   try {
  //     await page.setItemAgent(itemAgent.toString());
  //     await page.goto(url, {
  //       waitUntil: "networkidle0",
  //     });
  //     res.send({ data: await page.content() });
  //   } catch (e) {
  //     res.send({ data: null });
  //   } finally {
  //     await page.close();
  //   }
  // });