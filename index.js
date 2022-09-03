//=================[الاسيسيات]====================
// const fetch = require('node-fetch');
const express = require("express");
const app = express();
const ms = require('ms')
app.listen(() => console.log("Server started"));
const moment = require('moment')
app.use('/ping', (req, res) => {
  res.send(new Date());
});
const Discord = require('discord.js');
const client = new Discord.Client({
  autoReconnect: true,
	partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "MESSAGE", "USER", "GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]
});
const prefix = "!"
client.on("ready", () => {
  console.log(`ready ${client.user.tag}`)
})

setInterval(() => {
  import("node-fetch").then(async ({ default: fetch }) => await fetch("https://Tutorial-bot.a7mooz.repl.co"))
}, 1000 * 60 * 2)

const { MessageButton, MessageActionRow } = require('discord-buttons'); 
require('discord-buttons')(client);
let guild = '1003696006770208849'//ايدي سرفرك هنا
let logs = '1003696235485593710'//ايدي روم لوق التكتات
let category = '1003696007504199833'// ايدي غاتيغوري حق التكتات يعني الي تتسوئ فيه التكتات
let supportrole = process.env.supportrole
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.aliases = new Discord.Collection();
client.queue = new Map();

client.once('ready', () => {
  client.channels.cache.get(category).overwritePermissions([
        {
            id: client.guilds.cache.get(guild).roles.everyone,
            deny: ['VIEW_CHANNEL'],
        }
  ])
});


client.on('ready', () => {
var x = client.channels.cache.get('1003696006770208849');
    if (x) x.join();
});;

Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"



// // client.on('ready', () => {
// //   function abady() {
// //     let status = [` Server: ${client.guilds.cache.size}`,`Users: ${client.users.cache.size}`]
// //     let S = Math.floor(Math.random() * status.length);
// //     client.user.setActivity("ZeZo", { type: 'PLAYING' })
// //   };

  
//   //ismailmgde
//   setInterval(abady, 3000)
//   //ئەو کاتی دەتویت
// })  


//=================[help]====================

client.on('message', message => {
  if(message.content == prefix + 'help' || message.content == `${client.user}`) {
  const embed = new Discord.MessageEmbed()
  .setTitle("**Bot Commands Help**")
  // .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
  .setDescription(`<:PROcopy4:1015712062858592378> [Invite](https://discord.com/api/oauth2/authorize?client_id=991768905989230633&permissions=8&scope=boTo) | [Support](https://discord.gg/2czfYHSq) \n \n > <a:rr:1008761928585314425> \`${prefix}Public\` To show general commands .\n\n > <a:rr:1008761928585314425> \`${prefix}Admin\`To admin show commands \n\n > <a:rr:1008761928585314425> \`${prefix}Ticket\`  To show Ticket commands . \n\n > <a:rr:1008761928585314425>  \`${prefix}Music\` To show Music commands .`)
  .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
  .setImage("https://cdn.discordapp.com/attachments/1002007055806242907/1007395386287214633/Line.png")
  .setTimestamp()
  message.channel.send(embed)
  
  
  }
  });

//=================[Public Commands]====================

  client.on('message', message => {
    if(message.content == prefix + 'Public') {
    const embed = new Discord.MessageEmbed() 
    .setTitle("**🌐 Public Commands:**")
    // .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`<:PROcopy4:1015712062858592378> [Invite](https://discord.com/api/oauth2/authorize?client_id=991768905989230633&permissions=8&scope=bot) | [Support](https://discord.gg/2czfYHSq) \n \n \`${prefix}bot\` ~ info bot \n \`${prefix}user\` ~ info user \n \`${prefix}server\` ~ u server \n \`${prefix}avatar-server\` ~ Show Server Avatar. \n \`${prefix}invite\` ~ info invite \n \`${prefix}topinvites\` \n \`${prefix}info\` \n \`${prefix}profile\` ~ show profile \n \`${prefix}avatar\` ~ See someone's avatar \n \`${prefix}ping\` ~ to show ping bot \n \`${prefix}members\` ~ حالات الاعضاء`)
    .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    message.author.send(embed)
    message.react("🌐")
    message.reply(`تم الارسال الاوامر في الخاص 🥰`).then(messages =>
      messages.delete({ timeout: 5000 }));
    
    
    
    }
    });

//=================[Admin Commands]====================

    client.on('message', message => {
      if(message.content == prefix + 'Admin') {
      const embed = new Discord.MessageEmbed() 
      .setTitle("**⚒️ Admin Commands:**")
      // .setColor("RANDOM")
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`<:PROcopy4:1015712062858592378> [Invite](https://discord.com/api/oauth2/authorize?client_id=991768905989230633&permissions=8&scope=bot) | [Support](https://discord.gg/2czfYHSq) \n \n \`${prefix}ban\` ~ ban member.   | ناحو  ban member. \n \`${prefix}kick\` ~ to kick member. \n \`${prefix}show\` ~ Show channel. \n \`${prefix}show all\` ~ show all channel. \n \`${prefix}hide\` ~ Hide channel. \n \`${prefix}hide all\` ~ hide all channel. \n \`${prefix}mute\` ~ mute member |اكتم mute member. \n \`${prefix}unmute\` ~ unmute member. \n \`${prefix}lock\` ~ Lock Channel. \n \`${prefix}unlock\` ~ Unlock Channel | افتح  Unlock Channel. \n \`${prefix}clear\` ~ Clear a chat |اقفل  Clear a chat. \n \`${prefix}warn\` ~ warn member. \n \`${prefix}say\` ~ to bot say your text. \n \`${prefix}move\` ~ to move membre in voice channel. \n \`${prefix}vunmute\` ~ unmute voice member. \n \`${prefix}vmute\` ~ mute voice member. \n \`${prefix}vkick\` ~ kick voice member. \n \`${prefix}role\` ~ to give role member. \n \`${prefix}bc\` ~ to send broadcast. \n \`خط\` ~ to send line. \n \`${prefix}setname\` ~ To Change Name The Bot . \n \`${prefix}setavatar\` ~ To Change Avatar The Bot . `)
      .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      message.author.send(embed)
      message.react("⚒️")
      message.reply(`تم الارسال الاوامر في الخاص 🥰`).then(messages =>
        messages.delete({ timeout: 5000 }));
      
      
      
      }
      });

//=================[Ticket Commands]====================

      client.on('message', message => {
        if(message.content == prefix + 'Ticket') {
        const embed = new Discord.MessageEmbed() 
        .setTitle("**📩 Ticket Commands:**")
        // .setColor("RANDOM")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`<:PROcopy4:1015712062858592378> [Invite](https://discord.com/api/oauth2/authorize?client_id=991768905989230633&permissions=8&scope=bot) | [Support](https://discord.gg/2czfYHSq) \n \n \`${prefix}setup\` - إرسال رسالة لفتح التذاكر \n \`${prefix}add \` - يضيف عضوًا إلى تذكرة محددة. \n \`${prefix}remove\` - يزيل عضوًا إلى تذكرة محددة. \n \`${prefix}delete\` - حذف تذكرة معينة \n \`${prefix}close\` - لإغلاق التذكرة \n \`${prefix}open\` - لفتح تذكرة \n \`${prefix}rename\` - إعادة تسمية تذكرة معينة`)
        .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        message.author.send(embed)
        message.react("📩")
        message.reply(`تم الارسال الاوامر في الخاص 🥰`).then(messages =>
          messages.delete({ timeout: 5000 }));
        
        
        
        }
        });
  
