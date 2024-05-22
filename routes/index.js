var express = require('express');
const multer = require('multer');
var router = express.Router();
var adminlogin = require('../admin_controller/login_controller');
var add_blog =require('../admin_controller/add_blog_controller');
var view_blog = require ('../admin_controller/view_blog_controller');
var manage_blog = require ('../admin_controller/manage_blog_controller');
var add_category =require ('../admin_controller/addblog_category_controller')
var view_category = require ('../admin_controller/view_category_controller');
var manage_category = require ('../admin_controller/manage_category_controller');
var single_blog = require('../admin_controller/single_view_blog_controller');




var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })


/* GET home page. */

// admin login page



router.post('/insert', adminlogin.insert );
router.get('/', adminlogin.get_data );

router.post('/login', adminlogin.login );
router.get('/logout', adminlogin.logout );

// add blog
router.post('/insert_blog',upload.single('image'),add_blog.insert);

// view blog
router.get('/view_blog',view_blog.get_data);

// manage blog

router.get('/delete_blog/:id', manage_blog.delete_data );
router.post('/update_blog/:id', manage_blog.update_data );

//  add category blog

router.post('/insert_blog_category',upload.single('image'),add_category.insert);

// view blog
router.get('/view_category',view_category.get_data);

// manage blog

router.get('/delete_category/:id', manage_category.delete_data );
router.post('/update_category/:id', manage_category.update_data );

//single view blog

router.get('/single_view_blog/:id',single_blog.view_data);




module.exports = router;
