
const topicModel = require("../models/topicSchema")
const commentModel = require("../models/commentSchema")



module.exports = {
    // postCategory: (req, res) => {
    //     const data = req.body
    //
    //     const category = new categoryModel()
    //
    //
    //
    //     category.name = data.name
    //
    //
    //     user.save().then(res => {
    //
    //         console.log("pass saved")
    //     })
    //     res.send({success: "user saved"})
    //
    // },
    getAllTopics: async (req, res) => {
        const data = req.params
        // console.log(data)


            const allTopics = await topicModel.find({index: data.index}).sort({ _id: -1 });

            // console.log(byEmail[0].password)
            // console.log(data.password)

            // console.log(allTopics)

            // if (compare) {
            //     res.send(byEmail[0])
            //
            // } else {
            //     res.send({fail: "pass dont match"})
            // }

            res.send({ success: true, allTopics:allTopics });




    },
    getAllComments: async (req, res) => {
        const data = req.params
        console.log(data)


        const allComments = await commentModel.find({index: data.index}).sort({ _id: -1 });

        // console.log(byEmail[0].password)
        // console.log(data.password)

        // console.log(allTopics)

        // if (compare) {
        //     res.send(byEmail[0])
        //
        // } else {
        //     res.send({fail: "pass dont match"})
        // }

        res.send({ success: true, allComments:allComments });




    },
    postTopic: (req, res) => {
        const data = req.body

        const postTopic = new topicModel()



        postTopic.topic = data.topic
        postTopic.contentText = data.contentText
        postTopic.date = data.date
        postTopic.creator = data.creator
        postTopic.index = data.index


        postTopic.save().then(res => {

            console.log("topic saved")
        })
        res.send({success: "topic saved"})




    },
    postComment: async (req, res) => {
        const data = req.body



        const comment = new commentModel()



        comment.comment = data.comment
        comment.date = data.date
        comment.creator = data.creator
        comment.index = data.index


        comment.save().then(res => {

            console.log("comment saved")
        })
        const updateComments = await commentModel.find({index: data.index}).sort({ _id: -1 });
        res.send({success: true, allComments:updateComments})



    },

}