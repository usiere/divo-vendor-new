import mongoose from 'mongoose';

const coutSchema = new mongoose.Schema({
    
    item_id:String,
    item: String,
    category: String,
    item_img: String,
    price: String,
    per: String,
    desc_intro: String,
   deli_time : String, 
    deli_addy: String,
    qty: Number,
    inputer: String,
    delivered: {type: Boolean, default: false },
    Date: { type: Date, default: Date.now }, //Date added
});
coutSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('cout', coutSchema);




