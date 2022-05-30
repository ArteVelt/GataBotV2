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
 
 🕹 𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦
 ┌──────────────────┐
  ─ ۰ _${usedPrefix}top10gays | topgay_
  ─ ۰ _${usedPrefix}toplind@s | toplind@_
  ─ ۰ _${usedPrefix}topput@s | toppt_
  ─ ۰ _${usedPrefix}toppajer@s | toppajeros_
  ─ ۰ _${usedPrefix}topotakus | toptakus_
  ─ ۰ _${usedPrefix}top10integrantes_
  ─ ۰ _${usedPrefix}top10shiposters | topshipost_
  ─ ۰ _${usedPrefix}top10panafrescos_
  ─ ۰ _${usedPrefix}top10lagrasa | top10grasa_
  ─ ۰ _${usedPrefix}math | mates | matemáticas *modo*_
  ─ ۰ _${usedPrefix}ttt | tictactoe *nombre del la sala*_
  ─ ۰ _${usedPrefix}delttt *nombre del la sala*_
  ─ ۰ _${usedPrefix}gay2 *@tag*_
  ─ ۰ _${usedPrefix}gay2 *yo*_
  ─ ۰ _${usedPrefix}gay *@tag / nombre*_
  ─ ۰ _${usedPrefix}lesbi *@tag / nombre*_
  ─ ۰ _${usedPrefix}pajero *@tag / nombre*_
  ─ ۰ _${usedPrefix}pajera *@tag / nombre*_
  ─ ۰ _${usedPrefix}puta *@tag / nombre*_
  ─ ۰ _${usedPrefix}puto *@tag / nombre*_
  ─ ۰ _${usedPrefix}rata *@tag / nombre*_
  ─ ۰ _${usedPrefix}manco *@tag / nombre*_
  ─ ۰ _${usedPrefix}manca *@tag / nombre*_
  ─ ۰ _${usedPrefix}formarpareja | pareja5_
  ─ ۰ _${usedPrefix}dado_
  ─ ۰ _${usedPrefix}simsimi | simi | bot *texto*_
  ─ ۰ _${usedPrefix}formartrio_
  ─ ۰ _${usedPrefix}love *@tag / nombre*_
  ─ ۰ _${usedPrefix}amigorandom | amigo | amistad_
  ─ ۰ _${usedPrefix}slot *cantidad*_
  ─ ۰ _${usedPrefix}ppt *piedra / papel / tijera*_
  ─ ۰ _${usedPrefix}prostituta *@tag / nombre*_
  ─ ۰ _${usedPrefix}prostituto *@tag / nombre*_
  ─ ۰ _${usedPrefix}doxxear *@tag*_
  ─ ۰ _${usedPrefix}doxxeame_
 └──────────────────┘
`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   ⠀⠀⠀   🕊
`.trim(), menu, '🚀 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 🚀', `#menudescarga`, '🔐 𝙂𝙀𝙎𝙏𝙄𝙊𝙉 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 🔐', `#menugrupo`, '🎨 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘾𝙍𝙀𝘼𝘾𝙄𝙊𝙉 🎨', `#menucreador`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menujuego|menujuegos|Menújuego|Menújuegos|menújuegos)$/i
module.exports = handler
