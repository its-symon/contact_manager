const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact_model");

//@des: Get all contacts
//@route: GET /api/contacts
//@access public

const getContacts = asyncHandler(async(req, res)=> {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@des: Create New contact
//@route: POST /api/contacts
//@access public

const createContact = asyncHandler(async(req, res) => {
    console.log("The request body is:", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const contact = await Contact.create({
        name, email, phone
    });

    res.status(201).json(contact);
});

//@des: Get contact
//@route: GET /api/contacts
//@access public

const getContact = asyncHandler(async(req, res)=> {
    const contact = await Contact.findById(req.params.id);

    if(!contact) {
        res.status(404);
        throw new Error("Contact not found!")
    }

    res.status(200).json(contact);
});

//@des: Update contact
//@route: PUT /api/contacts
//@access public

const updateContact = asyncHandler(async(req, res)=> {

    const contact = await Contact.findById(req.params.id);

    if(!contact) {
        res.status(404);
        throw new Error("Contact not found!")
    }

    const updated_contact = await Contact.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new: true}
    );

    res.status(200).json(updated_contact);
});

//@des: Delete contact
//@route: DELETE /api/contacts
//@access public

const deleteContact = asyncHandler(async(req, res)=> {
    const contact = await Contact.findById(req.params.id);

    if(!contact) {
        res.status(404);
        throw new Error("Contact not found!")
    }

    await Contact.findByIdAndDelete(
        req.params.id, 
        req.body,
        {new: true}
    );
    res.status(204).json({ message: `Deleted Contact` });
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };