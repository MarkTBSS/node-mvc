import { insertBook, getAllBooks, getBookById, updateBook } from '../models/bookModel.js';

const handleErrorResponse = (res, error) => {
    res.status(500).json({ error: error.message });
};

const handleNotFoundResponse = (res, entity) => {
    if (entity) {
        res.status(200).json(entity);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
};

export const createBook = async (req, res) => {
    const { title, author } = req.body;
    try {
        const newBook = await insertBook(title, author);
        res.status(201).json(newBook);
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export const fetchAllBooks = async (req, res) => {
    try {
        const books = await getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export const fetchBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await getBookById(id);
        handleNotFoundResponse(res, book);
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export const fetchBookByIdQuery = async (req, res) => {
    const { id } = req.query;
    try {
        const book = await getBookById(id);
        handleNotFoundResponse(res, book);
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export const updateBookDetails = async (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    try {
        const updatedBook = await updateBook(id, title, author);
        handleNotFoundResponse(res, updatedBook);
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export const replaceBookDetails = async (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    try {
        const updatedBook = await updateBook(id, title, author);
        handleNotFoundResponse(res, updatedBook);
    } catch (error) {
        handleErrorResponse(res, error);
    }
};