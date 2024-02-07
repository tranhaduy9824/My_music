const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const name = $('.play-music h2');
const singer = $('.play-music p');
const path = $('.play-music audio');
const image = $('.play-music img');
const tassel = $('#tassel');
const playBtn = $('.play-music .play');
const playIng = $('.play-music .play.playing');
const currentTimeMusic = $('.current-time');
const lengthMusic = $('.length-music');
const next = $('.next');
const back = $('.back');
const random = $('.random');
const undo = $('.undo');

const main = {
    currentIndex: 0,
    isPlaying: false,   
    isRandom: false,
    isUndo: false,
    musics: [
        {
            name: 'Có duyên không nợ',
            singer: 'No singer',
            path: './assets/mp3/coduyenkhongno.mp3',
            image: './assets/img/a1.jpg',
            lyric: `No lyric`
        },
        {
            name: 'Đừng quay đi em hãy nhìn lại',
            singer: 'No singer',
            path: './assets/mp3/dungquaydi.mp3',
            image: './assets/img/a2.jpg',
            lyric: `No lyric`
        },
        {
            name: 'Em cứ bước đi đi',
            singer: 'No singer',
            path: './assets/mp3/emcubuocdidi.mp3',
            image: './assets/img/a3.jpg',
            lyric: `No lyric`
        },
        {
            name: 'Em hát ai nghe',
            singer: 'No singer',
            path: './assets/mp3/emhatainghe.mp3',
            image: './assets/img/a4.jpg',
            lyric: `No lyric`
        },
        {
            name: 'Giang hải không độ nàng',
            singer: 'No singer',
            path: './assets/mp3/gianghaikhongdonang.mp3',
            image: './assets/img/a5.jpg',
            lyric: `No lyric`
        },
        {
            name: 'Khi yêu nào đâu ai muốn',
            singer: 'No singer',
            path: './assets/mp3/khiyeunaodauaimuon.mp3',
            image: './assets/img/a5.jpg',
            lyric: `No lyric`
        },
        {
            name: 'Lỗi tại mưa',
            singer: 'No singer',
            path: './assets/mp3/loitaimua.mp3',
            image: './assets/img/10ngannam.png',
            lyric: `No lyric`
        },
        {
            name: 'Quá khứ anh không thể quên',
            singer: 'No singer',
            path: './assets/mp3/quakhuanhkhongthequen.mp3',
            image: './assets/img/thangdien.png',
            lyric: `No lyric`
        },
        {
            name: 'Rựu mừng hóa người dưng',
            singer: 'No singer',
            path: './assets/mp3/ruumunghoanguoidung.mp3',
            image: './assets/img/saigonhomnaymua.png',
            lyric: `No lyric`
        },
        {
            name: 'Tấm lòng son',
            singer: 'No singer',
            path: './assets/mp3/tamlongson.mp3',
            image: './assets/img/vansenhoem.png',
            lyric: `No lyric`
        },
        {
            name: 'Thuyền Quyên',
            singer: 'No singer',
            path: './assets/mp3/thuyenquyen.mp3',
            image: './assets/img/savaonguyhiem.png',
            lyric: `No lyric`
        },
        {
            name: 'Vở kịch của em',
            singer: 'No singer',
            path: './assets/mp3/vokichcuaem.mp3',
            image: './assets/img/a7.png',
            lyric: `No lyric`
        },
    ],
    render: function() {
        const html1 = this.musics.map(function(music) {
            return `<div class="item-music">
                <img src="${music.image}" alt="">
                <div class="info-music">
                    <h5>${music.name}</h5>
                    <p><i>${music.singer}</i></p>
                </div>
            </div>`
        });
        $('.list-music').innerHTML = html1.join('');

        const html2 = this.musics.map(function(music) {
            return `<div class="item-lyric">
                <p>${music.lyric}</p>
            </div>`
        });
        $('.lyrics-music').innerHTML = html2.join('');
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentMusic', {
            get: function() {
                return this.musics[this.currentIndex];
            }
        })
    },
    loadCurrentMusic: function() {
        name.innerHTML = this.currentMusic.name;
        singer.innerHTML = this.currentMusic.singer;
        path.src = this.currentMusic.path;
        image.src = this.currentMusic.image;

        path.oncanplay = function() {
            const lengthMinutes = Math.floor(path.duration/60);
            const lengthSeconds = Math.floor(path.duration%60);
            lengthMusic.innerHTML = `${lengthMinutes.toString().padStart(2, '0')}:${lengthSeconds.toString().padStart(2, '0')}`;
        }
    },
    selectMusic: function() {
        const itemMusics = $$('.item-music');
        const lyricMusics = $$('.item-lyric');

        itemMusics[0].classList.add('active')
        lyricMusics[0].classList.add('active')
        itemMusics.forEach(function(item, index) {
            item.onclick = function() {
                const itemMusicActive = $('.item-music.active');
                const lyricMusicActive = $('.item-lyric.active');
                
                itemMusicActive.classList.remove('active');
                lyricMusicActive.classList.remove('active');

                item.classList.add('active');
                lyricMusics[index].classList.add('active');

                main.currentIndex = index;
                main.loadCurrentMusic();
                path.play();
            }
        })
    },
    nextMusic: function() {
        const itemMusics = $$('.item-music');
        const lyricMusics = $$('.item-lyric');

        itemMusics[main.currentIndex].classList.remove('active');
        lyricMusics[main.currentIndex].classList.remove('active');

        main.currentIndex++;
        if (main.currentIndex >= main.musics.length) {
            main.currentIndex = 0;
        }

        itemMusics[main.currentIndex].classList.add('active');
        lyricMusics[main.currentIndex].classList.add('active');

        main.loadCurrentMusic();
    },
    backMusic: function() {
        const itemMusics = $$('.item-music');
        const lyricMusics = $$('.item-lyric');

        itemMusics[main.currentIndex].classList.remove('active');
        lyricMusics[main.currentIndex].classList.remove('active');

        main.currentIndex--;
        if (main.currentIndex < 0) {
            main.currentIndex = main.musics.length-1;
        }

        itemMusics[main.currentIndex].classList.add('active');
        lyricMusics[main.currentIndex].classList.add('active');

        main.loadCurrentMusic();
    },
    handlePlay: function() {
        const imageAnimate = image.animate(
            [
                {
                    transform: 'rotate(360deg)' 
                }
            ],
            {
                duration: 12000,
                iterations: Infinity
            }
        )
        imageAnimate.pause();   

        playBtn.onclick = function() {
            if (main.isPlaying) {
                path.pause();
            } else {
                path.play();
            }
        }
        path.onplay = function() {
            main.isPlaying = true;
            playBtn.classList.add('playing');
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            imageAnimate.play();   
        }
        path.onpause = function() {
            main.isPlaying = false;
            playBtn.classList.remove('playing');
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            imageAnimate.pause();   
        }
        path.ontimeupdate = function() {
            const itemMusics = $$('.item-music');
            const lyricMusics = $$('.item-lyric');

            if (path.duration) {
                tassel.value = Math.floor(path.currentTime/path.duration*1000); 
                
                const currentMinutes = Math.floor(path.currentTime/60);
                const currentSeconds = Math.floor(path.currentTime%60);
                currentTimeMusic.innerHTML = `${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`;

                if (Math.floor(path.currentTime)>=Math.floor(path.duration)) {
                    if (main.isRandom===false && main.isUndo===false) {
                        main.nextMusic();
                        path.play();
                    } else if (main.isRandom===true){
                        itemMusics[main.currentIndex].classList.remove('active');
                        lyricMusics[main.currentIndex].classList.remove('active');

                        main.currentIndex = Math.floor(Math.random() * (main.musics.length));

                        itemMusics[main.currentIndex].classList.add('active');
                        lyricMusics[main.currentIndex].classList.add('active');

                        main.loadCurrentMusic();
                        path.play();
                    } else {
                        path.currentTime===0;
                        main.loadCurrentMusic();
                        path.play();
                    }
                }
            }
        }
        tassel.onchange = function() {
            const valueNew = Math.floor(tassel.value*path.duration/1000);
            path.currentTime = valueNew;
        }
        next.onclick = function() {
            main.nextMusic();
            path.play();
        }
        back.onclick = function() {
            main.backMusic();
            path.play();
        }
        random.onclick = function() {
            if (main.isRandom) {
                main.isRandom = false;
                random.classList.remove('active');
            } else {
                main.isRandom = true;
                random.classList.add('active');
            }
        };
        undo.onclick = function() {
            if (main.isUndo) {
                main.isUndo = false;
                undo.classList.remove('active');
            } else {
                main.isUndo = true;
                undo.classList.add('active');
            }
        }
    },
    start: function () {
        this.render();

        this.defineProperties();
        this.loadCurrentMusic();
        this.selectMusic();
        this.handlePlay();
    }
}   

main.start();

