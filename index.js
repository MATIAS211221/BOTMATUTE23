/*
* ¡¡¡JANGAN UBAH-UBAH INFO!!!
* ¡¡"JANGAN MODAL NAMA DOANG BRO!!!
* GUIÓN DE ARIS187 ID
* JANGAN MODAL NAMA DOANG BOSQ
* HARGAILAH YG MEMBUAT SCRIPT INI BOSQ
* ¡¡¡JANGAN UBAH-UBAH INFO!!!
* ARIS187 ID
* ¡¡¡BOLEH UBAH TAPI KECUALI INFO!!!
*/
const qrcode = require("qrcode-terminal")
momento const = require("moment-timezone")
const fs = require("fs")

tiempo const = momento().tz('Asia/Jakarta').formato("HH:mm:ss")
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const bulan = arrayBulan[moment().format('MM') - 1]

const config = {
    A187: '📍MATUTE📍',
  
    aktif: '21 DEC',
  
    qué pasa: 'https://wa.me+6591011777,
    tanggal: `FECHA: ${momento().formato('DD')} ${bulan} ${momento().formato('YYYY')}`,
    waktu: tiempo
}

const { A187, tanggal, waktu, instagram, whatsapp, youtube, nomer, aktif, ontime } = Configurar...

const
{
   WAConexión,
   MessageType,
   Presencia,
   MensajeOpciones,
   Mimetipo,
   Mensaje de WALocation,
   ...CON LOS TIPOS DE MENSAJES,
   Reconectar el modo,
   Agente sustituto,
   waChatKey,
} = require("@adiwajshing/baileys")

const {
    ayuda,
    menu1,
    menu2,
    menu3,
    información,
    donar,
    ...de acuerdo,
    artinama,
    corona,
    kbbi,
    Descargar imagen,
    igStalk,
    jodoh,
    jsholat,
    lirik,
    nulis,
    leerTextInImagen,
    pantun,
    citas,
    Busca en Youtube,
    Surah,
    tiktokdl,
    tweetdl,
    wiki,
    ytdl,
    Bucin,
    cersex,
    cerpen,
    puisi1,
    puisi2,
    resep,
    namaninja,
    un poco,
    nekonime,
    cektanggal,
    acorde,
    zodiak,
    fb,
    simi,
    wikien,
    ...espasmos,
    spamcall,
    spamgmail,
    covidero,
    infoanime,
    gay,
    ytmp3,
    ssweb,
    infogempa,
    indohot,
    loli,
    ttp,
    mapa,
    waifu
} = require('./lib')

const { animPict, cewePict, cowoPict } = require('./lib/pict')

Const. = require("child_process")

Const cliente = nueva conexión WAC.

cliente.on('qr', qr => {
   qrcode.generate(qr, { pequeño: verdadero })
   console.log(`[ ${time} ] El código QR está listo, suscríbete a Samu330`)
})

client.on('credenciales-actualizadas', () => {
   const authInfo = client.base64EncodedAuthInfo()
   console.log(¡actualización de credenciales!)

   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})

fs.existsSync('./sesión.json') && cliente.loadAuthInfo('./sesión.json')

client.connect();

// cliente.on('user-presence-update', json => consola.log(json.id + ' presencia es => ' + json.type)) || consola.log(`${time}: Bot por ig:@aditiaalfians`)

client.on('message-status-update', json => {
   Const participante = json.participante ? (' + json.participant + ')' : ''
   console.log(`[ ${time} ] => bot de ig:@_sadboy.ig`)
})

client.on('message-new', async (m) => {
   const messageContent = m.message
   const text = m.message.conversation
   const messageType = Object.keys(messageContent)[0]

   

   valor const = text.split(' ').splice(1).join(' ')

   let id = m.key.remoteJid
   let imageMessage = m.message.imageMessage

   prefijo const = messageType === 'imageMessage' ? imageMessage.caption.split(' ')[0].split(re)[1] : text.split(' ')[0].split(re)[1] // prefijo múltiple

   console.log(`[ ${time} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${texto}`);

   switch (prefijo) {
       caso "ayuda":
           client.sendMessage(id, help.help(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
       caso 'menu1':
           client.sendMessage(id, menu1.menu1(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
       caso 'menu2':
           client.sendMessage(id, menu2.menu2(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
       caso 'menu3':
           client.sendMessage(id, menu3.menu3(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
      caso "donar":
           client.sendMessage(id, donate.donate(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break          
      información del caso:
           client.sendMessage(id, info.info(id, A187, tanggal, waktu, whatsapp, youtube, instagram,aktif, nomer, ontime), MessageType.text)
           break             
       caso 'nulis':
           nulis(valor)
               .entonces(datos => {
                   client.sendMessage(id, '[ESPERE UN MOMENTO...', MessageType.text)
                   client.sendMessage(id, data, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       caso "decir":
           wait wait client.sendMessage(id, value, MessageType.text)
           break
       caso 'ytmp3':
           ytdl('mp3', valor)
               .entonces(datos => {