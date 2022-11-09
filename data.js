







app.get(`/`, (req, res) => {
    res.send(`Olleatlas Sample API`);
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