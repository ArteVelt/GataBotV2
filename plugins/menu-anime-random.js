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
 
 ▪️ 𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠
 ┌──────────────────┐
  ─ ۰ _${usedPrefix}pubg_
  ─ ۰ _${usedPrefix}doraemon_
  ─ ۰ _${usedPrefix}jeni_
  ─ ۰ _${usedPrefix}jisoo_
  ─ ۰ _${usedPrefix}rose_
  ─ ۰ _${usedPrefix}wpmontaña | fondomontaña_
  ─ ۰ _${usedPrefix}wpgaming | fondogaming_
  ─ ۰ _${usedPrefix}randomwallpaper_
  ─ ۰ _${usedPrefix}compartirfoto_
  ─ ۰ _${usedPrefix}futbol_
  ─ ۰ _${usedPrefix}Messi_
  ─ ۰ _${usedPrefix}animal_
  ─ ۰ _${usedPrefix}meme_
  ─ ۰ _${usedPrefix}meme2_
  ─ ۰ _${usedPrefix}meme3_
  ─ ۰ _${usedPrefix}cat | gato | gata_
  ─ ۰ _${usedPrefix}dog | perro | perra_
  ─ ۰ _${usedPrefix}pikachu_
  ─ ۰ _${usedPrefix}waifu_
  ─ ۰ _${usedPrefix}blackpink_
  ─ ۰ _${usedPrefix}reto_
  ─ ۰ _${usedPrefix}verdad_
  ─ ۰ _${usedPrefix}imagenrandom | random | epico_
  ─ ۰ _${usedPrefix}neko_
  ─ ۰ _${usedPrefix}lolivid_
  ─ ۰ _${usedPrefix}iqtest | iq | inteligencia_
  ─ ۰ _${usedPrefix}kpopitzy_
  ─ ۰ _${usedPrefix}navidad_
  ─ ۰ _${usedPrefix}loli_
  ─ ۰ _${usedPrefix}gawrgura_
  ─ ۰ _${usedPrefix}miku_
  ─ ۰ _${usedPrefix}nyan_
  ─ ۰ _${usedPrefix}pasticker_
  ─ ۰ _${usedPrefix}itachi_
  ─ ۰ _${usedPrefix}slap_
  ─ ۰ _${usedPrefix}pat_
  ─ ۰ _${usedPrefix}perfil_
  ─ ۰ _${usedPrefix}scan | datos | escaneo_
  ─ ۰ _${usedPrefix}kpop_
  ─ ۰ _${usedPrefix}qr *texto*_
  ─ ۰ _${usedPrefix}afk | aviso | informo *motivo*_
  ─ ۰ _${usedPrefix}CristianoRonaldo_
  ─ ۰ _${usedPrefix}pregunta *pregunta*_
  ─ ۰ _${usedPrefix}mention | mensaje *texto*_
  ─ ۰ _${usedPrefix}spamchat *texto*_
  ─ ۰ _${usedPrefix}traducir es *texto*_
  ─ ۰ _${usedPrefix}zodiac | zodiaco *AAAA MM DD*_
  ─ ۰ _${usedPrefix}readmore | leermas *texto1| texto2*_
  ─ ۰ _${usedPrefix}calc | calculadora *expresión mat.*_ 
  ─ ۰ _${usedPrefix}spamwa *numero|texto|cantidad*_
  ─ ۰ _${usedPrefix}readqr *responde a un código QR*_
  ─ ۰ _${usedPrefix}anime *random / waifu / husbu /neko*_
  ─ ۰ _${usedPrefix}agendar *@tag + nombre contacto*_
  ─ ۰ _${usedPrefix}guardar *@tag + nombre contacto*_
  ─ ۰ _${usedPrefix}spam *numero|texto|cantidad*_ 
  ─ ۰ _${usedPrefix}spoiler | hidetext *texto1| texto2*_
  ─ ۰ _${usedPrefix}experiencia | exp_
 └──────────────────┘
`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `

`.trim(), menu, '▪️ 𝗠𝗘𝗡𝗨 𝟭𝟴 ▪️', `#labiblia`, '▫️ 𝗠𝗘𝗡𝗨 𝗔𝗨𝗗𝗜𝗢𝗦 ▫️', `#menuaudio`, '▪️ 𝗠𝗘𝗡𝗨 𝗔𝗟𝗠𝗔𝗖𝗘𝗡 ▪️', `#menucaja`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menurandom|menuextras|Menurandom|Menuextras|menúrandom|menúextra|menúextras)$/i
module.exports = handler
