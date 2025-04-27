const {getAllNotes, createNote, getNoteById, updateNote, deleteNote} = require('../controllers/notesControllers');
const authMiddleware = require('../middleware/authMiddleware');
const express = require('express');
const router = express.Router();

router.get('/notes', authMiddleware, getAllNotes);
router.post('/notes', authMiddleware, createNote);
router.get('/notes/:id', authMiddleware, getNoteById);
router.put('/notes/:id', authMiddleware, updateNote);
router.delete('/notes/:id', authMiddleware, deleteNote);

module.exports = router;