//=================[Music Commands]====================

client.on('message', message => {
  if(message.content == prefix + 'Music') {
  const embed = new Discord.MessageEmbed() 
  .setTitle("**🎶 Music Commands:**")
  .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
  .setDescription(`<:PROcopy4:1015712062858592378> [Invite](https://discord.com/api/oauth2/authorize?client_id=991768905989230633&permissions=8&scope=bot) | [Support](https://discord.gg/2czfYHSq) \n \n \`${prefix}play | p\`To Play Song🎶 . \n \`${prefix}skip | s\` To Skip The Song . \n \`${prefix}stop | st \`To Stop The Song . \n \`${prefix}pause | pa\`To Pause The Song . \n \`${prefix}queue | q\`To Queue The Song . \n \`${prefix}resume | r \`To Resume The Song . \n \`${prefix}volume | vol \`To change The Volume .`)
  .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()
  message.author.send(embed)
  message.react("🎶")
  message.reply(`تم الارسال الاوامر في الخاص 🥰`).then(messages =>
    messages.delete({ timeout: 5000 }));
  
  
  
  }
  });

//=================[Members Commands]====================


client.on('message', message => {
if(message.content == prefix + 'members') {
const embed = new Discord.MessageEmbed()
.setDescription(`**حالات الاعضاء⚙️


:green_heart:  online  ${message.guild.members.cache.filter(m=>m.presence.status == 'online').size}


:heart:  dnd  ${message.guild.members.cache.filter(m=>m.presence.status == 'dnd').size}


:yellow_heart:  idle  ${message.guild.members.cache.filter(m=>m.presence.status == 'idle').size} 

  
:black_heart:  offline  ${message.guild.members.cache.filter(m=>m.presence.status == 'offline').size} 


:white_heart:  everyone  ${message.guild.memberCount}**`)
message.channel.send(embed)


}
});


//=================[Server Commands]====================


             //سرفير//
client.on(`message`, message => {
  if (message.content.startsWith(prefix + "server")) {
    if (!message.channel.guild) return message.channel.send('This is for servers only');

    const text = message.guild.channels.cache.filter(r => r.type === "text").size
    const voice = message.guild.channels.cache.filter(r => r.type === "voice").size
    const chs = message.guild.channels.cache.size
    const avaibles = message.guild.features.map(features => features.toString()).join("\n")

    const roles = message.guild.roles.cache.size


    const idle = message.guild.members.cache.filter(m =>
      m.presence.status === 'idle'
    ).size

    const offline = message.guild.members.cache.filter(m =>
      m.presence.status === 'offline'
    ).size

    const dnd = message.guild.members.cache.filter(m =>
      m.presence.status === 'dnd'
    ).size

    const black = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setColor('BLACK')
      .addFields({
        name: `🆔 Server ID`,
        value: `${message.guild.id}`,
        inline: true

      }, {

          name: `👑 Owned By`,
          value: `${message.guild.owner}`,
          inline: false

        }, {
          name: `👥 Members (${message.guild.memberCount})`,
          value: `**${message.guild.members.cache.filter(m => ['dnd', 'online', 'idle'].includes(m.presence.status)).size}** Online \n **${message.guild.premiumSubscriptionCount}** Boosts ✨`,
          inline: false
        }, {
          name: `💬 Channels (${chs})`,
          value: `**${text}** Text | **${voice}** Voice`,
          inline: false
        }, {
          name: `🌍 Others`,
          value: `**Region:** ${message.guild.region}\n**Verification Level:** ${message.guild.mfaLevel}`,
          inline: false
        }, {
          name: `🔐 Roles (${roles})`,
          value: `To see a list with all roles use ${prefix}roles`,
          inline: false
        })
      .setFooter('hageng Bot ', message.author.avatarURL())
    message.channel.send(black)
  }
})

//=================[Ping Commands]====================


client.on('message', message => {
  if (message.content === prefix + "ping") {
    let start = Date.now();
    message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.username, message.author.avatarURL({ dynamic: true })).addField("**Time Taken:**", `${Date.now() - start} ms 📶 | 🟡 Not Bad`, true).addField("**Websocket:**", `${client.ws.ping.toFixed(0)} ms 📶 | 🟢 Excellent`, true).setColor("#00e8ff").setFooter(`Request By ${message.author.tag}`).setTimestamp())
  }
})

//=================[Bot Commands]====================

             //بوت//
client.on('message', message => {
  if (message.content === prefix + 'bot') {
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle('Info Bot’s !')
      .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
      .addField('Bot Neme', `${client.user.tag}`)
      .addField('👑 Bot owner', `<@910482674915885077>`)
      .addField('Bot ping', `${client.ws.ping}ms`)
      .addField('Channels', `${client.channels.cache.size}`)
      .addField('Users', `${client.users.cache.size}`)
      .addField('Servers', client.guilds.cache.size)
      .setFooter(`Requested By ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)
  }
});

//=================[User Commands]====================

        // يوسر//
client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    var userr = message.mentions.users.first() || message.author;
    var memberr = message.mentions.members.first() || message.member;
    let userinfo = userr.displayAvatarURL({ size: 2048, dynamic: true });
    let embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(userr.username, userr.avatarURL({ dynamic: true }))
      .setThumbnail(userinfo)
      .addField(`Joind Discord :`, `\`${moment(userr.createdAt).format('YYYY/M/D')} ${moment(userr.createdAt).format('LTS')}\`\n**${moment(userr.createdAt, "YYYYMMDD").fromNow()}**`, true)
      .addField(`Joined Server :`, `\`${moment(memberr.joinedAt).format('YYYY/M/D')} ${moment(memberr.joinedAt).format('LTS')}\`\n**${moment(memberr.joinedAt, "YYYYMMDD").fromNow()}**`, true)
      .setFooter(userr.tag, userr.avatarURL({ dynamic: true }))
    message.channel.send(embed)
  }
})

//=================[Avatar Commands]====================

client.on('message', message => {
  if (message.content.startsWith(prefix + 'avatar')) {
    let args = message.content.substring(prefix.length).split(" ");
    const user = message.mentions.users.first()
    if (!user && !args[1]) {
      const uavatar = message.author.avatarURL({ size: 4096, dynamic: true })
      const embed3 = new Discord.MessageEmbed()
        .setTitle(`${message.member.user.username}`)
        .setDescription(`[**Avatar Link**](${uavatar})`)
        // .setColor('RANDOM')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setImage(uavatar)
      message.channel.send(embed3)
    }
    if (args[1] === 'server') {
      const savatar = message.guild.iconURL({ size: 4096, dynamic: true })
      const embed2 = new Discord.MessageEmbed()
        .setTitle(`${message.guild.name} avatar`)
        .setDescription(`[**Avatar Link**](${savatar})`)
        // .setColor('RANDOM')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setImage(savatar)
      message.channel.send(embed2)
    }
    if (user) {
      const avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
      const embed = new Discord.MessageEmbed()
        .setTitle(`${user.username} avatar`)
        .setDescription(`[**Avatar Link**](${avatar})`)
        // .setColor('RANDOM')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setImage(avatar)
      message.channel.send(embed)
    }
  }
})

