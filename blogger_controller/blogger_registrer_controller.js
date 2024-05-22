var blogger_reg = require('../blogger_model/blogger_register_model');



exports.insert = async (req,res) => {
    var data = await blogger_reg.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
}
exports.get_data = async (req,res) => {
    var data = await blogger_reg.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
}