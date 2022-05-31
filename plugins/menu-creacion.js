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
 
 🌿 𝗠𝗘𝗡𝗨 𝗖𝗥𝗘𝗔𝗖𝗜𝗢𝗡
 ┌──────────────────┐
  ─ ۰ _${usedPrefix}s_
  ─ ۰ _${usedPrefix}sticker_
  ─ ۰ _${usedPrefix}semoji | emoji_
  ─ ۰ _${usedPrefix}emojimix 🥺+🥲_
  ─ ۰ _${usedPrefix}wasted_
  ─ ۰ _${usedPrefix}stonks_
  ─ ۰ _${usedPrefix}trash *Responda a una foto*_
  ─ ۰ _${usedPrefix}sgay *Responda a una foto*_
  ─ ۰ _${usedPrefix}circle *Responda a una foto*_
  ─ ۰ _${usedPrefix}stickermaker_
  ─ ۰ _${usedPrefix}attp *texto*_
  ─ ۰ _${usedPrefix}attp2 | s1 | sa *texto*_
  ─ ۰ _${usedPrefix}stickerfilter | cs2_
  ─ ۰ _${usedPrefix}tomp3 | mp3 *responde a un video*_
  ─ ۰ _${usedPrefix}toimg | img *responde a un sticker*_
  ─ ۰ _${usedPrefix}togif | gif *responde a sticker/video*_
  ─ ۰ _${usedPrefix}ytcomentario | ytcomentar *texto*_
  ─ ۰ _${usedPrefix}blur *responde a una imagen*_
  ─ ۰ _${usedPrefix}jaal *Responda a una foto*_
  ─ ۰ _${usedPrefix}swm *imagen | video | gif*_
  ─ ۰ _${usedPrefix}tovideo *responde a una nota de voz*_
  ─ ۰ _${usedPrefix}wanted *Responda a una foto*_
  ─ ۰ _${usedPrefix}style *texto*_
  ─ ۰ _${usedPrefix}estilo *texto*_
  ─ ۰ _${usedPrefix}subirestado *texto / video|imagen*_
  ─ ۰ _${usedPrefix}subirestado *texto / gif*_
  ─ ۰ _${usedPrefix}bass_
  ─ ۰ _${usedPrefix}deep_
  ─ ۰ _${usedPrefix}earrape_
  ─ ۰ _${usedPrefix}fast_
  ─ ۰ _${usedPrefix}fat_
  ─ ۰ _${usedPrefix}nightcore_
  ─ ۰ _${usedPrefix}reverse_
  ─ ۰ _${usedPrefix}robot_
  ─ ۰ _${usedPrefix}slow_
  ─ ۰ _${usedPrefix}tupai
  ─ ۰ _${usedPrefix}smooth_
  ─ ۰ _${usedPrefix}blown_
  ─ ۰ _${usedPrefix}vibracion *cantidad*_
  ─ ۰ _${usedPrefix}tovn *audio a nota de voz*_
 └──────────────────┘

`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀🕊
`.trim(), menu, '💥 𝘼𝙉𝙄𝙈𝙀/𝙍𝘼𝙉𝘿𝙊𝙈 💥', `#menurandom`, '🔞 𝙈𝙀𝙉𝙐 +18 🔞', `#labiblia`, '🔊 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎 🔊', `#menuaudio`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menucreador|menucreacion|Menucreador|Menucreacion|Menúcreador|Menúcreacion|menúcreacion|menúcreador)$/i
module.exports = handler
