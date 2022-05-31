//let vn = './media/mariana.mp3'
//NO MODIFIQUES EL NÚMERO DE LA CREADORA NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT

//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
let handler = async (m, { conn, command, text, usedPrefix }) => {
let fetch = require('node-fetch')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = 'https://i.imgur.com/BfsbCOR.jpg'
let menu =` 
╌╌╌───  *Vélɑut* | *Bot*  ───╌╌╌
 *¡Hola! ${username}* ♡
 
 👤 𝗖𝗛𝗔𝗧 𝗔𝗡𝗢𝗡𝗜𝗠𝗢 
 ┌──────────────────┐
  ─ ۰ _${usedPrefix}chatanonimo | anonimochat_
  ─ ۰ _${usedPrefix}anonimoch_
  ─ ۰ _${usedPrefix}start_
  ─ ۰ _${usedPrefix}next_
  ─ ۰ _${usedPrefix}leave_
 └──────────────────┘
`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀🕊
`.trim(), menu, '🔊 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎 🔊', `#menuaudio`, '📦 𝙈𝙀𝙉𝙐 𝘾𝘼𝙅𝘼 𝘼𝙇𝙈𝘼𝘾𝙀𝙉 📦', `#menucaja`, '💮 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙇𝙊𝙂𝙊𝙎 💮', `#menucrearlogos`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menuchat|menuanonimoMenuchat|Menuanonimo|menúchat|menúanonimo)$/i
module.exports = handler
