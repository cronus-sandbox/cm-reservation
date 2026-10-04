const express = require("express");

const app = express();
const customerServiceUrl = process.env.CUSTOMER_SERVICE_URL || "http://customer-service";

app.get("/reservations", async (_req, res) => {
  const response = await fetch(customerServiceUrl + "/customers");
  const customers = await response.json();
  res.json({ customers });
});

app.listen(8080);
