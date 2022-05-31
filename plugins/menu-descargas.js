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
 
 📥 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦
 ┌──────────────────┐
  ─ ۰ _${usedPrefix}imagen | image | gimage *texto*_
  ─ ۰ _${usedPrefix}ytsearch *texto*_
  ─ ۰ _${usedPrefix}dlaudio *link yt*_
  ─ ۰ _${usedPrefix}dlvid *link yt*_
  ─ ۰ _${usedPrefix}ytmp3 *link yt*_
  ─ ۰ _${usedPrefix}ytmp4 *link yt*_
  ─ ۰ _${usedPrefix}play *titulo del audio*_
  ─ ۰ _${usedPrefix}play.1 *titulo del audio*_
  ─ ۰ _${usedPrefix}play.2 *titulo del video*_
  ─ ۰ _${usedPrefix}play2 *titulo del video*_
  ─ ۰ _${usedPrefix}play3 *titulo del audio/video*_
  ─ ۰ _${usedPrefix}play6 *artista y titulo*_
  ─ ۰ _${usedPrefix}letra *nombredelacanción*_
  ─ ۰ _${usedPrefix}google *texto*_
  ─ ۰ _${usedPrefix}googlef *texto*_
  ─ ۰ _${usedPrefix}pinterestvideo | pintvid *link*_
  ─ ۰ _${usedPrefix}tiktokaudio *link del tiktok*_
  ─ ۰ _${usedPrefix}tiktok *link*_
  ─ ۰ _${usedPrefix}tiktok2 | Tiktok2 *link del tiktok*_
  ─ ۰ _${usedPrefix}acortar | reducir *link*_
  ─ ۰ _${usedPrefix}pinterest | pinterest2 *texto*_
  ─ ۰ _${usedPrefix}ssweb | capturar | captura *link*_
  ─ ۰ _${usedPrefix}animeinfo *nombre del anime*_
  ─ ۰ _${usedPrefix}wpanime | fondoanime_
  ─ ۰ _${usedPrefix}verinstagram | verig |igver *usuario*_
  ─ ۰ _${usedPrefix}ighistorias|historiasig *usuario*_
  ─ ۰ _${usedPrefix}twittervideo | twvid *link de twitter*_
  ─ ۰ _${usedPrefix}wikipedia | wiki | internet *texto*_
  ─ ۰ _${usedPrefix}spotify | spotimusica *autor, cancion*_
  ─ ۰ _${usedPrefix}frase *escriba un número (1 - 99)*_
  ─ ۰ _${usedPrefix}wpaesthetic | fondoaesthetic_
 └──────────────────┘
`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀🕊
`.trim(), menu, '🔐 𝙂𝙀𝙎𝙏𝙄𝙊𝙉 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 🔐', `#menugrupo`, '🎨 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘾𝙍𝙀𝘼𝘾𝙄𝙊𝙉 🎨', `#menucreador`, '💥 𝘼𝙉𝙄𝙈𝙀/𝙍𝘼𝙉𝘿𝙊𝙈 💥', `#menurandom`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menudescarga|menudescargas|Menudescargas|Menúdescargas|Menúdescarga|menúdescarga)$/i
module.exports = handler
