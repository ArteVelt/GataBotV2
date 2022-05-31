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
 
▫️ 𝗠𝗘𝗡𝗨 𝗚𝗥𝗨𝗣𝗢𝗦
 ┌──────────────────┐
  ─ ۰ _${usedPrefix}admins *texto*_ 
  ─ ۰ _${usedPrefix}añadir *numero*_ (desactivado)
  ─ ۰ _${usedPrefix}sacar @tag_ (desactivado)
  ─ ۰ _${usedPrefix}save *@tag + nombre de contacto*_
  ─ ۰ _${usedPrefix}daradmin | darpoder *@tag*_
  ─ ۰ _${usedPrefix}quitaradmin | quitarpoder *@tag*_
  ─ ۰ _${usedPrefix}grupo *abierto / cerrado*_
  ─ ۰ _${usedPrefix}enable welcome_
  ─ ۰ _${usedPrefix}disable welcome_
  ─ ۰ _${usedPrefix}enable antilink_ *(WhatsApp)*
  ─ ۰ _${usedPrefix}disable antilink_ 
  ─ ۰ _${usedPrefix}enable antilink2_ *(https:)*
  ─ ۰ _${usedPrefix}disable antilink2_
  ─ ۰ _${usedPrefix}enable delete_
  ─ ۰ _${usedPrefix}disable  delete_ 
  ─ ۰ _${usedPrefix}link_
  ─ ۰ _${usedPrefix}notificar | hidetag *texto*_
  ─ ۰ _${usedPrefix}setname *Nuevo nombre del grupo*_
  ─ ۰ _${usedPrefix}setdesc *Nueva descripción grupo*_
  ─ ۰ _${usedPrefix}infogrupo_
  ─ ۰ _${usedPrefix}invocar *texto*_
  ─ ۰ _${usedPrefix}del *responder a un mensaje del bot*_
  ─ ۰ _${usedPrefix}fantasmas_
  ─ ۰ _${usedPrefix}banchat_
  ─ ۰ _${usedPrefix}unbanchat_
 └──────────────────┘
`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀🕊
`.trim(), menu, '🎨 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘾𝙍𝙀𝘼𝘾𝙄𝙊𝙉 🎨', `#menucreador`, '💥 𝘼𝙉𝙄𝙈𝙀/𝙍𝘼𝙉𝘿𝙊𝙈 💥', `#menurandom`, '🔞 𝙈𝙀𝙉𝙐 +18 🔞', `#labiblia`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menugrupo|menugrupos|menúgrupo|menúgrupos|Menúgrupo|Menúgrupos)$/i
module.exports = handler
