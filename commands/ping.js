module.exports = {
    name: 'ping',
    description: "this is a ping command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#5366AD")
        .setTitle('Server Rules')
        .setURL('https://open.spotify.com/user/allymarie7?si=4f1d7e823a09474e')
        //you can set author but nah
        .setDescription('THE server rules')
        .addFields(
            {name: 'Rule 1', value: '180 minutes of listening time each day'},
            {name: 'Rule 2', value: 'Hate Carti'},
            {name: 'Rule 3', value: 'Vibe'}
        )
        .setImage('https://cdn.theatlantic.com/thumbor/3Cvzu0nMPzuXmO3w_EdFKxANt_E=/0x110:4164x2452/1600x900/media/img/2015/09/BOB_Boxer_Peanuts_Opener_HP/original.jpg')
        .setFooter('poop');
        
        message.channel.send(newEmbed);
    }
}