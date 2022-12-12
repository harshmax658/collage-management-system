const express = require("express");
const router = express.Router();
const { createNewStudent } = require("../../controller/Admin_api");

router.post("/register-new-student", createNewStudent);

module.exports = router;
