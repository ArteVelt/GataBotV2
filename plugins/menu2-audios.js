let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Menu2.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
╌╌╌───  *Vélɑut* | *Bot*  ───╌╌╌    
*¡Hola! ${username}* ♡

📼 *MENU DE AUDIOS*
┌──────────────────┐
 ─ Solo escriba la palabra/frase. sin prefijo ⎪ (/ . # etc...) 
 ─ ۰ _Noche de paz_
 ─ ۰ _Audio hentai_
 ─ ۰ _Fiesta del admin_
 ─ ۰ _Fiesta del admin 2_
 ─ ۰ _Viernes_
 ─ ۰ _Me olvidé_
 ─ ۰ _Baneado_
 ─ ۰ _Feliz navidad_
 ─ ۰ _A nadie le importa_
 ─ ۰ _Sexo_
 ─ ۰ _Vete a la vrg_
 ─ ۰  _Ara ara_
 ─ ۰  _Un pato_
 ─ ۰  _Nyanpasu_
 ─ ۰  _Yamete_
 ─ ۰  _Te diagnostico con gay_
 ─ ۰  _Quien es tu sempai botsito 7w7_
 ─ ۰  _Bañate_
 ─ ۰  _Vivan los novios_
 ─ ۰  _Marica quien_
 ─ ۰  _Es puto_
 ─ ۰  _La biblia_
 ─ ۰  _Onichan_
 ─ ۰  _Feliz cumpleaños_
 ─ ۰  _Pasa pack Bot_
 ─ ۰  _Atencion grupo_
 ─ ۰  _Homero chino_
 ─ ۰  _Oh me vengo_
 ─ ۰  _Murio el grupo_
 ─ ۰  _Siuuu_
 ─ ۰  _Rawr_
 ─ ۰  _UwU_
 ─ ۰  _:c_
 ─ ۰  _a_
 ─ ۰  _Hey_
 ─ ۰  _Enojado_
 ─ ۰  _Enojada_
 ─ ۰  _Chao_
 ─ ۰  _Hentai_
 ─ ۰  _Triste_
 ─ ۰  _Estoy triste_
 ─ ۰  _Me pican los cocos_
 ─ ۰  _Contexto_
 ─ ۰  _Me voy_
 ─ ۰  _Tengo los calzones del admin_
 ─ ۰  _Entrada épica_ 
 ─ ۰  _Ingresa épicamente_
 ─ ۰  _Bv_
 ─ ۰  _Yoshi_
 ─ ۰  _No digas eso papu_
 ─ ۰  _Ma ma masivo_
 ─ ۰  _Masivo_
 ─ ۰  _Basado_
 ─ ۰  _Basada_
 ─ ۰  _Fino señores_
 ─ ۰  _Verdad que te engañe_
 ─ ۰  _Sus_
 ─ ۰  _Ohayo_
 ─ ۰  _La voz de hombre_
 ─ ۰  _Pero esto_
 ─ ۰  _Bien pensado Woody_
 ─ ۰  _Jesucristo_
 ─ ۰  _Wtf_
 ─ ۰  _Una pregunta_
 ─ ۰  _Que sucede_
 ─ ۰  _Hablame_
 ─ ۰ _Pikachu_
 ─ ۰ _Niconico_
 ─ ۰ _Yokese_
 ─ ۰ _Omaiga_
 ─ ۰ _Nadie te preguntó_
 ─ ۰ _Bueno si_
 ─ ۰ _Usted está detenido_
 ─ ۰ _No me hables_
 ─ ۰ _No chu_
 ─ ۰ _El pepe_
 ─ ۰ _Pokémon_
 ─ ۰ _No me hagas usar esto_
 ─ ۰ _Esto va para ti_
 ─ ۰ _Abduzcan_
 ─ ۰ _Joder_
 ─ ۰ _Hablar primos_
 ─ ۰ _Mmm_
 ─ ۰ _Orale_
 ─ ۰ _Me anda buscando anonymous_
 ─ ۰ _Blackpink in your area_
 ─ ۰ _Cambiate a Movistar_
 ─ ۰ _Momento equisde | Momento XD_
 ─ ۰ _Todo bien | 🧐_
 ─ ۰ _Te gusta el Pepino | 🥒_
 ─ ۰ _El tóxico_
 ─ ۰ _Moshi moshi_
 ─ ۰ _Calla Fan de BTS_
 ─ ۰ _Que tal grupo_
 ─ ۰ _Muchachos_
 ─ ۰ _Está Zzzz_
 ─ ۰ _Goku Pervertido_
 ─ ۰ _Potaxio | 🥑_
 ─ ۰ _Nico nico_
 ─ ۰ _El rap de Fernanfloo_
 ─ ۰ _Tal vez_
 ─ ۰ _Corte corte_
 ─ ۰ _Buenas noches_
 ─ ۰ _Porque ta tite_
 ─ ۰ _Eres Fuerte_
 ─ ۰ _Bueno Master | 🫂_
 ─ ۰ _No Rompas más | 💔_
 ─ ۰ _Traiganle una falda_
 ─ ۰ _Se están riendo de mí_
 ─ ۰ _Su nivel de pendejo_
 ─ ۰ _Elmo sabe donde vives_
 ─ ۰ _tunometecabrasaramambiche_
 ─ ۰ _Y este quien es_
 ─ ۰ _Motivación_
 ─ ۰ _En caso de una investigación_
 ─ ۰ _Buen día grupo | 🙌_
 ─ ۰ _Las reglas del grupo_
└──────────────────┘

`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu2']
handler.tags = ['General']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
