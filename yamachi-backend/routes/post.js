const router = require("express").Router();
const User = require("../models/User");

//ユーザー登録
router.post("/register", async (req, res) => {
    try {
        const newUser = await new User({
            username: req.body.username,
            score: req.body.score,
        });
        const user = await newUser.save();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(err);
    };
})

module.exports = router;