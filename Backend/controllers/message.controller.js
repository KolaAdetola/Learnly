const Conversation=require('../models/conversation.model')
const Message=require('../models/message.model')

const sendMessage=async (req,res)=>{
    try {
		const {message}=req.body
        const {id:receiverId}=req.params
        const senderId=req.user.id
		console.log(senderId)
		console.log(receiverId)

		let conversation =await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		})

		if(!conversation){
			conversation=await Conversation.create({
				participants: [senderId, receiverId] ,
			})
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		await newMessage.save();
		await conversation.save();

		res.status(201).json({newMessage, conversation});
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}

module.exports=sendMessage