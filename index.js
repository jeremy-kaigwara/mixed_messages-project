let message = ['work extremely hard','be consistent','be disciplined','love what you do', 'high integrity','be excellent'];
function mixedMessage(){
    let messageIndex=0;
    messageIndex=Math.floor(Math.random()*(message.length));
    console.log(message[messageIndex])
};
mixedMessage();