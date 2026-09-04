const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const os = require("os")
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, Func, fetchJson} = require('../lib/functions')
const axios = require('axios')
cmd({
    pattern: "setting",
    desc: "Check bot setting.",
    react: "⚙️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 if (!isOwner) return reply(`only for owner`);
const config = await readEnv();
let setting = `
*╭──────────────●●►*
 *YAKUZV5 𝚂𝙴𝚃𝚃𝙸𝙽𝙶𝚂* ⚙️
*╰──────────────●●►*
*╭───────────────────●●►*
*│◈ ALIVE_IMG:* .update ALIVE_IMG: Imgurl 

*│◈ ALIVE_MSG:* .update ALIVE_MSG: Hello , I am alive now!!

*│◈ PREFIX:* .update PREFIX: .

*│◈ AUTO_READ_STATUS:* .update AUTO_READ_STATUS: true

*│◈ MODE:* .update MODE: public

*│◈ AUTO_VOICE:* .update AUTO_VOICE: true

*│◈ AUTO_STICKER:* .update AUTO_STICKER: true

*│◈ AUTO_REPLY:* .update AUTO_REPLY: true

*│◈ ANTI_BAD:* .update ANTI_BAD: true

*│◈ ANTI_LINK:* .update ANTI_LINK: true

*│◈ RECORDING:* .update RECORDING : true

*│◈ ALLWAYS_OFFLINE:* .update ALLWAYS_OFFLINE: false

*│◈ READ_CMD:* .update READ_CMD: true

*│◈ AUTO_REACT:* .update AUTO_REACT: true

*│◈ ANTI_BOT:* .update ANTI_BOT: true

*│◈ READ_CMD:* .update READ_CMD: true

*│◈ READ_CMD:* .update READ_CMD: true

*╰──────────────────●●►*
`
const ownerdata = (await axios.get('https://raw.githubusercontent.com/athulakumara604/YAKUZV5-DATABASE/refs/heads/main/ditels/ditels.json')).data
            let LOGO = ownerdata.imageurl;
            let BTN = ownerdata.button;
            let FOOTER = ownerdata.footer;
            let BTNURL = ownerdata.buttonurl;
            let HEADER = ownerdata.header;
let prefix = config.PREFIX;

let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: BTN,
                        url: BTNURL,
                        merchant_url: BTNURL
                    }),
                },
                 {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
            display_text: "GITHUB",
            url: "https://github.com/your-username/YakuzV5",
            merchant_url: "https://github.com/your-username/YakuzV5"
            }),}]

    let message = {
                    image: LOGO,
                    header: '*YakuzV5 𝚂𝙴𝚃𝚃𝙸𝙽𝙶𝚂*',
                    footer: FOOTER,
                    body: setting

                }
return conn.sendButtonMessage(from, buttons, m, message)
} catch (e) {
const msr = (await fetchJson('https://raw.githubusercontent.com/athulakumara604/YAKUZV5-DATABASE/refs/heads/main/ditels/ditels.json'))
await conn.sendMessage(from, { react: { text: `❌`, key: mek.key } })
console.log(e)
reply(msr.replyMsg.erro)
}
})
// 𝚛𝚎𝚙𝚘
cmd({
    pattern: "repo",
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let repo =`
*╭──────────────●●►*
*| 𝙾𝚆𝙽𝙴𝚁 𝙽𝚄𝙼𝙱𝙴𝚁:* 94775713391 
*| 𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳 𝚁𝙴𝙿𝙾:* https://github.com/your-username/YakuzV5
*| 𝙱𝙾𝚃 𝚄𝙿𝙳𝙴𝚃𝙰 𝙽𝙴𝚆𝚂 :* https://whatsapp.com/channel/0029VatlhKF5vKAI4qzFSU3c
*╰──────────────●●►*
`
const ownerdata = (await axios.get('https://raw.githubusercontent.com/athulakumara604/YAKUZV5-DATABASE/refs/heads/main/ditels/ditels.json')).data
            let LOGO = ownerdata.imageurl;
            let BTN = ownerdata.button;
            let FOOTER = ownerdata.footer;
            let BTNURL = ownerdata.buttonurl;
            let HEADER = ownerdata.header;
let prefix = config.PREFIX;

let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: BTN,
                        url: BTNURL,
                        merchant_url: BTNURL
                    }),
                },
                 {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
            display_text: "GITHUB",
            url: "https://github.com/your-username/YakuzV5",
            merchant_url: "https://github.com/your-username/YakuzV5"
            }),}]

    let message = {
                    image: LOGO,
                    header: '*YakuzV5 REPO*',
                    footer: FOOTER,
                    body: repo

                }
