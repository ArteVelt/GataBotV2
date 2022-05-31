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

▫️ 𝗠𝗘𝗡𝗨 𝗟𝗢𝗚𝗢𝗦
 ┌──────────────────┐
  ─ ۰ _${usedPrefix}logos_ *(lista)*
  ─ ۰ _${usedPrefix}cementerio | logocementerio_
  ─ ۰ _${usedPrefix}cesped | logocesped_
  ─ ۰ _${usedPrefix}coffe | logocoffe_
  ─ ۰ _${usedPrefix}fire | logofire_
  ─ ۰ _${usedPrefix}flaming | logoflaming_
  ─ ۰ _${usedPrefix}lovemessages | lovemensajes_
  ─ ۰ _${usedPrefix}playa | logoplaya_
  ─ ۰ _${usedPrefix}logorandom_
  ─ ۰ _${usedPrefix}romanticdouble | romantico2_
  ─ ۰ _${usedPrefix}romanticmessages | romanticms_
  ─ ۰ _${usedPrefix}logosky_
  ─ ۰ _${usedPrefix}taza | logotaza_
  ─ ۰ _${usedPrefix}taza2 | logotaza2_
  ─ ۰ _${usedPrefix}technology | tecnologia_
  ─ ۰ _${usedPrefix}coff_
  ─ ۰ _${usedPrefix}lolice_
  ─ ۰ _${usedPrefix}simpcard_
  ─ ۰ _${usedPrefix}hornycard_ 
  ─ ۰ _${usedPrefix}lblackpink_
  ─ ۰ _${usedPrefix}logocorazon_
  ─ ۰ _${usedPrefix}tahta *texto*_
  ─ ۰ _${usedPrefix}nulis | notas *texto*_
  ─ ۰ _${usedPrefix}nulis2 | notas2 *texto*_
  ─ ۰ _${usedPrefix}lolice *@tag*_
  ─ ۰ _${usedPrefix}simpcard *@tag*_
 └──────────────────┘
`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀🕊
`.trim(), menu, '📦 𝙈𝙀𝙉𝙐 𝘾𝘼𝙅𝘼 𝘼𝙇𝙈𝘼𝘾𝙀𝙉 📦', `#menucaja`, '👤 𝙈𝙀𝙉𝙐 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊 👤', `#menuchat`, '💎 𝙈𝙀𝙉𝙐 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊/𝘼 💎', `#menupropietaria`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menulogos|menulogos|menucrearlogos|mlogos|Menucrearlogos|Mlogos|menúcrearlogos|menucrearlogo|mlogo)$/i
module.exports = handler
