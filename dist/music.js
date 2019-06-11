const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "All Out of Love",
        artist: 'Sara Lov',
        url: 'http://dl.stream.qqmusic.qq.com/M500004QuAft1CsnCx.mp3?vkey=E311A5D5837337C849229A75BFCEC09C518CA4EDB0FD03528AC88102FC9585F11D64A3D68C15E1B350FA9E85D08BBB395F8BC3B4A9378189&guid=5150825362&fromtag=1',
        cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000001oITZd3g16SO.jpg',
      },
      {
        name: "夜车",
        artist: '曾轶可',
        url: 'http://m10.music.126.net/20190611212944/644c7199236690ee840bc45df6168049/ymusic/5e8e/ba1a/ece7/4572313ab4ee7337ec28d2e0c87a14a0.mp3',
        cover: 'http://p1.music.126.net/s7Cn8bl21KY7kGiBWMdaFg==/109951163105666561.jpg?param=300x300',
      },
      {
        name: "Comptine d'un autre été, l'après-midi",
        artist: 'Yann Tiersen',
        url: 'http://m10.music.126.net/20190611213127/b18166c9f4aac2c69637eb9161d72bf8/ymusic/5bca/9e2a/6170/373ebc0770ae7f5e2f373278184c5c27.mp3',
        cover: 'http://p1.music.126.net/Btipb4gKCiaD6qU6Xyo-Yw==/3228166139193336.jpg?param=300x300',
      },
      {
        name: "Life Is Like A Boat",
        artist: 'Rie fu',
        url: 'http://m10.music.126.net/20190611213259/b9c2f68f6cdeb96eba6fc1c7223cf5a6/ymusic/a10c/93c0/6de7/41aeb4316ad36aecb5f8673b296ec713.mp3',
        cover: 'http://p1.music.126.net/S2U-jVMYiJQfXVEaZnpANg==/4420036743668385.jpg?param=300x300',
      },
      {
        name: "ありがとう・・・",
        artist: 'KOKIA',
        url: 'http://m10.music.126.net/20190611213526/27561aef018c340ce01c51d81b055766/ymusic/7140/3f39/2e2c/1b4f6f62e2ee8613a70a64b59ccd6a57.mp3',
        cover: 'http://p1.music.126.net/nL1ZtgV4sNsoQ3_Zx_jGdA==/109951163596895882.jpg?param=300x300',
      },
    ]
});