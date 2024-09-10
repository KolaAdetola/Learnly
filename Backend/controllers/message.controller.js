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

const getMessages=async (req,res)=>{
	try {
        const { id: userToChatId } = req.params;
		const senderId = req.user._id;

		// const conversation = await Conversation.findOne({
		// 	participants: { $all: [senderId, userToChatId] },
		// }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

		// if (!conversation) return res.status(200).json([]);

		// const messages = conversation.messages;

		// res.status(200).json(messages);
        
		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

		if(!conversation){
			return res.status(202).json([]);
		}

		const messages=conversation.messages
		.sort({ createdAt: -1 })
		.map((message) => message.toObject());

		res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}
module.exports=getMessages
module.exports=sendMessage