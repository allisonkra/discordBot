const { TeamMember } = require("discord.js");

module.exports = {
    name: 'staticpermissions',
    description: 'Gives static variable for permissions',
    execute(message, args) {

        //message.channel.send("https://discord.com/developers/docs/topics/permissions");

        
        if(message.member.permissions.has('BAN_MEMBERS')) {
            message.channel.send('you have permissions to ban members \n https://discord.com/developers/docs/topics/permissions');
        } else {
            message.channel.send('you suck');
        }
        
       
    } 

}