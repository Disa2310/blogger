var add_blogger = require('../blogger_model/add_blogger_model');



exports.insert = async (req,res) => {

    req.body.image = req.file.originalname;

    var data = await add_blogger.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
}