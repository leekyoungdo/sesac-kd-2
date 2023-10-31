const express = require("express")
const router =  express.Router();
const controller = require("../controller/Cmembership")


router.get("/", controller.main)

router.get("/index", controller.index);

router.post("/index", controller.postMembership);

module.exports = router;