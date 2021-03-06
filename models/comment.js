var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
    content: { type: String, required: true },
    author : { type: Schema.Types.ObjectId, ref: "User", required: true },
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
});

module.exports = mongoose.model('Comment', CommentSchema);