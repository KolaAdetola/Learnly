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
		const now = new Date();
        now.setHours(now.getHours() + 1);
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

		if(!conversation){
			conversation=await Conversation.create({
				participants: [senderId, receiverId] ,
			})
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
			createdAt: formattedDateTime,
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

const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const messages = await Message.find({
            $or: [
                { senderId: senderId, receiverId: userToChatId },
                { senderId: userToChatId, receiverId: senderId }
            ]
        }).sort({ createdAt: -1 });

        if (!messages.length) {
            return res.status(202).json([]);
        }

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports=getMessages
module.exports=sendMessage