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

 ─🎖 𝗧𝗢𝗣𝗦
 
 ┌──────────────────┐
۰ _${usedPrefix}top10gays | topgay_
۰ _${usedPrefix}toplind@s | toplind@_
۰ _${usedPrefix}topput@s | toppt_
۰ _${usedPrefix}toppajer@s | toppajeros_
۰ _${usedPrefix}topotakus | toptakus_
۰ _${usedPrefix}top10integrantes_
۰ _${usedPrefix}top10shiposters | topshipost_
۰ _${usedPrefix}top10panafrescos_
۰ _${usedPrefix}top10lagrasa | top10grasa_
└──────────────────┘

 ─🕹 𝗝𝗨𝗘𝗚𝗢𝗦 
 
۰ _${usedPrefix}math | mates | matemáticas *modo*_
۰ _${usedPrefix}ttt | tictactoe *nombre del la sala*_
۰ _${usedPrefix}delttt *nombre del la sala*_
۰ _${usedPrefix}gay2 *@tag*_
۰ _${usedPrefix}gay2 *yo*_
۰ _${usedPrefix}gay *@tag / nombre*_
۰ _${usedPrefix}lesbi *@tag / nombre*_
۰ _${usedPrefix}pajero *@tag / nombre*_
۰ _${usedPrefix}pajera *@tag / nombre*_
۰ _${usedPrefix}puta *@tag / nombre*_
۰ _${usedPrefix}puto *@tag / nombre*_
۰ _${usedPrefix}rata *@tag / nombre*_
۰ _${usedPrefix}manco *@tag / nombre*_
۰ _${usedPrefix}manca *@tag / nombre*_
۰ _${usedPrefix}formarpareja | pareja5_
۰ _${usedPrefix}dado_
۰ _${usedPrefix}simsimi | simi | bot *texto*_
۰ _${usedPrefix}formartrio_
۰ _${usedPrefix}love *@tag / nombre*_
۰ _${usedPrefix}amigorandom | amigo | amistad_
۰ _${usedPrefix}slot *cantidad*_
۰ _${usedPrefix}ppt *piedra / papel / tijera*_
۰ _${usedPrefix}prostituta *@tag / nombre*_
۰ _${usedPrefix}prostituto *@tag / nombre*_
۰ _${usedPrefix}doxxear *@tag*_
۰ _${usedPrefix}doxxeame_

 *CONVERSA CON EL BOT*
─ *Puedes dirigirte también como* 
─ *(simi | siri | cortana | alexa)*
۰ 🕊 _${usedPrefix}bot *texto*_

 ─📥 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦
۰ _${usedPrefix}imagen | image | gimage *texto*_
۰ _${usedPrefix}ytsearch *texto*_
۰ _${usedPrefix}dlaudio *link yt*_
۰ _${usedPrefix}dlvid *link yt*_
۰ _${usedPrefix}ytmp3 *link yt*_
۰ _${usedPrefix}ytmp4 *link yt*_
۰ _${usedPrefix}play *titulo del audio*_
۰ _${usedPrefix}play.1 *titulo del audio*_
۰ _${usedPrefix}play.2 *titulo del video*_
۰ _${usedPrefix}play2 *titulo del video*_
۰ _${usedPrefix}play3 *titulo del audio/video*_
۰ _${usedPrefix}play6 *artista y titulo*_
۰ _${usedPrefix}letra *nombredelacanción*_
۰ _${usedPrefix}google *texto*_
۰ _${usedPrefix}googlef *texto*_
۰ _${usedPrefix}pinterestvideo | pintvid *link*_
۰ _${usedPrefix}tiktokaudio *link del tiktok*_
۰ _${usedPrefix}tiktok | tiktokdl *link*_
۰ _${usedPrefix}tiktok2 | Tiktok2 *link del tiktok*_
۰ _${usedPrefix}acortar | reducir *link*_
۰ _${usedPrefix}pinterest | pinterest2 *texto*_
۰ _${usedPrefix}ssweb | capturar | captura *link*_
۰ _${usedPrefix}animeinfo *nombre del anime*_
۰ _${usedPrefix}wpanime | fondoanime_
۰ _${usedPrefix}verinstagram | verig |igver *usuario*_
۰ _${usedPrefix}ighistorias|historiasig *usuario*_
۰ _${usedPrefix}twittervideo | twvid *link de twitter*_
۰ _${usedPrefix}wikipedia | wiki | internet *texto*_
۰ _${usedPrefix}spotify | spotimusica *autor, cancion*_
۰ _${usedPrefix}frase *escriba un número (1 - 99)*_
۰ _${usedPrefix}wpaesthetic | fondoaesthetic_

