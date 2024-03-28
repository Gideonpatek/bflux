const express = require("express");
const { register, login, uploadPicture, userAccounts, updateAccountStatus, logOut, handleRefreshToken, adminRegister } = require("../controllers/account.controller");
const { userRequired, adminRequired } = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/user/register", register)

router.post("/user/login", login)
// 
router.post("/user/uploadPicture", userRequired, uploadPicture )
router.get("/user/accounts", adminRequired,  userAccounts)
router.put("/user/update-state", adminRequired, updateAccountStatus)
router.post("/user/logOut", userRequired, logOut)
router.post("/user/handleRefreshToken", handleRefreshToken)
router.post("/admin/adminRegister", adminRegister)

module.exports = router;