//=================[Clear Commands]====================

            //كلير//
client.on("message", async message => {
  let command = message.content.toLowerCase().split(" ")[0];
  if (command == `${prefix}clear` || command == `${prefix}مسح`) {
    message.delete({ timeout: 0 })
    if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms :x:**`);
    if (!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms :x:**`);

    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.channel.send(`\`\`\`javascript
i cant delete more than 100 messages 
\`\`\``).then(messages => messages.delete(5000))
    if (!messagecount) messagecount = '100';
    message.channel.messages.fetch({ limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
      message.channel.send(`\`\`\`js
${msgs.size} عدد الرسائل التي تم مسحها
\`\`\``).then(messages =>
        messages.delete({ timeout: 3000 }));
    })
  }
});

//=================[Invites Commands]====================

client.on('message', msg => {
  if (msg.content.split(' ')[0].toLowerCase() == prefix + 'invites' || msg.content.split(' ')[0].toLowerCase() == prefix + 'inv') {
    let guild = msg.guild
    var codes = [""]
    var nul = 0

    guild.fetchInvites()
      .then(invites => {
        invites.forEach(invite => {
          if (invite.inviter === msg.author) {
            nul += invite.uses
            codes.push(`discord.gg/${invite.code}`)
          }

        })
        if (nul > 0) {
          const e = new Discord.MessageEmbed()
            .addField(`${msg.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
            .setColor('#36393e')
          msg.channel.send(e)
        } else {
          var embed = new Discord.MessageEmbed()
            .setColor("#000000")
            .addField(`${msg.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

          msg.channel.send({ embed: embed });
          return;
        }
      })
  }
})

//=================[Profile Commands]====================

client.on('message', message => {
  if (message.content.startsWith(prefix + "profile")) {
    var args = message.content.split(" ").slice(1);
    var men = message.mentions.users.first();
    let user = message.mentions.users.first() || message.author;
    message.guild.fetchInvites().then(invites => {
      let personalInvites = invites.filter(
        i => i.inviter.id === message.mentions.users.first() || message.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var he;
      if (men) {
        he = men
      } else {
        he = message.author
      }
      var mon = message.mentions.members.first();
      var h;
      if (mon) {
        h = mon
      } else {
        h = message.member
      }
      var baderp = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setDescription('profile')//الكلام الي فوق الصوره لو حاب تحذفه عادي
        .setImage(`https://api.probot.io/profile/${user.id}`)
      message.channel.send(baderp)
    });
  }
});

//=================[Ban Commands]====================

client.on('message', message => {
  if(message.content.includes(prefix + 'ban') || message.content.includes( 'ناحو')) {
   if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('I Dont Have Premission BAN_MEMBERS ')
    if(!message.member.hasPermission('BAN_MEMBERS'))return message.reply('You Dont Have Premission BAN_MEMBERS ')
     var  reason = message.content.split(" ").slice(2).join(" ")
      var user = message.mentions.users.first()
       var time = message.content.split(" ").slice(3).join(" ")
        if(!user) return message.channel.send("**Mention A Member **")
          if(message.guild.member(user).roles.highest.position >= message.member.roles.highest.position && message.guild.ownerID !== message.author.id) return message.channel.send(` **You can't give Roles higher than your role**`);
           message.guild.member(user).ban()
          message.channel.send(`**✅ ${user} Banned From Server **`)
                }
                 }); 


//=================[Kick Commands]====================

client.on('message', msg => {
  if (!msg.guild) return;
  if (msg.content.startsWith(prefix + 'kick') || msg.content.startsWith(prefix + 'طرد')) {
    if (!msg.guild.member(msg.author).hasPermission("KICK_MEMBERS"))
      return msg.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!msg.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return msg.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    const user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {


            const embed = new Discord.MessageEmbed()
              .setColor("00e8ff")
              .setTitle(`Successfully kicked ${user.tag}`)
            msg.channel.send(embed);

          })
          .catch(err => {

            ncr.reply(`🙄 - I couldn't kick that user. Please check my permissions and role position.`);

            console.error(err);
          });
      } else {

        msg.reply("**🙄 - I can't find this member**");
      }

    } else {

      const embed = new Discord.MessageEmbed()
        .setColor("00e8ff")
        .setTitle(`**Command: kick**`)
        .setDescription(
          `Kicks a member.
 
**Usage:**
#kick (user) (reason)
 
**Examples:**
#kick ${msg.author}`)

      msg.channel.send(embed);
    }
  }
});

//=================[Mute Commands]====================

