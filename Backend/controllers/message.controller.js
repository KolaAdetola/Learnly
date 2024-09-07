const sendMessage=async (req,res)=>{
    try {
		const {message}=req.body
        const {id}=req.params
        const senderId=req.user.id

	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}

module.exports=sendMessage