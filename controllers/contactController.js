const asyncHandler = require("express-async-handler");

//@des: Get all contacts
//@route: GET /api/contacts
//@access public

const getContacts = asyncHandler(async(req, res)=> {
    res.status(200).json({ message: "Get all contacts"});
});

//@des: Create New contact
//@route: POST /api/contacts
//@access public

const createContact = async(req, res) => {
    console.log("The request body is:", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(201).json({ message: "Create Contact" });
};

//@des: Get contact
//@route: GET /api/contacts
//@access public

const getContact = async(req, res)=> {
    res.status(200).json({ message: `Get Contact ${req.params.id}`});
};

//@des: Update contact
//@route: PUT /api/contacts
//@access public

const updateContact = async(req, res)=> {
    res.status(200).json({ message: `Upate Contact ${req.params.id}`});
};

//@des: Delete contact
//@route: DELETE /api/contacts
//@access public

const deleteContact = async(req, res)=> {
    res.status(200).json({ message: `Delete Contact ${req.params.id}` });
};

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };