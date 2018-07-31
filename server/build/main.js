require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Admin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_local_mongoose__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_local_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_local_mongoose__);

const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;


const AdminSchema = new Schema({
  pseudo: { type: String, required: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, required: true },
  password: { type: String, required: true }
});

const Admin = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Admin', AdminSchema);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const devConfig = {
  secret: '$Sib9l7'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = devConfig;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dotenv_config__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cors__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_volleyball__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_passport_local__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_passport_local___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_passport_local__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bcryptjs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_express_session__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_passport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes_admin_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_article_js__ = __webpack_require__(20);






const { SERVER_PORT, DB_Url } = process.env;

const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();





__webpack_require__(14);
app.use(__WEBPACK_IMPORTED_MODULE_8_express_session___default()({ secret: "secret" }));
app.use(__WEBPACK_IMPORTED_MODULE_9_passport___default.a.initialize());
app.use(__WEBPACK_IMPORTED_MODULE_9_passport___default.a.session());

app.use(__WEBPACK_IMPORTED_MODULE_4_cors___default()());

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static('public'));

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_5_volleyball___default.a);

__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connection.on('connected', () => {
  console.log(`[MongoDb] is running on port 27017`);
});
__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect(DB_Url);

app.get('/', (req, res) => {
  res.send("ca marche");
});


app.use('/apiadmin', __WEBPACK_IMPORTED_MODULE_10__routes_admin_js__["a" /* adminRouter */]);


app.use('/apiarticle', __WEBPACK_IMPORTED_MODULE_11__routes_article_js__["a" /* articleRouter */]);

