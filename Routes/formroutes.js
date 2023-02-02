let express= require("express")
// let img= require("../../public/Images")
const Product = require("../Schema/Product");
const router = express.Router();
router.use(express.json());


router.post("/", async (req, res) => {
    try {
     
      let data = await Product.create({...req.body})
      res.send(data);
      console.log(data);
    } catch (e) {
      res.status(400).json({
        status: "Failed",
        message: e.message,
      });
    }
  });

  module.exports = router;