┏⁷━━━━━━━━━━━━━━━━━┓
┃ *GESTION DE GRUPOS* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🔐 _${usedPrefix}admins *texto*_ 
┣ ↠🔒 _${usedPrefix}añadir *numero*_ (desactivado)
┣ ↠🔐 _${usedPrefix}sacar @tag_ (desactivado)
┣ ↠🔒 _${usedPrefix}save *@tag + nombre de contacto*_
┣ ↠🔐 _${usedPrefix}daradmin | darpoder *@tag*_
┣ ↠🔒 _${usedPrefix}quitaradmin | quitarpoder *@tag*_
┣ ↠🔐 _${usedPrefix}grupo *abierto / cerrado*_
┣ ↠🔒 _${usedPrefix}enable welcome_
┣ ↠🔐 _${usedPrefix}disable welcome_
┣ ↠🔒 _${usedPrefix}enable antilink_ *(WhatsApp)*
┣ ↠🔐 _${usedPrefix}disable antilink_ 
┣ ↠🔒 _${usedPrefix}enable antilink2_ *(https:)*
┣ ↠🔐 _${usedPrefix}disable antilink2_
┣ ↠🔒 _${usedPrefix}enable delete_
┣ ↠🔐 _${usedPrefix}disable  delete_ 
┣ ↠🔒 _${usedPrefix}link_
┣ ↠🔐 _${usedPrefix}notificar | hidetag *texto*_
┣ ↠🔒 _${usedPrefix}setname *Nuevo nombre del grupo*_
┣ ↠🔐 _${usedPrefix}setdesc *Nueva descripción grupo*_
┣ ↠🔒 _${usedPrefix}infogrupo_
┣ ↠🔐 _${usedPrefix}invocar *texto*_
┣ ↠🔒 _${usedPrefix}del *responder a un mensaje del bot*_
┣ ↠🔐 _${usedPrefix}fantasmas_
┣ ↠🔒 _${usedPrefix}banchat_
┣ ↠🔐 _${usedPrefix}unbanchat_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *CREADORES*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🎨 _${usedPrefix}s_
┣ ↠🎨 _${usedPrefix}sticker_
┣ ↠🎨 _${usedPrefix}semoji | emoji_
┣ ↠🎨 _${usedPrefix}emojimix 🐱+😼_
┣ ↠🎨 _${usedPrefix}wasted_
┣ ↠🎨 _${usedPrefix}stonks_
┣ ↠🎨 _${usedPrefix}trash *Responda a una foto*_
┣ ↠🎨 _${usedPrefix}sgay *Responda a una foto*_
┣ ↠🎨 _${usedPrefix}circle *Responda a una foto*_
┣ ↠🎨 _${usedPrefix}stickermaker_
┣ ↠🎨 _${usedPrefix}attp *texto*_
┣ ↠🎨 _${usedPrefix}attp2 | s1 | sa *texto*_
┣ ↠🎨 _${usedPrefix}stickerfilter | cs2_
┣ ↠🎨 _${usedPrefix}tomp3 | mp3 *responde a un video*_
┣ ↠🎨 _${usedPrefix}toimg | img *responde a un sticker*_
┣ ↠🎨 _${usedPrefix}togif | gif *responde a sticker/video*_
┣ ↠🎨 _${usedPrefix}ytcomentario | ytcomentar *texto*_
┣ ↠🎨 _${usedPrefix}blur *responde a una imagen*_
┣ ↠🎨 _${usedPrefix}jaal *Responda a una foto*_
┣ ↠🎨 _${usedPrefix}swm *imagen | video | gif*_
┣ ↠🎨 _${usedPrefix}tovideo *responde a una nota de voz*_
┣ ↠🎨 _${usedPrefix}wanted *Responda a una foto*_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *ESTILOS DE TEXTOS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *¡Una gran variedad de estilos de textos!*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🪄 _${usedPrefix}style *texto*_
┣ ↠🪄 _${usedPrefix}estilo *texto*_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *SUBIR ESTADOS A GATABOT*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *¡Sube estados a la cuenta de GataBot!*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠📸 _${usedPrefix}subirestado *texto / video|imagen*_
┣ ↠📸 _${usedPrefix}subirestado *texto / gif*_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *RANDOM|EXTRAS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🎳 _${usedPrefix}pubg_
┣ ↠🎯 _${usedPrefix}doraemon_
┣ ↠🎲 _${usedPrefix}jeni_
┣ ↠🎳 _${usedPrefix}jisoo_
┣ ↠🎯 _${usedPrefix}rose_
┣ ↠🎲 _${usedPrefix}wpmontaña | fondomontaña_
┣ ↠🎳 _${usedPrefix}wpgaming | fondogaming_
┣ ↠🎯 _${usedPrefix}randomwallpaper_
┣ ↠🎲 _${usedPrefix}compartirfoto_
┣ ↠🎳 _${usedPrefix}futbol_
┣ ↠🎯 _${usedPrefix}Messi_
┣ ↠🎲 _${usedPrefix}animal_
┣ ↠🎳 _${usedPrefix}meme_
┣ ↠🎯 _${usedPrefix}meme2_
┣ ↠🎲 _${usedPrefix}meme3_
┣ ↠🎳 _${usedPrefix}cat | gato | gata_
┣ ↠🎯 _${usedPrefix}dog | perro | perra_
┣ ↠🎲 _${usedPrefix}pikachu_
┣ ↠🎳 _${usedPrefix}waifu_
┣ ↠🎯 _${usedPrefix}blackpink_
┣ ↠🎲 _${usedPrefix}reto_
┣ ↠🎳 _${usedPrefix}verdad_
┣ ↠🎯 _${usedPrefix}imagenrandom | random | epico_
┣ ↠🎲 _${usedPrefix}neko_
┣ ↠🎳 _${usedPrefix}lolivid_
┣ ↠🎯 _${usedPrefix}iqtest | iq | inteligencia_
┣ ↠🎲 _${usedPrefix}kpopitzy_
┣ ↠🎳 _${usedPrefix}navidad_
┣ ↠🎯 _${usedPrefix}loli_
┣ ↠🎲 _${usedPrefix}gawrgura_
┣ ↠🎳 _${usedPrefix}miku_
┣ ↠🎯 _${usedPrefix}nyan_
┣ ↠🎲 _${usedPrefix}pat_
┣ ↠🎳 _${usedPrefix}itachi_
┣ ↠🎯 _${usedPrefix}slap_
┣ ↠🎲 _${usedPrefix}pasticker_
┣ ↠🎳 _${usedPrefix}perfil_
┣ ↠🎯 _${usedPrefix}scan | datos | escaneo_
┣ ↠🎲 _${usedPrefix}kpop_
┣ ↠🎳 _${usedPrefix}qr *texto*_
┣ ↠🎯 _${usedPrefix}afk | aviso | informo *motivo*_
┣ ↠🎲 _${usedPrefix}CristianoRonaldo_
┣ ↠🎳 _${usedPrefix}pregunta *pregunta*_
┣ ↠🎯 _${usedPrefix}mention | mensaje *texto*_
┣ ↠🎲 _${usedPrefix}spamchat *texto*_
┣ ↠🎳 _${usedPrefix}traducir es *texto*_
┣ ↠🎯 _${usedPrefix}zodiac | zodiaco *AAAA MM DD*_
┣ ↠🎲 _${usedPrefix}readmore | leermas *texto1| texto2*_
┣ ↠🎳 _${usedPrefix}calc | calculadora *expresión mat.*_ 
┣ ↠🎯 _${usedPrefix}spamwa *numero|texto|cantidad*_
┣ ↠🎲 _${usedPrefix}readqr *responde a un código QR*_
┣ ↠🎳 _${usedPrefix}anime *random / waifu / husbu /neko*_
┣ ↠🎯 _${usedPrefix}agendar *@tag + nombre contacto*_
┣ ↠🎲 _${usedPrefix}guardar *@tag + nombre contacto*_
┣ ↠🎳 _${usedPrefix}spam *numero|texto|cantidad*_ 
┣ ↠🎯 _${usedPrefix}spoiler | hidetext *texto1| texto2*_
┣ ↠🎲 _${usedPrefix}experiencia | exp
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *COMANDOS +18*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *Usalo si el grupo te lo permite*
┃ *NO nos hacemos responsables*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🔞 _${usedPrefix}labiblia_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *EFECTOS PARA AUDIOS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *Responde a un audio o nota de voz*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🎤 _${usedPrefix}bass_
┣ ↠🎤 _${usedPrefix}deep_
┣ ↠🎤 _${usedPrefix}earrape_
┣ ↠🎤 _${usedPrefix}fast_
┣ ↠🎤 _${usedPrefix}fat_
┣ ↠🎤 _${usedPrefix}nightcore_
┣ ↠🎤 _${usedPrefix}reverse_
┣ ↠🎤 _${usedPrefix}robot_
┣ ↠🎤 _${usedPrefix}slow_
┣ ↠🎤 _${usedPrefix}tupai
┣ ↠🎤 _${usedPrefix}smooth_
┣ ↠🎤 _${usedPrefix}blown_
┣ ↠🎤 _${usedPrefix}vibracion *cantidad*_
┣ ↠🎤 _${usedPrefix}tovn *audio a nota de voz*
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *AUDIOS|MENU* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🔊 _${usedPrefix}menu2_
┣ ↠🔊 _${usedPrefix}menuaudios_
┣ ↠🔊 _${usedPrefix}audios_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *CAJA DE ALMACENAMIENTO* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠📦 _${usedPrefix}caja_
┣ ↠📦 _${usedPrefix}almacen_
┣ ↠📦 _${usedPrefix}cjalmacen_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *CHAT ANONIMO*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *¡Escribe con alguien de forma anónima!* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠👤 _${usedPrefix}chatanonimo | anonimochat_
┣ ↠👤 _${usedPrefix}anonimoch_
┣ ↠👤 _${usedPrefix}start_
┣ ↠👤 _${usedPrefix}next_
┣ ↠👤 _${usedPrefix}leave_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *CONVIERTETE EN BOT*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠❇️ _${usedPrefix}stop_
┣ ↠❇️ _${usedPrefix}jadibot | serbot_
┣ ↠❇️ _${usedPrefix}getcode_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *LOGOS PERSONALIZADOS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🎀 _${usedPrefix}cementerio | logocementerio_
┣ ↠🪅 _${usedPrefix}cesped | logocesped_
┣ ↠🎀 _${usedPrefix}coffe | logocoffe_
┣ ↠🪅 _${usedPrefix}fire | logofire_
┣ ↠🎀 _${usedPrefix}flaming | logoflaming_
┣ ↠🪅 _${usedPrefix}lovemessages | lovemensajes_
┣ ↠🎀 _${usedPrefix}playa | logoplaya_
┣ ↠🪅 _${usedPrefix}logorandom_
┣ ↠🎀 _${usedPrefix}romanticdouble | romantico2_
┣ ↠🪅 _${usedPrefix}romanticmessages | romanticms_
┣ ↠🎀 _${usedPrefix}logosky_
┣ ↠🪅 _${usedPrefix}taza | logotaza_
┣ ↠🎀 _${usedPrefix}taza2 | logotaza2_
┣ ↠🪅 _${usedPrefix}technology | tecnologia_
┣ ↠🎀 _${usedPrefix}coff_
┣ ↠🪅 _${usedPrefix}lolice_
┣ ↠🎀 _${usedPrefix}simpcard_
┣ ↠🪅 _${usedPrefix}hornycard_ 
┣ ↠🎀 _${usedPrefix}lblackpink_
┣ ↠🪅 _${usedPrefix}logocorazon_
┣ ↠🎀 _${usedPrefix}tahta *texto*_
┣ ↠🪅 _${usedPrefix}nulis | notas *texto*_
┣ ↠🎀 _${usedPrefix}nulis2 | notas2 *texto*_
┣ ↠🪅 _${usedPrefix}lolice *@tag*_
┣ ↠🎀 _${usedPrefix}simpcard *@tag*_
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *LISTA DE LOGOS PERSONALIZADOS*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🔮 _${usedPrefix}logos_ *(lista)*
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━┓
┃ *PROPIETARIO/A DEL BOT*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠👑 _${usedPrefix}boost | acelerar_
┣ ↠💎 _${usedPrefix}restart_
┣ ↠👑 _${usedPrefix}banlist_
┣ ↠💎 _${usedPrefix}virtext1 | traba1_
┣ ↠👑 _${usedPrefix}actualizar | update_
┣ ↠👑 _${usedPrefix}bc *texto*_
┣ ↠💎 _${usedPrefix}bcgc *texto*_
┣ ↠👑 _${usedPrefix}bcbot *texto*_
┣ ↠💎 _${usedPrefix}setbye *@tag*_
┣ ↠👑 _${usedPrefix}banuser *@tag*_
┣ ↠💎 _${usedPrefix}enable *public*_
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
