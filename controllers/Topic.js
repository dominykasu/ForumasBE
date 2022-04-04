
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


        // topicIndex:data.getThreadIndex,
        const allComments = await commentModel.find({threadId: data.getThreadId}).sort({ _id: -1 });

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
    postTopic: async (req, res) => {
        const data = req.body

        const postTopic = new topicModel()

        console.log(data)

        postTopic.topic = data.topic
        postTopic.contentText = data.contentText
        postTopic.date = data.date
        postTopic.creator = data.creator
        postTopic.index = data.index


       await postTopic.save().then(res => {

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
        // comment.index = data.index
        comment.threadId = data.threadId

        console.log(data)
       await comment.save().then(res => {

            console.log("comment saved")
        })
        const updateComments = await commentModel.find({threadId: data.threadId});
        console.log(updateComments)
        res.send({success: true, allComments:updateComments})



    },
    getMyComments: async (req, res) => {
        const data = req.params
        console.log(data)
        const myComments = await commentModel.find({email: data.email}).sort({ _id: -1 });



        res.send({ success: true, myComments:myComments });


    },
    getMyTopics: async (req, res) => {
        const data = req.params
        console.log(data)
        const myTopics = await topicModel.find({email: data.email}).sort({ _id: -1 });



        res.send({ success: true, myTopics:myTopics });


    },
}