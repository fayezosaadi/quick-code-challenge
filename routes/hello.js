const express = require('express');
const router = express.Router();
const fs = require("fs");
// const myJson = require("./filename.json");

// GET message
router.get('/', async (req, res) => {
  try {
    const fileContent = await fs.readFileSync('hello.json', 'utf8');
    res.status(200).send(fileContent) ;
  } catch (err) {
    res.status(404).json({ message: 'Not Found' });
  }
});

// SET message
router.post('/', async (req, res) => {
  try {
    await fs.writeFile( "hello.json", Object.keys(req.body)[0], "utf8", () => {
      res.status(201).json({ message: 'Data successfully added!' });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Failed to create data' });
  }
});

// DELETE message
router.delete('/', async (req, res) => {
  try {
    await fs.unlinkSync('hello.json');
    res.status(200).json({ message: 'Data was deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete data' });
  }
});

module.exports = router;
