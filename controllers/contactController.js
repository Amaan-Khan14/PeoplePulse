const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels")

//@desc Get all contacts
//@route GET /api/contacts
//@acces private 

const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});

//@desc Get contact by id
//@route GET /api/contacts/:id
//@acces private 

const getContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found")
    }
    res.status(200).json(contact)

});


//@desc Post contact
//@route POST /api/contacts
//@acces private

const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Please provide details name, email and phone number")
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });

    res.status(201).json(contact);

});


//@desc Put/Update contact
//@route Put /api/contacts/:id
//@acces private
const updateContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found")
    };

    if (contact.user_id != req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts")
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updateContact)
});


//@desc Delete contact
//@route DELET /api/contacts/:id
//@acces private
const deleteContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found")
    };

    if (contact.user_id.toString() != req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts")
    }

    await Contact.deleteOne({_id:req.params.id});
    res.json(contact)

});


module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContactById,
    deleteContactById
};