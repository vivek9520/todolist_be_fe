const { Router } = require("express");

const authController = require("../controllers/authController");

const router = Router();

router.post("/api/v1/signup", authController.signUp);
router.post("/api/v1/login", authController.login);


module.exports = router;
