const express = require("express");
const router = express.Router();
const {
    getAllContacts,
    getContactById,
    createContact,
    updateContactById,
    deleteContactById
} = require("../controllers/contactController");
const toValidateToken=require("../middleware/validToken")

router.use(toValidateToken);
router.route("/")
    .get(getAllContacts)
    .post(createContact);

router.route("/:id")
    .get(getContactById)
    .put(updateContactById)
    .delete(deleteContactById);

module.exports = router;