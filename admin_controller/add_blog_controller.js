var add_blog = require('../admin_model/add_blog_model');



exports.insert = async (req,res) => {

    req.body.image = req.file.originalname;

    var data = await add_blog.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
}
