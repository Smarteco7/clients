const message = document.querySelector('.letters');
// const Message = require('../../model/message')
console.log('hello')

class MessageData {
    constructor(message, recieverId){
        this.recieverId = recieverId;
        this.message =message;
    }
}

message.addEventListener('submit', async(event)=>{
    event.preventDefault()

    const recieverId = document.getElementById('recieverId').value;
    const content = document.getElementById('messageInput').value;


    if (!recieverId || !content) {
        console.error('Receiver ID and message content are required');
        return;
    }
    // console.log(recieversId)


    try {

        
        const data = {
            recieverId, content
        }

    
        const response = await fetch('http://localhost:2000/message', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });
       console.log(response)

        if (!response.ok) {
            throw new Error(`error: ${response.status}`); 
        }
        console.log('message sent successfully')
    } catch (error) {
        console.error('Failed to send message:', error);
    }

})