const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const controller = require("../controllers/modules.controller");
const modules = db.module;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


//GET ALL
router.get("/", controller.getAllModules);

//GET ONE
router.get("/:id", (req, res) => controller.getModuleByID(req ,res));

//CREATE
router.post("/", controller.createModule);

//UPDATE
router.put("/:id", (req, res) => controller.updateModule(req ,res));

//DELETE
router.delete("/:id", (req, res) => controller.deleteModuleByID(req,res));


module.exports = router;
