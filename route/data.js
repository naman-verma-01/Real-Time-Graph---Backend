const express = require("express");
const router = express.Router();
const { getData, addData } = require("../methods/graphData")

router.get("/getData", async (req, res) => {
    try {
        const response = await getData()
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})


router.post("/addData", async (req, res) => {
    try {
        const response = await addData(req.body)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})




module.exports = router;