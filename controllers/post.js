const POST = require('../models/post');

const postValidation = async (id, user) => {
    const post = await POST.findOne({ _id: id, isDeleted: false })

    if (!post) {
        throw new Error('Post with id not exist')
    }

    if ((post.user.toString() !== user._id.toString()) && (user.role['name'] !== 'Admin')) {
        throw new Error(`You don't have sufficient access permission to perform any operations`)
    }

    return post;
}

exports.all = async (req, res, next) => {
    try {
        const posts = await POST.find({ isDeleted: false }).populate({ path: 'user', select: 'firstName lastName' })
            .populate({ path: 'comments', select: 'comment', populate: { path: 'user', select: 'firstName lastName' } })
        return res.status(200).json({ posts: posts })
    } catch (error) {
        next(error)
    }
}

exports.getPost = async (req, res, next) => {
    try {
        const post = await POST.aggregate([
            {
                $lookup: {
                    from: 'comments',
                    let: { commentIds: '$comments' },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $in: ['$_id', '$$commentIds'] },
                                salary: { $gt: 35000 }
                            }
                        }
                    ],
                    as: 'commentInfo'
                }
            },

            {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                $match: {
                    $expr: {
                        // $and: [
                             $gte: [{ $size: "$commentInfo" }, 3] , // Teachers with 2 or more students
                            // { $gt: [{ $sum: "$commentInfo.salary" }, 35000] } // Students' fees greater than 35000
                        // ]
                    }
                }
            }
           
        ])
res.send(post)
console.log("🚀 ~ exports.getPost= ~ post:", post)
    } catch (error) {
    next(error)
}
}

exports.create = async (req, res, next) => {
    try {
        let payload = req.body;
        payload.image = req.file.originalname;
        payload.user = req.user['_id']
        const post = await POST.create(payload);
        return res.status(200).json({ post, message: 'Post created sucessfully' })
    } catch (error) {
        next(error)
    }
}

exports.show = async (req, res, next) => {
    try {
        const post = await postValidation(req.params.id, req.user)
        res.status(200).json({ data: post, message: 'Post get sucessfully' })
    } catch (error) {
        next(error)
    }
}

exports.update = async (req, res, next) => {
    try {
        const post = await postValidation(req.params.id, req.user)
        await post.updateOne(req.body)
        res.status(200).json({ message: 'Post updated sucessfully' })
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {
    try {
        const post = await postValidation(req.params.id, req.user)
        await post.updateOne({ isDeleted: true })
        res.status(200).json({ message: 'Post deleted sucessfully' })
    } catch (error) {
        next(error)
    }
}