var express = require('express');
const multer = require('multer');
var router = express.Router();
var blogger_reg = require('../blogger_controller/blogger_registrer_controller');
var blogger_login = require ('../blogger_controller/blogger_login_controller');
var add_blogger =require ('../blogger_controller/add_blogger_controller');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })

  
// blogger registration

router.post('/insert_blogger_reg', blogger_reg.insert );
router.get('/blogger_reg', blogger_reg.get_data );


// blogger login page

router.post('/insert_blogger_login', blogger_login.insert );
router.get('/select_blogger_login', blogger_login.get_data );

router.post('/blogger_login', blogger_login.login );
router.get('/blogger_logout', blogger_login.logout );

//add blogger
router.post('/insert_blogger',upload.single('image'),add_blogger.insert);

// view blog
// router.get('/view_category',view_category.get_data);

// manage blog

// router.get('/delete_category/:id', manage_category.delete_data );
// router.post('/update_category/:id', manage_category.update_data );
module.exports = router;