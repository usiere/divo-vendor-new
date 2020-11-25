'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orderSchema = new _mongoose2.default.Schema({

  item_id: String,
  item: String,
  category: String,
  item_img: String,
  price: String,
  per: String,
  desc_intro: String,
  deli_time: String,
  deli_addy: String,
  qty: Number,
  date: String,
  inputer: String,
  delivered: { type: Boolean, default: false }

});
orderSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

exports.default = _mongoose2.default.model('order', orderSchema);