const express = require("express")
const router =  express.Router();
const controller = require("../controller/Membership")


router.get("/", controller.main)


router.get("/membership", controller.membership);