client.on("message", (message) => {
  if (message.content.toLowerCase().startsWith(prefix + "mute")|| message.content.includes( 'اكتم')) {
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(
      new Discord.MessageEmbed().setColor("RED")
        .setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**")
        .setFooter(`Request By ${message.author.tag}`).setTimestamp()
    )
    if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(
      new Discord.MessageEmbed().setColor("RED")
        .setDescription("❌" + " **I Can't Mute Any Member In This Server Becuse I Don't Have `MANAGE_ROLES` Permission!**")
        .setFooter(`Request By ${message.author.tag}`).setTimestamp()
    )
    let member = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1])
    var user = message.guild.member(member)
    if (!user) return message.channel.send(
      new Discord.MessageEmbed().setColor("RED")
        .setDescription("❌" + " **Please Mention/ID Same One!**")
        .setFooter(`Request By ${message.author.tag}`).setTimestamp()
    )
    if (user.id === message.author.id) return message.reply(
      new Discord.MessageEmbed().setColor("YELLOW")
        .setDescription("⚠" + " **WTF Are You Doing ??**")
        .setFooter(`Request By ${message.author.tag}`).setTimestamp()
    )
    if (user.id === client.user.id) return message.channel.send(
      new Discord.MessageEmbed().setColor("YELLOW")
        .setDescription("⚠" + " **WTF Are You Doing ??**")
        .setFooter(`Request By ${message.author.tag}`).setTimestamp()
    )
    if (!message.guild.member(user).bannable) return message.reply(
      new Discord.MessageEmbed().setColor("RED")
        .setDescription("❌" + " **Soory I Can't Mute Same One High Than Me >_<**")
        .setFooter(`Request By ${message.author.tag}`).setTimestamp()
    )
    let muteRole = message.guild.roles.cache.find(n => n.name === 'Muted')
    if (!muteRole) {
      message.guild.roles.create({
        data: {
          name: "Muted",
        }
      }).then(async (role) => {
        await message.guild.channels.cache.forEach(channel => {
          channel.overwritePermissions([{
            id: role.id,
            deny: ["SEND_MESSAGES"]
          }]);
        })
      })
    }
    user.roles.add(muteRole)
    var time = message.content.split(' ')[2]
    if (!time) time = '24h'
    message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription("✅" + ` **${user} Has Ben Muted By <@!${message.author.id}>, For a ${ms(ms(time))}**`).setFooter(`Request By ${message.author.tag}`).setTimestamp())
    setTimeout(() => {
      user.roles.remove(muteRole);
    }, ms(time));
    return;
  }
})
client.on('message', msg => {
  const error = "❌";
  const timeing = "⏱";
  const success = "✅";
  const lodeing = "🤔";
  let args = msg.content.split(" ");
  if (args[0] === prefix + 'unmute') {
    if (msg.author.bot) return;
    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    if (!msg.member.hasPermission('MANAGE_ROLES')) return msg.channel.send(new Discord.MessageEmbed().setDescription(error + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    if (!msg.guild.me.hasPermission('MANAGE_ROLES')) return msg.channel.send(new Discord.MessageEmbed().setDescription(error + " **I Can't Kick Any Member In This Server Becuse I Don't Have `MANAGE_ROLES` Permission!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    let user = msg.mentions.members.first()
    if (!user) return msg.channel.send(new Discord.MessageEmbed().setDescription(error + " **Please Mention Same One!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    if (user.id === msg.author.id) return msg.reply(new Discord.MessageEmbed().setDescription(lodeing + " **WTF Are You Doing ??**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    if (!msg.guild.member(user).bannable) return msg.reply(new Discord.MessageEmbed().setDescription(error + " **I Can't Unmute one high than me >_<**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    var muteRole = msg.guild.roles.cache.find(n => n.name === 'Muted')
    if (!muteRole) return msg.channel.send(new Discord.MessageEmbed().setDescription(lodeing + ` **WTF Is That ?? [ Super Error ]**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    user.roles.remove(muteRole)
    msg.channel.send(lodeing + " **Processing The Unmute Function**").then((m) => {
      m.edit(success + " **Processing is complete**")
    })
    msg.channel.send(new Discord.MessageEmbed().setDescription(success + ` **${user} Has Ben Unmuted By <@!${msg.author.id}>**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
  }
})

//=================[Lock Commands]====================

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'lock')|| message.content.includes( 'اقفل')) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MANAGE_CHANNELS\`**`);
    let channel = message.mentions.channels.first();
    let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
    if (!channel) channel_find = message.channel
    if (!channel_find) return;
    channel_find.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(`🔒 | Done Locked ${channel_find.name}`)
    );
  }
});

//=================[Unlock Commands]====================

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'unlock')|| message.content.includes( 'افتح')) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MANAGE_CHANNELS\`**`);
    let channel = message.mentions.channels.first();
    let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
    if (!channel) channel_find = message.channel;
    if (!channel_find) return;
    channel_find.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: true
    });
    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(`🔓 | Done Unlocked ${channel_find.name}`)
    );
  }
});
                
//=================[Warn Commands]====================

client.on('message', message => {

  if (message.content.startsWith(prefix + "warn")) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`You Don't have the permission `);
    let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.MessageEmbed()
      .setColor('#0083ff')
      .setTimestamp();

    if (!user) {
      embed.addField("**منشن الشخص** ", ` ${message.author.tag}?`)
        .setTimestamp();
      return message.channel.send(embed);
    } if (!reason) {
      return message.channel.send(embed);
    }
    embed.addField("**تم ارسال الانذار** ", ` ${user.tag}!`)
      .setTimestamp();
    message.channel.send(embed);
    const embed1 = new Discord.MessageEmbed()
      .setColor('#0083ff')
      .setTimestamp()
      .addField("لقد اخذت انذار", `
 
          السبب : **${reason}**`)
      .setFooter(`
        انذار بواسطة ${message.author.tag}.`);
    user.send(embed1);
    message.delete();
  }
});

//=================[Hide Commands]====================

client.on('message', message => {
  if (message.content === prefix + "hide" || message.content === prefix + "اخفاء") {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.createOverwrite(everyone, {
      VIEW_CHANNEL: false
    }).then(() => {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.guild.iconURL())
        .setDescription(`> **Done Hide This Room ${message.channel}**`)
        .setFooter(`By ${message.author.username}`)
      message.channel.send(embed)
    })
  }
});

//=================[Show Commands]====================

client.on('message', message => {
  if (message.content === prefix + "show") {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.createOverwrite(everyone, {
      VIEW_CHANNEL: true
    }).then(() => {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.guild.iconURL())
        .setDescription(`> **Done Show This Room ${message.channel}**`)

        .setFooter(`By ${message.author.username}`)
      message.channel.send(embed)
    })
  }
});

//=================[Hide All Commands]====================

client.on('message', message =>{
    if(message.content === prefix +"hide all"){
    if(message.author.bot || !message.guild) return;
    if(!message.member.hasPermission('MANAGE_CHANNELS')) 
    return message.reply(`**ليس لديك الصلاحية ! 🙄 **`);
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.createOverwrite(everyone, {VIEW_CHANNEL: false}).then(() => {
    message.channel.send(`\n 📢 | تم اخفاء ${channel} \n`)
      });
    })
    }
});

//=================[Show All Commands]====================

client.on('message', message =>{
    if(message.content === prefix +"show all"){
    if(message.author.bot || !message.guild) return;
    if(!message.member.hasPermission('MANAGE_CHANNELS')) 
    return message.reply(`**ليس لديك الصلاحية ! 🙄 **`);
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.createOverwrite(everyone, {VIEW_CHANNEL: true}).then(() => {
    message.channel.send(`\n 📢 | تم اظهار ${channel} \n`)
      });
    })
    }
});

//=================[SUG & FEEDBACK]====================

client.on('message', message => {
    const channel = message.channel;

    if (channel.id !== '1015724916257079396') return;
    if (message.member.user.bot) return;

    message.react("❤️") // الريائكشن الي تبيه
    message.channel.send("https://cdn.discordapp.com/attachments/1015711043051339816/1015723564600664064/RainbowLine.gif")
})

client.on('message', message => {
    const channel = message.channel;

    if (channel.id !== '1015724883294040064') return;
    if (message.member.user.bot) return;

    message.react("👍") 

    message.react("👎") 

    message.channel.send('https://cdn.discordapp.com/attachments/1015711043051339816/1015723564600664064/RainbowLine.gif')
})

//=================[Role Commands]====================

client.on('message',async message=>{
    const args = message.content.slice(0).trim().split(/ +/);
    if(args[0] != "role") return
    if (!args[1]) return message.reply("**you must mention a member!!**")
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return message.reply(`i can't find this user **${args[0]}**`)
    if (!args[2]) return message.reply("**you must mention a role!!**")
    let rolementions = message.content.split(' ').slice(2).join(' ')
    console.log(rolementions)
    let role = message.guild.roles.cache.find(ro => ro.id === rolementions)  || message.mentions.roles.first() || message.guild.roles.cache.find(ro => ro.name.toLowerCase().includes(rolementions.toLowerCase()))
    if (!role) return message.reply(`I can't fine this role **${rolementions}**`)
    
    if(message.member.roles.highest.comparePositionTo(role) < 1 && message.author.id != message.guild.ownerID) return message.reply("**this role is higher than you**")
    if (!member.roles.cache.some(ro => ro.id === role.id))
    {
      member.roles.add(role);
      message.channel.send(`**added role __${role.name}__ to** ${member}`)
    }
    else
    {
      member.roles.remove(role);
      message.channel.send(`**removed role __${role.name}__ from** ${member}`)
    }
});