return conn.sendButtonMessage(from, buttons, m, message)
} catch (e) {
const msr = (await fetchJson('https://raw.githubusercontent.com/athulakumara604/YAKUZV5-DATABASE/refs/heads/main/ditels/ditels.json'))
await conn.sendMessage(from, { react: { text: `❌`, key: mek.key } })
console.log(e)
reply(msr.replyMsg.erro)
}
})

cmd({
    pattern: "system",
    desc: "Check runtime, owner & more...",
    category: "main",
    react: "🛠️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

  const msr =await fetchJson('https://raw.githubusercontent.com/athulakumara604/YAKUZV5-DATABASE/refs/heads/main/Mreply.json')


let status = `*┌───────────────────────*
*├* ⏰ *Runtime:-* ${runtime(process.uptime())}
*├* 📟 *Ram usage:-* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*├*⚙️ *Platform:-* ${os.hostname()}
*├* 👨‍💻 *Owners:-* YAKUZV5 GIMSHAN
*├* 🧬 *Version:-* ${msr.VERSION}
*└───────────────────────*

> POWERED by YakuzV5 
`

return reply(`${status}`)

}catch(e){
console.log(e)
reply(`${e}`)

}
});

cmd({
        pattern: "ping",
        react : "🚀",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
      try{
      var inital = new Date().getTime();
        const { key } = await conn.sendMessage(from, {text: '```Ping!!!```'});
        var final = new Date().getTime();
       //await Secktor.sleep(1000)
       return await conn.sendMessage(from, {text: '*Pong*  *' + (final - inital) + ' ms* ', edit: key});
  } catch (e) {
        console.log(e)
        reply(`${e}`)
    }});


cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    react: "🛠️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const msr =await fetchJson('https://raw.githubusercontent.com/athulakumara604/YAKUZV5-DATABASE/refs/heads/main/Mreply.json')

const voice = {
    alive: 'https://github.com/athulakumara604/YAKUZV5-DATABASE/raw/main/Alivevoice/0909.MP3'
}
const config = await readEnv();
const aliveMsg = config.ALIVE_MSG 
let aliveMessage = ` 
*╭─「 ALIVE 」──────●●►*
*│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 -* ${runtime(process.uptime())}
*│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰────────────────●●►*
 *${msr.ALIVE_NEWS}*
*╰────────────────●●►*
 ${aliveMsg}

`

const ownerdata = (await axios.get('https://raw.githubusercontent.com/athulakumara604/YAKUZV5-DATABASE/refs/heads/main/ditels/ditels.json')).data
            let LOGO = ownerdata.imageurl;
            let BTN = ownerdata.button;
            let FOOTER = ownerdata.footer;
            let BTNURL = ownerdata.buttonurl;
            let HEADER = ownerdata.header;
               
let prefix = config.PREFIX;

let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: BTN,
                        url: BTNURL,
                        merchant_url: BTNURL
                    }),
                },
                 {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
            display_text: "GITHUB",
            url: "https://github.com/your-username/YakuzV5",
            merchant_url: "https://github.com/your-username/YakuzV5"
        }),},
             
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "PING 🚀",
                    id: prefix + "ping"
                }),
            } ,
            
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "MENU 📑",
                    id: prefix + "menu"
                }),
            } 

              ]

let message = {
                    image: LOGO,
                    header: `*HELLO* ${pushname}`,
                    footer: FOOTER,
                    body: aliveMessage

}
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

return conn.sendButtonMessage(from, buttons, m, message)
} catch (e) {
const msr = (await fetchJson('https://raw.githubusercontent.com/athulakumara604/YAKUZV5-DATABASE/refs/heads/main/ditels/ditels.json'))
await conn.sendMessage(from, { react: { text: `❌`, key: mek.key } })
console.log(e)
reply(msr.replyMsg.erro)
}
})
