var view_blog = require('../admin_model/add_blog_model');


exports.get_data = async (req,res) => {
    
    var data = await view_blog.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
}