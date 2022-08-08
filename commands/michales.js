module.exports = {
    name: 'michales',
    description: "this is a michales command",
    execute(message, args) {

        //let role = message.guild.roles.cache.find(r => r.name === "mod");
            //variable for role name

        //if (message.member.roles.cache.some(r => r.name === "mod")) { can use this as well to check name
        if (message.member.roles.cache.has('865833945039372319')) { //if member has correct role status
             //you check the id of the role because the role name can always change, but the id never changes
            message.channel.send('https://www.youtube.com/watch?v=d9818r3UTl0&list=RDd9818r3UTl0&start_radio=1');
            message.channel.send('gringo!');
            //message.member.roles.remove('865833945039372319');
                //takes member off of role
        } else {
            message.channel.send('Sorry gringo, you dont have permission to use this command, let me fix that :D');
            message.member.roles.add('865833945039372319').catch(console.error); //adds member to role they need
                // .catch logs error in terminal console
            //message.member.roles.add(role).catch(console.error);
                //this is where you can add "role" variable
        }
        //time stamp: 6:50
        // https://www.youtube.com/watch?v=5BArCspxauI&list=PLbbLC0BLaGjpyzN1rg-gK4dUqbn8eJQq4&index=4
    }
}