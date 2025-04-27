const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all notes
const getAllNotes = async (req, res) => {
    try {
        const notes = await prisma.note.findMany({
            where: {
                userId: req.user.id
            }
        });
        res.status(200).json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching notes' });
    }
};

// Create a new note
const createNote = async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const newNote = await prisma.note.create({
            data: {
                title,
                content,
                userId: req.user.id
            },
        });
        res.status(201).json(newNote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating note' });
    }
};

// Get a note by ID
const getNoteById = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await prisma.note.findFirst({
            where: {
                id: parseInt(id),
                userId: req.user.id
            },
        });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching note' });
    }
};

// Update a note
const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const note = await prisma.note.findFirst({
            where: {
                id: parseInt(id),
                userId: req.user.id
            },
        });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        const updatedNote = await prisma.note.update({
            where: {
                id: parseInt(id),
            },
            data: {
                title,
                content,
            },
        });
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating note' });
    }
};

// Delete a note
const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await prisma.note.findFirst({
            where: {
                id: parseInt(id),
                userId: req.user.id
            },
        });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        await prisma.note.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json({ message: 'Note deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting note' });
    }
};

// Export all functions
module.exports = {
    getAllNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote,
};
