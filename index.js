const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "80ff948a-cbf9-4f00-86ba-a9581b59364f" } }
    );
    //console.log(r);
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.log(e);
    return e;
  }

  //return res.json({ username: username, secret: "sudhi28" });
});
app.listen(3001);
