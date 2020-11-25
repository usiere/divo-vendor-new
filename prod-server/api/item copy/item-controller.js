'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = show;
exports.create = create;
exports.upd = upd;

var _itemModel = require('../../model/item-model');

var _itemModel2 = _interopRequireDefault(_itemModel);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const upload = require("../../services/image-upload");
// const singleUpload = upload.single("image");

function show(req, res) {}
// console.log(req)

// Primarily for the vuex aspect
function create(req, res) {
  console.log(req.body);
  var item = new _itemModel2.default({
    img_upd1: req.body.img_upd1,
    img_upd2: req.body.img_upd2,
    img_upd3: req.body.img_upd3,
    item_name: req.body.item_name,
    item_price: req.body.item_price,
    item_size: req.body.item_size,
    item_stock: req.body.item_stock,
    item_process: req.body.item_process,
    item_desc: req.body.item_desc,
    user: req.body.user,
    date: (0, _moment2.default)().format("MMM Do YY")

  });

  item.save(function (error) {
    if (error) {
      return console.log(error);
    }
    return res.status(201).json({ item: item });
  });
}

function upd(req, res) {
  console.log(req);
  console.log(req.files.location);
  console.log(req.files);
  console.log(req.body);
}

// singleUpload(req, res, function (err) {
//   if (err) {
//     return res.json({
//       success: false,
//       errors: {
//         title: "Image Upload Error",
//         detail: err.message,
//         error: err,
//       },
//     });
//   }

// let update = { profilePicture: req.file.location };

//  console.log(req)
// });