const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photoController");
var multer = require("multer");
var upload = multer({ storage: multer.memoryStorage() });

router.get("/", (req, res) => {
  res.json({ message: "API online 😎" });
});

router.post("/upload", upload.single("file"), photoController.photoUpload);
router.get("/photos", photoController.findAll);


module.exports = router;
