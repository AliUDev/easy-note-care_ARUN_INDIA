// const User = require("../models/user.model.js");


const getUsers = (req, res) => {

res.status(200).json({
    data:"you got access to the private data in this route"
})

    // User.find({})
    // .then(user => res.json(user))
    // .catch(err => res.status(404).json({ noproductsfound: `No user found` }));
    
}

module.exports = { getUsers }
