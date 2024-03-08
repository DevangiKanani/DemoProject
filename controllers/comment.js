const COMMENT = require('../models/comment');
const POST = require('../models/post');

exports.create = async (req, res, next) => {
    try {
        let payload = req.body;
        payload.user = req.user._id;
        const comment = await COMMENT.create(payload);
        await POST.findOneAndUpdate({ _id: payload.post, isDeleted: false }, { $addToSet: { comments: comment } })
        return res.status(200).json({ data: comment, message: 'comment added sucessfully' })
    } catch (error) {
        next(error)
    }
}

exports.all = async (req, res, next) => {
    try {
        const comments = await COMMENT.find({ isDeleted: false }).populate({ path: 'post', select: 'title', populate: { path: 'user', select: 'firstName lastName' } })
            .populate({ path: 'user', select: 'firstName lastName' })
        return res.status(200).json({ data: comments })
    } catch (error) {
        next(error)
    }
}

exports.getAllPostComments = async (req, res, next) => {
    try {
        const postId = req.params.id;
        const comments = await COMMENT.find({ post: postId, isDeleted: false }).populate({ path: 'user', select: 'firstName lastName' })
        return res.status(200).json({ data: comments })
    } catch (error) {
        next(error)
    }
}

exports.show = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const comment = await COMMENT.findOne({ _id, isDeleted: false }).populate({ path: 'user', select: 'firstName lastName' })
            .populate({ path: 'post', select: 'title', populate: { path: 'user', select: 'firstName lastName' } });
        return res.status(200).json({ data: comment });
    } catch (error) { next(error); }
}

exports.delete = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const user = req.user;
        const _query = { _id, isDeleted: false };
        const comment = await COMMENT.findOne(_query);
        console.log("🚀 ~ exports.delete ~ comment:", comment)
        const postUser = await POST.findOne({ _id: comment.post }, 'user -_id');
        console.log("🚀 ~ exports.delete ~ postUser:", postUser)
        if (user.role.name !== 'Admin' && user._id.toString() !== postUser.user.toString() && user._id.toString() !== comment.user.toString()) {
            throw new Error({ status: 403, message: `You don't have sufficient access permission to delete this comment!` });
        }
        comment.isDeleted = true;
        comment.deletedBy = user._id;
        await comment.save();
        return res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) { next(error); }
}
