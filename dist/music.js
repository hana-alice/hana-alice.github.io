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
        name: "Comptine d'un autre été, l'après-midi",
        artist: 'Yann Tiersen',
        url: 'http://dl.stream.qqmusic.qq.com/M500002YVQYq44BL2W.mp3?vkey=04D6487D7F81A6DE2D36FD091DD017E7F64EA6F556C5D5F023826BE09DD099183AA948AD580278B48DDBAB52855413A595390BC1228733CF&guid=5150825362&fromtag=1',
        cover: 'http://p1.music.126.net/Btipb4gKCiaD6qU6Xyo-Yw==/3228166139193336.jpg?param=300x300',
      },
      {
        name: "Life Is Like A Boat",
        artist: 'Rie fu',
        url: 'http://dl.stream.qqmusic.qq.com/M500001UlXer3EBtS9.mp3?vkey=50567BD994B566002D65FB47DE7BEF20B6E35DA95FA3C0FABEF2DB196E0DDD078A37419D6F46B237040A1155AA8EA6ED00C07EB68FBF7EFA&guid=5150825362&fromtag=1',
        cover: 'http://p1.music.126.net/S2U-jVMYiJQfXVEaZnpANg==/4420036743668385.jpg?param=300x300',
      },
      {
        name: "ありがとう・・・",
        artist: 'KOKIA',
        url: 'http://dl.stream.qqmusic.qq.com/M500002gcAdb31SCb6.mp3?vkey=AB4B5E532585D2CC3840EB458FA2C9CF91EDFE8EF2E0F031B8343E765C6C1842F5B6D7FDCECE9A5AC0677B44B5532DAF9C1C2D5319A7F462&guid=5150825362&fromtag=1',
        cover: 'http://p1.music.126.net/nL1ZtgV4sNsoQ3_Zx_jGdA==/109951163596895882.jpg?param=300x300',
      },
      {
        name: "彩虹",
        artist: '乔楚熙',
        url: 'http://dl.stream.qqmusic.qq.com/M500000neHY33zpmYi.mp3?vkey=DCF36A484F9F97FAD6F790054D9A46CA2212486041A282BAE80E5597C21B461C16C058490019C652301DBD7723BEDEE600BF51C2151D8114&guid=5150825362&fromtag=1',
        cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000002XprJ21oyZsn.jpg',
      },
    ]
});