const topicModel = require("../models/topicSchema")
const commentModel = require("../models/commentSchema")

module.exports = {

    getAllTopics: async (req, res) => {

        const data = req.params
        const allTopics = await topicModel.find({index: data.index}).sort({_id: -1});

        res.send({success: true, allTopics: allTopics});
    },
    getAllComments: async (req, res) => {

        const data = req.params
        const allComments = await commentModel.find({threadId: data.getThreadId}).sort({_id: -1});

        res.send({success: true, allComments: allComments});
    },
    postTopic: async (req, res) => {

        const data = req.body
        const postTopic = new topicModel()

        postTopic.topic = data.topic
        postTopic.contentText = data.contentText
        postTopic.date = data.date
        postTopic.creator = data.creator
        postTopic.index = data.index

        await postTopic.save().then(res => {
        })
        res.send({success: "topic saved"})
    },
    postComment: async (req, res) => {

        const data = req.body
        const comment = new commentModel()

        comment.comment = data.comment
        comment.date = data.date
        comment.creator = data.creator
        comment.threadId = data.threadId

        await comment.save().then(res => {
        })

        const checkCreator = await topicModel.findOne({_id: data.threadId})
        if (data.creator.email !== checkCreator.creator.email) {
            await topicModel.findOneAndUpdate({_id: data.threadId}, {notifications: true})
        }

        const updateComments = await commentModel.find({threadId: data.threadId});

        res.send({success: true, allComments: updateComments})
    },
    getMyComments: async (req, res) => {

        const data = req.params
        const myComments = await commentModel.find({'creator.email': data.email}).sort({_id: -1});

        res.send({success: true, myComments: myComments});
    },
    getMyTopics: async (req, res) => {

        const data = req.params
        const myTopics = await topicModel.find({'creator.email': data.email}).sort({"notifications": -1, "date": -1});

        res.send({success: true, myTopics});
    },
    setNotification: async (req, res) => {
        const data = req.params
        await topicModel.findOneAndUpdate({_id: data.id}, {notifications: false})

        res.send({success: true})
    }
}