//=================[All Bans Commands]====================

client.on('message', message => {
  if (message.content.startsWith(prefix + "all bans")) {
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`:small_orange_diamond: **Server Ban List :** ${bans.size} `))
      .catch(console.error);
  }
});

//=================[Avatar Server Commands]====================

client.on("message", msg => {
  if (msg.content === prefix + "avatar-server") {
    let embed = new Discord.MessageEmbed()
      .setImage(msg.guild.iconURL());
    msg.channel.send(embed);
  }
});

//=================[UpTime Commands]====================

client.on('message', msg => {
  if (msg.content === prefix + "uptime") {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    const up = new Discord.MessageEmbed()
      .setColor("#44ff00")
      .setThumbnail(client.user.avatarURL())
      .setTitle("**__Uptime :__**")
      .setAuthor(client.user.username, client.user.avatarURL())
      .addField('**-**', `**${seconds}**` + ' **seconds**')
      .addField('**-**', `**${minutes}**` + ' **minutes**')
      .addField('**-**', `**${hours}**` + ' **hours**')
      .addField('**-**', `**${days}**` + ' **days**')
    msg.channel.send(up)
  }
});

//=================[Guilds Commands]====================

client.on('message', function(message) {
  if (message.content.startsWith(prefix + "guilds")) {
    message.delete();
    message.channel.send(` All Members : \`\`${client.guilds.cache.size}\`\` `);
  }
});


//=================[Top Invites Commands]====================

client.on('message', message => {
  if (message.content.startsWith(prefix + 'topinvites')) {

    message.guild.fetchInvites().then(i => {
      var invites = [];

      i.forEach(inv => {
        var [invs, i] = [{}, null];

        if (inv.maxUses) {
          invs[inv.code] = + inv.uses + "/" + inv.maxUses;
        } else {
          invs[inv.code] = + inv.uses;
        }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);

      });
      var embed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setDescription(`${invites.join(`\n`) + '\n\n**By:** ' + message.author}`)
      message.channel.send({ embed: embed });

    });

  }
});

//=================[Info Commands]====================

client.on('message', message => {
  if (message.content === prefix + 'info') {
    let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
    let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
    let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
    let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL() : message.author.avatarURL();

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.cache.get(message.guild.id).members.cache.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce((p, v) => v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p, `\nServidor: ${message.guild.name} \n `);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [['Total de membros recrutados:']];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

      var inviteInfo = new Discord.MessageEmbed()
        .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
        .setThumbnail(client.user.avatarURL())
        .addField('**الدعوات**', `** ↝** [ شخص **${Number(inviteCount)}** ]`)
        .addField('**تم الانضمام للسيرفر من**', `** ↝** [ يوم **${daysJoined.toFixed(0)}** ]`)
        .addField('**رابط دعوة الانضمام**', `** ↝** [ **${inviteCode || 'HWJc4qp4'}** ]`)
        .setColor('#36393e')
        .setTimestamp()
        .setFooter(Tag, Avatar)

      message.channel.send(inviteInfo);
    })



  };
});

//=================[Bc Commands]====================

client.on('message', async message => {
  if (message.channel.type === 'dm') return;
  if (message.author.bot) return;
  let args = message.content.split(' ');
  if (args[0] === `bc`) {
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if (!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');

    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    let status;
    if (msgCount === message.guild.memberCount) {
      status = 'Sent';
    } else if (msgCount !== message.guild.memberCount) {
      status = 'Sending';
    }
    message.channel.send(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسلة**`).then(msg => {
      message.guild.members.cache.forEach(g => {
        g.send(args.slice(1).join(' ')).then(() => {
          successCount++;
          msgCount++;
          if (!msg) return;
          msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          if (!msg) return;
          msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
        });
      });
    });
  }
});

// //=================[role]====================

// client.on("message", message => {
//   let cmd = message.content.toLowerCase().split(" ")[0];
//   cmd = cmd.slice(prefix.length);
//   if (cmd === "role") {
//     if (!message.channel.guild || message.author.bot) return;
//     let args = message.content.split(" ");
//     let user = message.guild.member(
//       message.mentions.users.first() || message.guild.members.cache.get(args[1])
//     );
//     var role = message.content.split(" ").slice(2).join(" ").toLowerCase();
//     var role1 = message.guild.roles.cache.filter(r => r.name.toLowerCase().indexOf(role) > -1).first();
//     if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
//       return message.channel.send(`I Need Permissions !!`);
//     if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
//       return;
//     if (!user) return message.channel.send(`**>>> ${prefix}role <@mention or iD> role**`);
//     if (!role) return message.channel.send(`**>>> ${prefix}role <@mention or iD> role**`);
//     if (!role1) return message.channel.send(`**>>> ${prefix}role <@mention or iD> role**`);
//     if (user.roles.cache.find(c => c.id === role1.id))
//       return user.roles.remove(role1).then(() => {
//         message.channel.send(`**>>> Role \`${role1.name}\` removed to ${user.user}**`);
//       }).catch(err => message.channel.send("Error: **" + err.message + "**"));
//     user.roles.add(role1).then(() => {
//       message.channel.send(
//         `**>>> Role \`${role1.name}\` added to ${user.user}**`
//       );
//     })
//       .catch(err => message.channel.send("Error: **" + err.message + "**"));
//   }
// });

//=================[Vkick Commands]====================

client.on("message", async message => {
  if (message.content.startsWith(prefix + "vkick")) {
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check Your Permission");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check My Permission");
    if (!message.member.voice.channel)
      return message.channel.send("Your are not in voice channel");
    if (!user) return message.channel.send(`**>>> ${prefix}vkick <@mention or id>**`);
    if (!message.guild.member(user).voice.channel)
      return message.channel.send(
        `**${user.user.username}** Has not in Voice channel`
      );
    await user.voice.kick();
    message.channel.send(
      `**${user.user.username}** has been kicked from **Voice Channel**`
    );
  }
});

//=================[Vmute Commands]====================

client.on("message", message => {
  if (message.content.startsWith(prefix + "vmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission!");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission!");
    let user = message.mentions.users.first();
    if (!user) return message.channel.send(`**>>> ${prefix}vmute <@mention or id>**`);
    if (!message.guild.member(user).voice.channel)
      return message.channel.send(
        `**${user.user.username}** this user has not in voice channel`
      );
    message.guild.member(user).voice.setMute(true);
    return message.channel.send(
      "@" + user.username + " Has Been Voice Muted! "
    );
  }
});

//=================[Vunmute Commands]====================

client.on("message", message => {
  if (message.content.startsWith(prefix + "vunmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission!");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission!");
    let user = message.mentions.users.first();
    if (!user) return message.channel.send(`**>>> ${prefix}vunmute <@mention or id>**`);
    if (!message.guild.member(user).voice.channel)
      return message.channel.send(
        `**${user.user.username}** this user has not in voice channel`
      );
    message.guild.member(user).voice.setMute(false);
    return message.channel.send(
      "@" + user.username + " Has Been Voice Muted! "
    );
  }
});


//=================[خط]====================

client.on("message", message => {
  if (message.content === "خط" || message.content === "line") {
    if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
    return message.channel.send("Please Check Your Permission!");
  if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
    return message.channel.send("Please Check My Permission!");

    message.delete();
    message.channel.send("https://cdn.discordapp.com/attachments/1015711043051339816/1015723564600664064/RainbowLine.gif");
  }
});

//=================[Move Commands]====================

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("``Use : " + prefix + "move @User``");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(
              `✅ You Have Moved <@${usermentioned}> To Your Channel `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name} `)
            .setColor("RANDOM")
            .setTitle(`✽ **Premium**`)

            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "`You Cant Move" +
              message.mentions.members.first() +
              " `The User Should Be In channel To Move It`"
          );
        }
      } else {
        message.channel.send(
          "**``You Should Be In Room Voice To Move SomeOne``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});



//=================[Say Commands]====================

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**ADMINISTRATOR ليس لديك صلاحيات :rolling_eyes:**"
      );

    message.channel.send(args.join("  "));
    message.delete();
  }
});