app.listen(SERVER_PORT, () => {
  console.log(`Server running on ${SERVER_PORT}`);
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_models_admin__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_passport_local__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_passport_local___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_passport_local__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env_dev__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_passport_jwt__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_passport_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_passport_jwt__);






__WEBPACK_IMPORTED_MODULE_0_passport___default.a.serializeUser(function (admin, done) {
  done(null, admin.id);
});

__WEBPACK_IMPORTED_MODULE_0_passport___default.a.deserializeUser(function (id, done) {
  __WEBPACK_IMPORTED_MODULE_1__src_models_admin__["a" /* Admin */].findById(id, function (err, admin) {
    done(err, admin);
  });
});

__WEBPACK_IMPORTED_MODULE_0_passport___default.a.use('local-signup', new __WEBPACK_IMPORTED_MODULE_2_passport_local___default.a({
  usernameField: "pseudo",
  passwordField: "password",
  passReqToCallback: true
}, function (req, pseudo, password, done) {
  __WEBPACK_IMPORTED_MODULE_1__src_models_admin__["a" /* Admin */].findOne({ 'name': name }, function (err, admin) {
    if (err) {
      return done(err);
    }
    if (admin) {
      return done(null, false, { message: 'name is already in use' });
    }
    var newAdmin = new __WEBPACK_IMPORTED_MODULE_1__src_models_admin__["a" /* Admin */]();
    newAdmin.pseudo = pseudo;
    newAdmin.password = password;
    newAdmin.save(function (err, result) {
      if (err) {
        return done(err);
      }
      return done(null, newAdmin);
    });
  });
}));

__WEBPACK_IMPORTED_MODULE_0_passport___default.a.use('local-signin', new __WEBPACK_IMPORTED_MODULE_2_passport_local___default.a({
  usernameField: 'pseudo',
  passwordField: 'password',
  passReqToCallback: true
}, function (req, pseudo, password, done) {
  __WEBPACK_IMPORTED_MODULE_1__src_models_admin__["a" /* Admin */].findOne({ 'pseudo': pseudo }, function (err, admin) {
    if (err) {
      return done(err);
    }
    if (!admin) {
      return done(null, false, { message: 'no admin found' });
    }

    return done(null, admin);
  });
}));

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("passport-local-mongoose");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adminRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_admin__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bcryptjs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_passport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_helpers_jwt__ = __webpack_require__(18);







const adminRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

adminRouter.get('/', (req, res) => {
  res.send('welcome');
});

adminRouter.post('/signup', (req, res) => {
  let newAdmin = new __WEBPACK_IMPORTED_MODULE_1__models_admin__["a" /* Admin */](req.body);
  __WEBPACK_IMPORTED_MODULE_3_bcryptjs___default.a.genSalt(10, function (err, salt) {
    __WEBPACK_IMPORTED_MODULE_3_bcryptjs___default.a.hash(newAdmin.password, salt, function (err, hash) {
      newAdmin.password = hash;
      newAdmin.save((err, admin) => {
        if (err) err;
        res.json({ admin });
      });
    });
  });
});

// adminRouter.get('/login',(req, res) => {
//   const token = jwt.issue({id:admin._id}, "1d");
//   return res.json({token})
// })

adminRouter.post('/login', __WEBPACK_IMPORTED_MODULE_4_passport___default.a.authenticate('local-signin'),
// successRedirect:'/',
// failureRedirect:'/admin/login',
// failureFlash:true
function (req, res) {
  // const token = jwt.issue({id:admin._id}, "1d");
  // return res.json({token})
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.sendStatus(200);
});



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__env_dev__ = __webpack_require__(7);



/* unused harmony default export */ var _unused_webpack_default_export = ({
  issue(payload, expiresIn) {
    return __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.sign(payload, __WEBPACK_IMPORTED_MODULE_1__env_dev__["a" /* devConfig */].secret, {
      expiresIn //duree du tokenA
    });
  }
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return articleRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_article__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cloudinary__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cloudinary___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cloudinary__);





const articleRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

__WEBPACK_IMPORTED_MODULE_3_cloudinary___default.a.config({
  cloud_name: 'dwec5io9x',
  api_key: '847232866137596',
  api_secret: 'c07se2AWc1O3iahkESbwneMtjxQ'
});

articleRouter.get('/', (req, res) => {
  res.send('ca marche');
});

articleRouter.post('/add', (req, res) => {
  const newArticle = new __WEBPACK_IMPORTED_MODULE_2__models_article__["a" /* default */](req.body);
  console.log(req.body);
  if (req.body.img) {
    __WEBPACK_IMPORTED_MODULE_3_cloudinary___default.a.v2.uploader.upload(req.body.img, function (err, result) {
      if (err) console.log(err);
      let secUrl = result.secure_url;
      newArticle.img = secUrl;
      newArticle.imgId = result.public_id;
    });
  } else {
    newArticle.img = "noimage";
    newArticle.imgId = "noID";
  }

  if (req.body.isPublished) {
    newArticle.isPublihed = true;
  } else {
    newArticle.isPublihed = false;
  }

  newArticle.save((err, article) => {
    if (err) return console.log(err);
    res.json({ message: "ok" });
  });
});

articleRouter.get('/articles', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_2__models_article__["a" /* default */].find({}, (err, articles) => {
    if (err) throw err;
    res.json({ articles });
  });
});

articleRouter.get('/articles/delete/:id', (req, res) => {
  let query = { _id: req.params.id };
  __WEBPACK_IMPORTED_MODULE_2__models_article__["a" /* default */].findByIdAndRemove(query, err => {
    if (err) res.send(err);
    res.json({ message: "supprimé" });
  });
});

articleRouter.get('/articles/:id', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_2__models_article__["a" /* default */].find({ _id: req.params.id }, (err, article) => {
    if (err) res.send(err);
    res.json(article);
  });
});

articleRouter.post('/articles/:id', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_2__models_article__["a" /* default */].update({ _id: req.params.id }, req.body, err => {
    if (err) throw err;
    res.json({ message: "edité" });
  });
});


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  img: { type: String },
  imgId: { type: String },
  isPublished: { type: Boolean, default: false }
});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("Article", articleSchema));

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("cloudinary");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map