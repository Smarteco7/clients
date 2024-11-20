const Message = require("../model/message")

const sendMessage = async(req,res)=>{



    const {recieverId, content} = req.body;

    if (recieverId === "") {
        return res.status(400).json({error: 'invalid error'})
    }
    try {
        const newMessage = new Message({recieverId,content})
        const savedMessage = await newMessage.save();
        if (!savedMessage) {
            return res.status(404).json({message:'Message not saved'})
        }
        return res.status(201).json({message:'Saved message'})
    } catch (error) {
        console.error(error)
        return res.status(401).json({message:'interval server'})
    }
}

const getAllMessage = async (req,res) => {
    try {
        const messages = await Message.find()
        if (!messages) {
            return res.json({message:'No message found'})
        }
        return res.status(200).json(messages)
    } catch (error) {
        console.error(error)
        return res.status(400).json({message:'internal server error'})
    }    
}

const deleteMessage = async(req,res)=>{
    try {
        const {id} = req.params;

        const deletedMessage = new Message.findByIdAndDelete(id);
    
        if (!deletedMessage){
            return res.json({message:'Message not found '})
        }
        return res.status(200).json({message:'Message deleted sucessfully'})
    } catch (error) {
        console.error(error);
        return res.status(405).json({message:"internal server error"})
    }

}

module.exports={
    sendMessage,
    getAllMessage,
    deleteMessage
}