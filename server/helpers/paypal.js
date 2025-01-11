const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASpVtF9DH2pjvc4_NjOgQPXk3xa8T7mEGExJeVgDLwFuXzoZ3DmnqQyANqo90_JZNXujBaP9h6hUNqnQ",
  client_secret: "EIO-D-_qhLxYibWz-jOcgoNj3M36ifsh_db0f5whUBkVKbK1dnQuj4CUTOQfPTD81DLBtYo_3r0n9NEJ",
});

module.exports = paypal;
