module.exports = {
    name: 'apologize',
    description: "this is a apology command",
    execute(message, args) {
        message.channel.send('lo siento!');
    }
}