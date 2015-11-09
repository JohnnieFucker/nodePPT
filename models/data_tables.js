var mongoose = require("mongoose");

var Promise = require("bluebird");
Promise.promisifyAll(mongoose);

var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var _Schema = new Schema({
            company_id : String,
    app_id : String,
    user_id : String,
    nickname : String,
    nickname_en : String,
    owner_uids :String,//createor, excel_user_id 合集
    signing_uids : Array,//需要填写人的uids
    created : String,
    modified : String,
    deleted : Number,
    user_list:Object
},{versionKey: false});

module.exports = model.mongoose.model("data_tables", _Schema);