//=================[Ticket Tool]====================

require('discord-reply');
const Dataa = require('st.db');
const db = new Dataa(`/Datas/tickets.json`);
const countsdb = new Dataa(`/Datas/tickets-counts.json`);
const ticketschannelsdb = new Dataa(`/Datas/tickets-channels.json`);
const randomstring = require("randomstring");
const disbut = require('discord-buttons');
const ZoZ = require(`./ZoZ.json`)

async function channelLog(embed) {
  if (!ZoZ.log_channel_id) return;
  let ch = await client.channels.cache.get(ZoZ.log_channel_id)
  if (!ch) return console.log(`ﻪﻨﻣ ﺪﻛﺄﺗ ﺀﺎﺟﺮﺑ ﺕﻼﺠﺳ ﻡﻭﺮﻟﺍ ﻱﺪﻳﺍ ﺓﺀﺍﺮﻗ ﻲﻓ ﺄﻄﺧ ﻞﺼﺣ`)
  ch.send(embed)
}


// client.on('ready', async () => {
//   client.on('message', async (message) => {
//     let tickets = db.all()
//     if (message.author.bot) return;
//     tickets.forEach(async body => {
//       let channel = await client.channels.cache.get(body.data.channelID)
//       if (!channel) return;
//       let msg = await channel.messages.fetch(body.data.msgID)
//       if (!msg) return;
//       let new_id = randomstring.generate({ length: 20 })
//       let button = new disbut.MessageButton()
//         .setStyle(`gray`)
//         .setEmoji(`📩`)
//         .setLabel(`Create ticket`)
//         .setID(body.data.id)
//       let embed = new Discord.MessageEmbed()
//         .setTitle(body.data.reason)
//         .setDescription("To create a ticket react with 📩")
//         .setTimestamp()
//         .setColor(0x5865F2)
//         .setFooter(message.guild.name, message.guild.iconURL())
//       try {
//         msg.edit({ embed: embed, component: button })
//       } catch{

//       }
//     })
//   })
// })



