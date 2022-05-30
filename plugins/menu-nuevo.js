//let vn = './media/mariana.mp3'
//NO MODIFIQUES EL NÚMERO DE LA CREADORA NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT

//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
let handler = async (m, { conn, command, text, usedPrefix }) => {
let fetch = require('node-fetch')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let kai = 'https://i.imgur.com/8fK4h6F.jpg' 
let vn = './media/menugatabot.mp3'
let menu =`
 ‖ ╌╌─── *Vélɑut* | *Bot* ───╌╌
 ‖ *¡Hola! ${username}* ♡
 ‖
 ‖ 𝐦 *_MENÚ COMPLETO_* 
 ‖⇶ _${usedPrefix}menucompleto | mcompleto_
 ‖
 ‖ 𝐠 *_MENÚ JUEGOS_* 
 ‖⇶ _${usedPrefix}menujuego | menujuegos_
 ‖ 
 ‖ 𝐝 *_MENÚ DESCARGAS_* 
 ‖⇶ _${usedPrefix}menudescarga | menudescargas_
 ‖
 ‖ 𝐬 *_MENÚ GRUPOS_* 
 ‖⇶ _${usedPrefix}menugrupo | menugrupos_
 ‖
 ‖ 𝐜 *_MENÚ CREACIÓN_* 
 ‖⇶ _${usedPrefix}menucreador | menucreacion_
 ‖ 
 ‖ 𝐫 *_MENÚ RANDOM_* 
 ‖⇶ _${usedPrefix}menurandom | menuextras_
 ‖
 ‖ 𝟏𝟖 *_MENÚ +18_* 
 ‖⇶ _${usedPrefix}menu18 | labiblia_
 ‖
 ‖ 𝐚 *_MENÚ AUDIOS_* 
 ‖⇶ _${usedPrefix}menuaudio | menuaudios_
 ‖ 
 ‖ 𝐮 *_MENÚ ALMACÉN_* 
 ‖⇶ _${usedPrefix}menucaja | menualmacen_
 ‖
 ‖ 𝐧 *_MENÚ ANÓNIMO_* 
 ‖⇶ _${usedPrefix}menuchat | menuanonimo_
 ‖
 ‖ 𝐥 *_MENÚ LOGOS_* 
 ‖⇶ _${usedPrefix}menucrearlogos | mlogos_
 ‖ 
 ‖ 𝐈𝐈 *_MENÚ PROPIETARIO_* 
 ‖⇶ _${usedPrefix}menupropietario_
 ‖
╌─╌─╌─╌─╌─╌─╌─
*Vélɑut Bot*`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(kai)).buffer(), `
─ *VÉLAUT* | *BOT* ─
`.trim(), menu, 'Ⓜ️ 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 Ⓜ️', `#mcompleto`, '🔖 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙈𝙀𝙉𝙐 🔖', `#menuinfobot`, '🎮 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙅𝙐𝙀𝙂𝙊𝙎 🎮', `#menujuego`, m, false, { contextInfo: { mentionedJid }})
 await await await await await await conn.sendFile(m.chat, vn, 'menugatabot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|menu1.2|allmenu|2help)$/i
module.exports = handler
