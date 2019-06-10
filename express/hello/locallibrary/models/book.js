// 书籍信息
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        // 对Author 模型对象的引用
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    genre: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }]
});

// 虚拟属性'url'：藏书 URL
BookSchema
    .virtual('url')
    .get(function () {
        return '/catelog/book/' + this._id;
    });

// 导出 Book 模块
module.exports = mongoose.model('Book', BookSchema);