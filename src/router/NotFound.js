import express from "express";

const router = express.Router();

router.use("*", function(req, res, next) {
  res.status(400).send(`No Found  : = ) ... `);
});

export default router;
