const router = require("express").Router();
const User = require("../models/User");

//ランキング上位のユーザーの取得
router.get("/", async (req, res) =>{
    try {
        const user = await User.find().sort( { score:-1 } ).limit(8);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error)
    };
});


module.exports = router;