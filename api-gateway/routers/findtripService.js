var express = require("express");
var router = express.Router();
var apiAdapter = require("./apiAdapter");
const BASE_URL = "http://localhost:9000";
const api = apiAdapter(BASE_URL);
router.get("/trips", (req, res) => {
  //Get data form keyword ?keyword="word"
  api.get(req.path).then((resp) => {
    let keyword = "";
    //Check if url don't have query path
    if (req.query.keyword === undefined) {
      keyword = "";
    } else {
      keyword = req.query.keyword;
    }
    //Get data if keyword match 3 keys in array object
    const data = resp.data.filter((data) => {
      if (
        data.title.indexOf(keyword) !== -1 ||
        data.description.indexOf(keyword) !== -1
      ) {
        return true;
      } else {
        //Object key "tags" is array
        for (let i = 0; i < data.tags.length; i++) {
          const element = data.tags[i];
          if (element.indexOf(keyword) !== -1) {
            return true;
          }
        }
      }
    });
    //Send data to client
    res.send(data);
    // }
  });
});
module.exports = router;
