import Book from "../models/BookModel.js";

export const getBooks = async (req, res) => {
    try{
        const response = await Book.findAll();
        res.status(200).json(response);
    } catch(e){
        console.log(e.message);
    }
}

export const getBookById = async (req, res) => {
    try{
        const response = await Book.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch(e){
        console.log(e.message);
    }
}

export const createBook = async (req, res) => {
    try{
        await Book.create(req.body);
        res.status(201).json({msg: "Book created"});
    } catch(e){
        console.log(e.message);
    }
}

export const updateBook = async (req, res) => {
    try{
        await Book.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Book updated"});
    } catch(e){
        console.log(e.message);
    }
}

export const deleteBook = async (req, res) => {
    try{
        await Book.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Book deleted"});
    } catch(e){
        console.log(e.message);
    }
}