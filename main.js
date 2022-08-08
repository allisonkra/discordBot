const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "!" //beginning of command

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')) ;

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('MAC is online!'); 
    //says bot is online in terminal
    //in terminal write "node main.js"
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return; //if the message begins with "!"

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == 'ping') {
        client.commands.get('ping').execute(message, args, Discord);
    }  else if (command == 'apartment') {
        client.commands.get('apartment').execute(message, args);
    } else if (command == 'michales') {
        client.commands.get('michales').execute(message, args);
    } else if (command == 'apologize') {
        client.commands.get('apologize').execute(message, args);
    } else if (command == 'staticpermissions') {
        client.commands.get('staticpermissions').execute(message, args);
    }

})

client.login('ODU5OTU1MDUxNDcxNTY4OTE3.YN0NjQ.5ZvFDbQ9SO9tVtT_dsGkAm-VhU8');
//turns on bot in disc 
//control c turns off bot in terminal