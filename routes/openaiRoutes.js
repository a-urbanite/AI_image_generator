import express from "express";
const router = express.Router();

router.post('/generateImage', (req, res) => {
  res.status(200).json({
    success: true
  })
})

export {router};