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

── ▪️ *INFORMACIÓN | MENÚS*

 🎖 𝗧𝗢𝗣𝗦
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
└──────────────────┘

 🕹 𝗝𝗨𝗘𝗚𝗢𝗦 
 ┌──────────────────┐
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

 *CONVERSA CON EL BOT*
 ┌──────────────────┐
  ─ *Puedes dirigirte también como* 
  ─ *(simi | siri | cortana | alexa)*
  ─ ۰ 🕊 _${usedPrefix}bot *texto*_
 └──────────────────┘

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
  ─ ۰ _${usedPrefix}tiktok | tiktokdl *link*_
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

▫️ *GESTION DE GRUPOS* 
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

🌿 *CREADORES*
┌──────────────────┐
 ─ ۰ _${usedPrefix}s_
 ─ ۰ _${usedPrefix}sticker_
 ─ ۰ _${usedPrefix}semoji | emoji_
 ─ ۰ _${usedPrefix}emojimix 🐱+😼_
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
└──────────────────┘

🖋 *ESTILOS DE TEXTOS*
┌──────────────────┐
 *¡Una gran variedad de estilos de textos!*
 ─ ۰ _${usedPrefix}style *texto*_
 ─ ۰ _${usedPrefix}estilo *texto*_
└──────────────────┘

✉ *SUBIR ESTADOS A GATABOT*
┌──────────────────┐
 *¡Sube estados a la cuenta de GataBot!*
 ─ ۰ _${usedPrefix}subirestado *texto / video|imagen*_
 ─ ۰ _${usedPrefix}subirestado *texto / gif*_
└──────────────────┘

▪️ *RANDOM|EXTRAS*
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
 ─ ۰ _${usedPrefix}pat_
 ─ ۰ _${usedPrefix}itachi_
 ─ ۰ _${usedPrefix}slap_
 ─ ۰ _${usedPrefix}pasticker_
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
 ─ ۰ _${usedPrefix}experiencia | exp
└──────────────────┘

 📍 *COMANDOS +18*
┌──────────────────┐
 *Úsalo si el grupo te lo permite*
 ─ ۰ _${usedPrefix}labiblia_
└──────────────────┘

📼 *EFECTOS PARA AUDIOS*
┌──────────────────┐
 *Responde a un audio o nota de voz*
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
 ─ ۰ _${usedPrefix}tovn *audio a nota de voz*
└──────────────────┘

▫️ *AUDIOS | MENU* 
┌──────────────────┐
 ─ ۰ _${usedPrefix}menu2_
 ─ ۰ _${usedPrefix}menuaudios_
 ─ ۰ _${usedPrefix}audios_
└──────────────────┘

▪️ *CAJA DE ALMACENAMIENTO* 
┌──────────────────┐
 ─ ۰ _${usedPrefix}caja_
 ─ ۰ _${usedPrefix}almacen_
 ─ ۰ _${usedPrefix}cjalmacen_
└──────────────────┘

👤 *CHAT ANONIMO*
┌──────────────────┐
 *¡Escribe con alguien de forma anónima!* 
 ─ ۰ _${usedPrefix}chatanonimo | anonimochat_
 ─ ۰ _${usedPrefix}anonimoch_
 ─ ۰ _${usedPrefix}start_
 ─ ۰ _${usedPrefix}next_
 ─ ۰ _${usedPrefix}leave_
└──────────────────┘

▫️ *LOGOS PERSONALIZADOS*
┌──────────────────┐
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

 *LISTA DE LOGOS PERSONALIZADOS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}logos_ *(lista)*
└──────────────────┘

▫️ *PROPIETARIO/A DEL BOT*
┌──────────────────┐
 ─ ۰ _${usedPrefix}boost | acelerar_
 ─ ۰ _${usedPrefix}restart_
 ─ ۰ _${usedPrefix}banlist_
 ─ ۰ _${usedPrefix}virtext1 | traba1_
 ─ ۰ _${usedPrefix}actualizar | update_
 ─ ۰ _${usedPrefix}bc *texto*_
 ─ ۰ _${usedPrefix}bcgc *texto*_
 ─ ۰ _${usedPrefix}bcbot *texto*_
 ─ ۰ _${usedPrefix}setbye *@tag*_
 ─ ۰ _${usedPrefix}banuser *@tag*_
─ ۰ _${usedPrefix}enable *public*_
┣ ↠👑 _${usedPrefix}disable *public*_
┣ ↠💎 _${usedPrefix}unbanuser *@tag*_
┣ ↠👑 _${usedPrefix}listgroup_
┣ ↠💎 _${usedPrefix}enable *restrict*_
┣ ↠👑 _${usedPrefix}enable *autoread*_
┣ ↠💎 _${usedPrefix}setwelcome *@tag*_
┣ ↠👑 _${usedPrefix}enable *autoread*_
┣ ↠💎 _${usedPrefix}disable *autoread*_
┣ ↠👑 _${usedPrefix}bcbot *texto*_
┣ ↠💎 _${usedPrefix}bcgc *texto*_
┗━━━━━━━━━━━━━━━━━━┛
`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  🕊
`.trim(), menu, '𝗛𝗢𝗟𝗔 🕊', `Hola`, '▪️ 𝗠𝗘𝗡𝗨 𝗔𝗨𝗗𝗜𝗢𝗦 ▪️', `#menuaudios`, '▫️ 𝗠𝗘𝗡𝗨 𝗡𝗨𝗘𝗩𝗢 ▫️', `#menu`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(menucompleto|menúcompleto|completomemu|completomemú|mcompleto|Menucompleto|Mcompleto|Mnúcompleto)$/i
module.exports = handler