client.on('message', async (message) => {
  if (message.author.bot) return;
  let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `ghhrhhyh`) {
    let embed = new Discord.MessageEmbed()
      .setTitle(`قائمة أوامر البوت`)
      .setDescription(``)
      .setTimestamp()
      .setColor(0x5865F2)
      .setFooter(`All rights belong to https://www.shuruhatik.xyz`)
    message.lineReply({ embed: embed })
  }//All Copy Right Reserved For: Shuruhatik  in YT
  if (command == prefix + `add` || command == prefix + 'دخول') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.lineReply(`:x: This command requires \`MANAGE_MESSAGES\` permission.`);
    let args = message.content.split(' ').slice(1).join(' ');
    let channel = message.mentions.channels.first() || message.channel;
    if (await ticketschannelsdb.has(`ticket_${channel.id}`) == true) {
      let member = message.mentions.members.first() || message.guild.members.cache.get(args || message.guild.members.cache.find(x => x.user.username === args || x.user.username === args));
      if (!member) return message.lineReply(`الرجاء تحديد الشخص الذي تريد إضافته بشكل صحيح`);
      try {
        channel.updateOverwrite(member.user, {
          VIEW_CHANNEL: true,
          SEND_MESSAGES: true,
          ATTACH_FILES: true,
          READ_MESSAGE_HISTORY: true,
        }).then(() => {
          message.lineReply({ embed: { description: `أضيف بنجاح ${member} إلي ${channel}`, color: 0x5865F2 } });
          let log_embed = new Discord.MessageEmbed()
            .setTitle(`تمت إضافة شخص إلى تذكرة`)
            .addField(`التذكرة`, `<#${channel.id}>`)
            .addField(`شخص مضاف`, member.user)
            .addField(`الاجراء بواسطة`, `<@!${message.author.id}>`)
            .setTimestamp()
            .setColor(`GREEN`)
            .setFooter(message.guild.name, message.guild.iconURL())
          channelLog(log_embed)
        });
      }
      catch (e) {
        return message.channel.send('حدث خطأ ، يرجى المحاولة مرة أخرى!');
      }
    }
  }//All Copy Right Reserved For: Shuruhatik  in YT
  if (command == prefix + `remove` || command == prefix + 'خروج') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.lineReply(`:x: This command requires \`MANAGE_MESSAGES\` permission.`);
    let args = message.content.split(' ').slice(1).join(' ');
    let channel = message.mentions.channels.first() || message.channel;
    if (await ticketschannelsdb.has(`ticket_${channel.id}`) == true) {
      let member = message.mentions.members.first() || message.guild.members.cache.get(args || message.guild.members.cache.find(x => x.user.username === args || x.user.username === args));
      if (!member) return message.lineReply(`الرجاء تحديد الشخص الذي تريد إضافته بشكل صحيح`);
      try {
        channel.updateOverwrite(member.user, {
          VIEW_CHANNEL: false,
        }).then(() => {
           let log_embed = new Discord.MessageEmbed()
            .setTitle(`تمت إزلة شخص إلى تذكرة`)
            .addField(`التذكرة`, `<#${channel.id}>`)
            .addField(`شخص مضاف`, member.user)
            .addField(`الاجراء بواسطة`, `<@!${message.author.id}>`)
            .setTimestamp()
            .setColor(`RED`)
            .setFooter(message.guild.name, message.guild.iconURL())
          channelLog(log_embed)
          message.lineReply({ embed: { description: `أنحذف بنجاح ${member} من ${channel}`, color: 0x5865F2 } });
        });
      }
      catch (e) {
        return message.channel.send('حدث خطأ ، يرجى المحاولة مرة أخرى!');
      }
    }
  }//All Copy Right Reserved For: Shuruhatik  in YT
  if (command == prefix + 'delete' || command == prefix + 'مسح') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.lineReply(`:x: This command requires \`MANAGE_MESSAGES\` permission.`);
    let channel = message.mentions.channels.first() || message.channel;
    if (await ticketschannelsdb.has(`ticket_${channel.id}`) == true) {
      message.lineReply({ embed: { description: `يتم تنفيذ طلبك بعد 5 ثانية ، وسيتم إغلاقه`, color: 0x5865F2 } })
      setTimeout(async () => {
        let log_embed = new Discord.MessageEmbed()
            .setTitle(`تم حذف تذكرة`)
            .addField(`رقم التذكرة`, `${await ticketschannelsdb.get(`ticket_${channel.id}`).count}`)
            .addField(`التذكرة بواسطة`,`<@!${await ticketschannelsdb.get(`ticket_${channel.id}`).ticket_by}>`)
            .addField(`الاجراء بواسطة`, `<@!${message.author.id}>`)
            .setTimestamp()
            .setColor(`RED`)
            .setFooter(message.guild.name, message.guild.iconURL())
          channelLog(log_embed)
          channel.delete()
      }, 5000)
    }
  }//All Copy Right Reserved For: Shuruhatik  in YT
  if (command == prefix + 'close' || command == prefix + 'قفل') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.lineReply(`:x: This command requires \`MANAGE_MESSAGES\` permission.`);
    let channel = message.mentions.channels.first() || message.channel;
    if (await ticketschannelsdb.has(`ticket_${channel.id}`) == true) {
      let msg = await message.lineReply({ embed: { description: `يتم تنفيذ طلبك بعد 5 ثانية ، وسيتم إغلاقه`, color: 0x5865F2 } })
      setTimeout(async () => {
        try {
          msg.delete()
          channel.send({ embed: { description: `تم إغلاق التذكرة من قبل <@!${message.author.id}>`, color: `YELLOW` } })
          let type = 'member'
          await Promise.all(channel.permissionOverwrites.filter(o => o.type === type).map(o => o.delete()));
          channel.setName(`closed-${await ticketschannelsdb.get(`ticket_${channel.id}`).count}`)
          let log_embed = new Discord.MessageEmbed()
            .setTitle(`تم إغلاق تذكرة`)
            .addField(`التذكرة`, `<#${channel.id}>`)
            .addField(`الاجراء بواسطة`, `<@!${message.author.id}>`)
            .setTimestamp()
            .setColor(`YELLOW`)
            .setFooter(message.guild.name, message.guild.iconURL())
          channelLog(log_embed)
        } catch {

        }
      }, 1000)
    }
  }//All Copy Right Reserved For: Shuruhatik  in YT
  if (command == prefix + 'open' || command == prefix + 'فتح') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.lineReply(`:x: This command requires \`MANAGE_MESSAGES\` permission.`);
    let channel = message.mentions.channels.first() || message.channel;
    if (await ticketschannelsdb.has(`ticket_${channel.id}`) == true) {
      let msg = await message.lineReply({ embed: { description: `يتم تنفيذ طلبك بعد 5 ثانية`, color: 0x5865F2 } })
      setTimeout(async () => {
        try {
          msg.delete()
          channel.send({ embed: { description: `تم فتح التذكرة من قبل <@!${message.author.id}>`, color: `GREEN` } })
          let meember = client.users.cache.get(await ticketschannelsdb.get(`ticket_${channel.id}`).ticket_by);
          channel.updateOverwrite(meember, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            ATTACH_FILES: true,
            READ_MESSAGE_HISTORY: true,
          })
          channel.updateOverwrite(ZoZ.support_1, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            ATTACH_FILES: true,
            READ_MESSAGE_HISTORY: true,
          })
          channel.updateOverwrite(ZoZ.support_2, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            ATTACH_FILES: true,
            READ_MESSAGE_HISTORY: true,
          })
          channel.setName(`ticket-${await ticketschannelsdb.get(`ticket_${channel.id}`).count}`)
          let log_embed = new Discord.MessageEmbed()
            .setTitle(`تم إعادة فتح تذكرة`)
            .addField(`التذكرة`, `<#${channel.id}>`)
            .addField(`الاجراء بواسطة`, `<@!${message.author.id}>`)
            .setTimestamp()
            .setColor(`GREEN`)
            .setFooter(message.guild.name, message.guild.iconURL())
          channelLog(log_embed)
        } catch {

        }
      }, 1000)
    }
  }//All Copy Right Reserved For: Shuruhatik  in YT
  if (command == prefix + 'rename' || command == prefix + 'setname') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.lineReply(`:x: This command requires \`MANAGE_MESSAGES\` permission.`);
    let channel = message.mentions.channels.first() || message.channel;
    if (await ticketschannelsdb.has(`ticket_${channel.id}`) == true) {
      let args = message.content.split(' ').slice(1).join(' ');
      if (!args) return message.lineReply({ embed: { description: `الرجاء تحديد الاسم الذي تريده للتذكرة`, color: 0x5865F2 } })
      channel.setName(args)
      message.delete()
      let log_embed = new Discord.MessageEmbed()
        .setTitle(`تغير اسم تذكرة`)
        .addField(`الاسم الجديد`, args)
        .addField(`التذكرة`, `<#${channel.id}>`)
        .addField(`بواسطة`, `<@!${message.author.id}>`)
        .setTimestamp()
        .setColor(0x5865F2)
        .setFooter(message.guild.name, message.guild.iconURL())
      channelLog(log_embed)
    }
  }//All Copy Right Reserved For: Shuruhatik  in YT
  if (command == prefix + 'send' || command == prefix + 'setup') {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.lineReply(`:x: This command requires \`ADMINISTRATOR\` permission.`);
    let idd = randomstring.generate({ length: 20 })
    let args = message.content.split(' ').slice(1).join(' ');
    if (!args) args = `Ticket`
    let button = new disbut.MessageButton()
      .setStyle(`gray`)
      .setEmoji(`📩`)
      .setLabel(`Create ticket`)
      .setID(idd)
    let embed = new Discord.MessageEmbed()
      .setTitle(args)
      .setDescription("To create a ticket react with 📩")
      .setTimestamp()
      .setColor(0x5865F2)
      .setFooter(message.guild.name, message.guild.iconURL())
    let msg = await message.channel.send({ embed: embed, component: button }).then(async msg => {

      let log_embed = new Discord.MessageEmbed()
        .setTitle(`تم إرسال رسالة لفتح تذاكر جديدة`)
        .addField(`داخل روم`, `<#${message.channel.id}>`)
        .addField(`بواسطة`, `<@!` + message.author.id + `>`)
        .setTimestamp()
        .setColor(0x5865F2)
        .setFooter(message.guild.name, message.guild.iconURL())
      channelLog(log_embed)
      await db.set(`tickets_${idd}`, {
        reason: args,
        msgID: msg.id,
        id: idd,
        guildName: message.guild.name,
        guildAvatar: message.guild.iconURL(),
        channelID: message.channel.id
      })
    })
  }
})

