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
 ╌╌╌───  *Vélɑut* | *Bot*  ───╌╌╌
  *¡Hola! ${username}* ♡
 
 ── ▪️ *MENÚ COMPLETO* 
  ${usedPrefix}menucompleto | mcompleto
 
 ── ▪️ *MENÚ JUEGOS* 
  ${usedPrefix}menujuego | menujuegos
 
 ── ▪️ *MENÚ DESCARGAS* 
  ${usedPrefix}menudescarga | menudescargas
 
 ── ▪️ *MENÚ GRUPOS* 
  ${usedPrefix}menugrupo | menugrupos
 
 ── ▪️ *MENÚ CREACIÓN* 
  ${usedPrefix}menucreador | menucreacion
 
 ── ▪️ *MENÚ RANDOM* 
  ${usedPrefix}menurandom | menuextras
 
 ── ▪️ *MENÚ +18* 
  ${usedPrefix}menu18 | labiblia
 
 ── ▪️ *MENÚ AUDIOS* 
  ${usedPrefix}menuaudio | menuaudios
 
 ── ▪️ *MENÚ ALMACÉN* 
  ${usedPrefix}menucaja | menualmacen
 
 ── ▪️ *MENÚ ANÓNIMO* 
  ${usedPrefix}menuchat | menuanonimo
 
 ── ▪️ *MENÚ LOGOS* 
  ${usedPrefix}menucrearlogos | mlogos
 
 ── ▪️ *MENÚ PROPIETARIO* 
  ${usedPrefix}menupropietario
 
╌─╌─╌─╌─╌─╌─╌─╌─╌─
`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(kai)).buffer(), `
⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀ 🕊
`.trim(), menu, '▫️ 𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢 ▫️', `#mcompleto`, '▪️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡 ▪️', `#menuinfobot`, '▫️ 𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦 ▫️', `#menujuego`, m, false, { contextInfo: { mentionedJid }})
 await await await await await await conn.sendFile(m.chat, vn, 'menugatabot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|menu1.2|allmenu|2help)$/i
module.exports = handler
