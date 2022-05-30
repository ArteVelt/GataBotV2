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
 
 ▪️𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡
 ┌──────────────────┐
  ─ ۰ _${usedPrefix}donar_
  ─ ۰ _${usedPrefix}infobot_
  ─ ۰ _${usedPrefix}creditos_ 
  ─ ۰ _${usedPrefix}reglas_
  ─ ۰ _${usedPrefix}grupos_
  ─ ۰ _${usedPrefix}estado_
  ─ ۰ _${usedPrefix}menusimple_
  ─ ۰ _${usedPrefix}menuaudios_
  ─ ۰ _${usedPrefix}instalarbot_
  ─ ۰ _${usedPrefix}procesobot_
  ─ ۰ _${usedPrefix}bug *tal comando con fallas*_
  ─ ۰ _${usedPrefix}reporte *tal comando con fallas*_
  ─ ۰ _${usedPrefix}report *tal comando con fallas*_
  ─ ۰ _${usedPrefix}owner_
  ─ ۰ _${usedPrefix}contacto_
  ─ ۰ _${usedPrefix}join *enlace del grupo*_
  ─ ۰ _${usedPrefix}unete *enlace del grupo*_ 
  ─ ۰ _${usedPrefix}bots *ver bots*_
  ─ ۰ _${usedPrefix}stop_
  ─ ۰ _${usedPrefix}jadibot | serbot_
  ─ ۰ _${usedPrefix}getcode_
  ─ ۰ _¿Qué es un Bot?_
  ─ ۰ _Codigos para audios_
  ─ ۰ _Términos y condiciones_
 └──────────────────┘
`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
⠀⠀⠀⠀⠀⠀   ⠀ ⠀⠀  🕊
`.trim(), menu, '🎮 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙅𝙐𝙀𝙂𝙊𝙎 🎮', `#menujuego`, '🚀 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 🚀', `#menudescarga`, '🔐 𝙂𝙀𝙎𝙏𝙄𝙊𝙉 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 🔐', `#menugrupo`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menuinfobot|menuinfo|infomenu|menúinfobot|menúinfo)$/i
module.exports = handler