//All Copy Right Reserved For: Shuruhatik  in YT
client.on('clickButton', async (button) => {
  if (db.has(`tickets_${button.id}`) == true) {
    await button.reply.send(`يتم تجهيز تذكرتك. أرجو الإنتظار`, true)
    await countsdb.math(`counts_${button.message.id}`, `+`, 1)
    let count = await countsdb.get(`counts_${button.message.id}`)
    let channel;
    button.guild.channels.create(`ticket-000${count}`, {
      permissionOverwrites: [
        {
          id: button.guild.roles.everyone,
          deny: ['VIEW_CHANNEL'],
        },
        {
          id: ZoZ.support_1,
          allow: ['VIEW_CHANNEL', `READ_MESSAGE_HISTORY`, `ATTACH_FILES`, `SEND_MESSAGES`,`MANAGE_MESSAGES`],
        },
        {
          id: ZoZ.support_2,
          allow: ['VIEW_CHANNEL', `READ_MESSAGE_HISTORY`, `ATTACH_FILES`, `SEND_MESSAGES`,`MANAGE_MESSAGES`],
        },
        {
          id: button.clicker.user.id,
          allow: ['VIEW_CHANNEL', `READ_MESSAGE_HISTORY`, `ATTACH_FILES`, `SEND_MESSAGES`],
        },
      ], parent: ZoZ.category_id, position: 1, topic: `تذكرة : <@!${button.clicker.user.id}>`, reason: "All rights reserved to Shuruhatik.xyz"
    }).then(async channel => {
      channel = channel
      await ticketschannelsdb.set(`ticket_${channel.id}`, { count: count, ticket_by: button.clicker.user.id })

      await button.reply.edit(`
**تم فتح تذكرتك بنجاح ** <#${channel.id}>`, true)
          let log_embed = new Discord.MessageEmbed()
            .setTitle(`تم فتح تذكرة جديدة`)
            .addField(`التذكرة`, `<#${channel.id}>`)
            .addField(`التذكرة بواسطة`, `<@!${button.clicker.user.id}>`)
            .addField(`رقم التذكرة`, count)
            .setTimestamp()
            .setColor(`GREEN`)
          channelLog(log_embed)
      const embedticket = new Discord.MessageEmbed()
        .setTimestamp()
        .setFooter(`تم فتح التذكرة في`)
        .setColor(0x5865F2)
        .setDescription(`Support will be with you shortly.
        To close this ticket react with 🔒`)
      let idd = randomstring.generate({ length: 25 })
      let bu1tton = new disbut.MessageButton()
        .setStyle(`gray`)
        .setEmoji(`🔒`)
        .setLabel(`Close`)
        .setID(idd)
      channel.send(`Welcome <@!${button.clicker.user.id}>`, { embed: embedticket, component: bu1tton }).then(msg => {
      })
      channel.send('يرجه منك انتظار الدعم  الفني')
      client.on('clickButton', async (button1) => {
        if (button1.id == idd) {
          let bu0tton = new disbut.MessageButton()
            .setStyle(`red`)
            .setLabel(`أغلق`)
            .setID(idd + `sure`)
          await button1.reply.send(`Are you sure you would like to close this ticket?`, { component: bu0tton, ephemeral: true });
        }
        client.on('clickButton', async (button) => {
          if (button.id == idd + `sure`) {
            await button1.reply.edit(`يتم تنفيذ طلبك بعد 5 ثانية ، وسيتم إغلاقه`, true)
            let ch = channel
            if (!ch) return;
            setTimeout(async () => {
              try {
                await ch.send({ embed: { description: `تم إغلاق التذكرة من قبل <@!${button.clicker.user.id}>`, color: `YELLOW` } });
                let type = 'member'
                await Promise.all(ch.permissionOverwrites.filter(o => o.type === type).map(o => o.delete()));
                ch.setName(`closed-${await ticketschannelsdb.get(`ticket_${ch.id}`).count}`)
                let log_embed = new Discord.MessageEmbed()
                  .setTitle(`تم إغلاق تذكرة`)
                  .addField(`التذكرة`, `<#${ch.id}>`)
                  .addField(`الاجراء بواسطة`, `<@!${button.clicker.user.id}>`)
                  .setTimestamp()
                  .setColor(`YELLOW`)
                channelLog(log_embed)
              } catch {

              }
            }, 4000)
          }
        })
      })
    })
  }
})


//=================[BroadCast]====================
client.on("message", message => {
  if (message.content.startsWith(prefix + "bc")) {
    if (!message.member.permissions.has("ADMINISTRATOR")) return;
    let r= message.content.split(" ").slice(1).join(" ")
          let x = new Discord.MessageEmbed()
      .setTitle(`**❌ Type your broadcast message !**`)
      .setTimestamp()
    if (!r) return message.channel.send({ embeds: [x] });
    message.guild.members.cache
      .forEach(m => {
        if (m.user.bot) return;
        m.send({ content: `${r}\n ${m}` })
          .then(() => {
            console.log(`✅ Successfully ${m.user.tag} `);
          })
          .catch(function() {
            console.log(`❌ not Successfully ${m.user.tag}`);
          });
      });
    message.channel.send(`

     **عدد الاعضاء المستلمين📬 :** \`${message.guild.memberCount}\`
`)
    
  }
});

//=================[setavatar]====================

const owners = ["910482674915885077", "id2", "id3"];

client.on("message", message => {
  if (message.content.startsWith(prefix + "setname")) {
    let args = message.content.split(" ");
    let botnameee = args.slice(1).join(" ");
    if (!owners.includes(message.author.id))
      return message.channel.send(
        `** :x: Only Owners Can   Use this Command **`
      );
    if (!botnameee)
      return message.channel.send(
        `** :x: Please Provide me a name for the bot !**`
      );
    client.user.setUsername(`${botnameee}`);
    message.channel.send(`Changing The bot's Name ...`).then(me => {
      me.edit(` Done !`);
    });
  }
  if (message.content.startsWith(prefix + "setavatar")) {
    let args = message.content.split(" ");
    let botnameee = args.slice(1).join(" ");
    if (!owners.includes(message.author.id))
      return message.channel.send(
        `** :x: Only Owners Can   Use this Command **`
      );
    if (!botnameee)
      return message.channel.send(
        `** :x: Please Provide me an avatar for the bot !**`
      );
    client.user.setAvatar(`${botnameee}`);
    message.channel.send(`Changing The bot's Avatar ...`).then(me => {
      me.edit(` Done !`);
    });
  }
});

//=================[Welcome]====================

const keepAlive = require('./keepAlive.js');
const bot = require("./bot.json");

const welcome = require("./welcome");
welcome(client);

keepAlive();


//=================[activty]====================

const cmd = require("node-cmd");
const request = require('request');
// const dateFormat = require('dateformat');
/////////////
const admin = prefix 
const developers = ["910482674915885077", "", ""]
///////////////
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
 
  if (message.content.startsWith(admin + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Watching ${argresult} \` `)
  } else 
  if (message.content.startsWith(admin + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Listening ${argresult} \` `)
  } else 
  if (message.content.startsWith(admin + 'setstream')) {
    client.user.setActivity(argresult, "Streaming");
     message.channel.send(` ☑ Client Activity Now Is : \`Streaming ${argresult} \` `)
  } else
  if (message.content.startsWith(admin + 'pl')) {
    client.user.setActivity(argresult, {type:'PLAYING'});
     message.channel.send(` ☑ Client Activity Now Is : \`playing ${argresult} \` `)
  }
});




























client.login('OTkxNzY4OTA1OTg5MjMwNjMz.GkoPB_.GfCMNXSTywCKxzBLh-MmHFaGpHgcTdiUfB2S8k');

