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
            name: '10 Ngàn Năm',
            singer: 'Prod\. Duckie',
            path: './assets/mp3/y2meta.com - 10 Ngàn Năm ( Prod. Duckie ) PC - Ron . Lyric video (128 kbps).mp3',
            image: './assets/img/10ngannam.png',
            lyric: `"Em phải làm như vậy, ... vì anh rất đáng chết <br>
            Đã từng có một cuộc tình yêu chân thật phô bày trước mặt của anh <br>
            Anh không biết tôn trọng nó <br>
            Đến khi mất đi anh ăn năn đã quá muộn rồi <br>
            Sự đau khổ này trên thế gian <br>
            Không có gì hơn được nữa đâu... <br>
            Nếu mà Trời cho anh cơ hội lựa lại một lần nữa <br>
            Thì anh sẽ nói với cô gái đó ba chữ này <br>
            "Anh yêu em"" <br>
            Sao không là ta của những lúc thường ngày <br>?
            Hmm, sao hôm nay anh buồn vậy <br>?
            Vì, có những nỗi niềm lặng thầm <br>
            Thôi, thôi xin em đừng nặng tâm <br>
            Vậy coi như, mình không thể sống chung, là sự chia ly của nhau trong đời người <br>
            Thì em yêu thương hãy, hãy cứ vui, để mai đây em nhớ lại chợt cười <br>
            Mình sẽ bên nhau ở muôn kiếp sau, hay sẽ không biết nhau <br>?
            Tim là sỏi đá thì cũng phải biết đau, yêu thương làm gì anh không luyến tiếc đâu <br>
            Biết có không em, mình sẽ lại tương phùng, tái ngộ bên trong hình hài khác <br>
            Gặp nhau, nhưng mà chỉ, cảm thấy lòng mơ hồ mang máng như lời một bài hát <br>
            Có biết không em, từ những sai sót đó <br>
            Anh chỉ mong em, gặp được ai tốt số <br>
            Người sẽ rước em bằng những dải mây hồng <br>
            Mà không phải thay lòng vì một ai trót nhớ <br>
            Hay phận trời, ta phải cứ vâng lời <br>
            Em sẽ chờ đến, đến một kiếp luân hồi <br>
            Để mình tìm nhau tự nhiên như cảm hứng <br>
            Đòi hòa vào nhau như một sự phản ứng <br>
            Hay lúc đó mình sẽ không nhận ra <br>
            Biết được đâu, em ơi duyên phận mà <br>
            Anh sẽ cố nhớ em từng là ai đây, từ cử chỉ, giọng nói từng chi tiết <br>
            Hãy là sao trời, mây trắng hoặc mùa thu, hoặc phiêu linh trong anh mỗi khi viết <br>
            Nếu là thánh thần anh biết mình toàn năng <br>
            Nguyện sẽ giới hạn cuộc tình này đến, 10 ngàn năm <br>
            Người tình hỡi dẫu có mấy lúc biết phải chia ly <br>
            Dù buồn đau cũng chẳng thế giúp ta giải quyết gì <br>
            Cảm nhận nhau qua từng nhịp thở <br>
            Hmmm, lê đôi chân anh đi tìm gì ở cuối chân trời <br>
            Chờ đợi điều diệu kỳ để mình mãn kiếp luân hồi <br>
            Hẹn em, đời sau, mình sẽ, tìm nhau, thêm một lần, vẹn duyên <br>
            Giữ em lại sâu nơi tiềm thức, xác thịt này một lần được mang <br>
            Thôi anh không hờn trách bởi vì đời người vốn dĩ là hợp tan <br>
            Mình lỡ làng đến khi vãn kiếp, em ơi xin hãy là gì hiện hữu <br>
            Em sẽ lại đến và rồi sẽ lại đi, anh vẫn kể lại những câu chuyện cũ <br>
            Rằng mình ngây thơ thế nào, ngu ngơ đến cười <br>
            Muốn mai này nên người vợ người chồng <br>
            Để tay bế và bồng, đứa bé đầu lòng, với chúng ta đó là mặt trời hồng <br>
            Nếu về một nhà càng mong mình đơn giản, sáng mỗi ngày em cài cho khuyên áo <br>
            Ra trước hiên em rót một cốc trà, sà vào lòng nhau ngắm dòng đời huyên náo <br>
            Hay là bờ cát và tiếng sóng dờn vang, em có nghe thấy lớp nhỏ cười giòn tan <br>
            Em muốn ở đâu? Khuất sâu nơi địa đàng hay là một căn nhà trên chốn đồi hoang <br>
            Vòng luân hồi làm người ta mệt mỏi, có em rồi đời sống này khỏe hơn <br>
            Làm người nội trợ cực nhọc đi ít nhiều, vì anh muốn nuôi mèo, nhà có cả trẻ con <br>
            Mà đúng phải lẽ ra, anh cần trách nhiệm, trưởng thành <br>
            Vươn cao cho gia đình dựa bóng <br>
            Dẫu sai lầm thì vẫn là kết quả, của thời thanh niên mình tràn trề nhựa sống <br>
            Cũng chẳng mơ tình đẹp như vườn hồng, sẽ úa tàn vội vàng chẳng mấy lâu <br>
            Anh chỉ mong mình sẽ mãi trường tồn, để nghìn đời vẫn muốn tìm thấy nhau <br>
            Người tình hỡi dẫu có mấy lúc biết phải chia ly <br>
            Dù buồn đau cũng chẳng thế giúp ta giải quyết gì <br>
            Cảm nhận nhau qua từng nhịp thở <br>
            Hmmm, lê đôi chân anh đi tìm gì ở cuối chân trời <br>
            Chờ đợi điều diệu kỳ để mình mãn kiếp luân hồi <br>
            Hẹn em, đời sau, mình sẽ, tìm nhau, thêm một lần, vẹn duyên <br>
            "Nếu mà có thể kì hạn lên mối tình yêu này được <br>
            Anh... <br>
            Anh hi vọng là... <br>
            Được 10 ngàn năm"`
        },
        {
            name: 'Chuyện đôi ta',
            singer: 'Emcee L, Muội',
            path: './assets/mp3/Chuyen Doi Ta (Lofi Mix) - Emcee L (Da LAB), Muoii - NhacHayVN.mp3',
            image: './assets/img/Chuyen-Doi-Ta-Lofi-Mix-Emcee-L-Da-LAB-Muoii.jpg',
            lyric: `Những cơn sóng xô lâu đài vỡ trong bóng đêm <br>
            Nỗi đau cứ như đang vội ghé thăm trái tim <br>
            Chiều hoàng hôn kéo theo mây đen về <br>
            Phủ kín trong tâm tư bóng hình em hoh <br>
            Ánh trăng dần khuất sau khu rừng <br>
            Chạy theo sau lưng anh ký ức không thể quên <br>
            Vì sau cơn mưa đêm qua <br>
            Không ai nhắc về chuyện đôi ta <br>
            Em vội vàng khoá con tim em trong một giây <br>
            Giọt sương nhẹ rớt theo cơn gió thu vội bay <br>
            Tình yêu chạy đến chân trời xa phút chốc đã khiến em gục ngã oh oh <br>
            Tựa lưng vào gốc cây chênh vênh em có thấy <br>
            Mây trời như cũng đã thành đôi (đã thành đôi) <br>
            Thôi đành cất những ký ức bên nhau xem như quên đi mối tình đầu <br>
            Uh <br>
            Những cơn sóng xô lâu đài vỡ trong bóng đêm <br>
            Nỗi đau cứ như đang vội ghé thăm trái tim <br>
            Chiều hoàng hôn kéo theo mây đen về <br>
            Phủ kín trong tâm tư bóng hình em hoh <br>
            Ánh trăng dần khuất sau khu rừng <br>
            Chạy theo sau lưng anh ký ức không thể quên <br>
            Vì sau cơn mưa đêm qua <br>
            Không ai nhắc về chuyện đôi ta <br>
            Kết bộ phim em rời đi mang theo chút nắng tàn phai <br>
            Xoã làn tóc cúi mặt khóc đâu cần thiết biết chuyện mai <br>
            Đôi mắt đen nhoè dần cánh tay gạt vội nước mắt rơi <br>
            No no no <br>
            Soạn vài dòng tin nhắn rồi đốt đi khung hình <br>
            Dậm vào màu son mới em cất bước đi <br>
            Giữa phố đông người nhưng nỗi cô đơn vẫn cuộn chặt vào em <br>
            Nana <br>
            Những cơn sóng xô <br>
            Vỡ trong bóng đêm <br>
            Hoàng hôn kéo theo mây đen về <br>
            Phủ kín trong tâm tư bóng hình em <br>
            Ánh trăng dần khuất sau khu rừng <br>
            Chạy theo sau lưng anh ký ức không thể quên <br>
            Vì sau cơn mưa đêm qua <br>
            Không ai nhắc về chuyện đôi ta <br>
            Những cơn sóng xô lâu đài vỡ trong bóng đêm <br>
            Nỗi đau cứ như đang vội ghé thăm trái tim <br>
            Chiều hoàng hôn kéo theo mây đen về <br>
            Phủ kín trong tâm tư bóng hình em hoh <br>
            Ánh trăng dần khuất sau khu rừng <br>
            Chạy theo sau lưng anh ký ức không thể quên <br>
            Vì sau cơn mưa đêm qua <br>
            Không ai nhắc về chuyện đôi ta (chuyện đôi ta chuyện đôi ta huh)`
        },
        {
            name: 'Điều chưa nói',
            singer: 'Tùa, CM1X',
            path: './assets/mp3/y2meta.com - Điều Chưa Nói - Tùa ft. CM1X (128 kbps).mp3',
            image: './assets/img/dieu-chua-noi.png',
            lyric: `Còn nhiều điều chưa nói <br>
            Chênh vênh em chẳng thấy đường ra <br>
            Vào một chiều thu qua <br>
            Một thoáng môi anh cười <br>
            Vụt sáng nơi chân trời anh biết không? <br>
            Rồi màn đêm xuống <br>
            Chỉ một người buồn tênh <br>
            Bỏ lại hết bao tháng ngày <br>
            Vì biết nếu như vậy sẽ tốt hơn <br>
            Biết có lúc chia tay <br>
            Mà sao trái tim vẫn đau thế này <br>
            Vỡ tan rồi, người bước đi rồi <br>
            Kỉ niệm cũng dần phai phôi <br>
            Mai đây khi khung trời của ta <br>
            Có thêm một người mới <br>
            Mùa đông sẽ ấm hơn <br>
            Khi trong tim có người mình thương <br>
            Biết có lúc chia tay <br>
            Mà sao trái tim vẫn đau thế này <br>
            Vỡ tan rồi, người bước đi rồi <br>
            Kỉ niệm cũng dần phai phôi <br>
            Mai đây khi khung trời của ta <br>
            Có thêm một người mới <br>
            Mùa đông sẽ ấm hơn <br>
            Khi trong tim có người mình thương <br>
            Em đã không khóc khi mình chia tay <br>
            Anh cũng chẳng giữ dù là phút giây <br>
            Em đã không khóc khi mình chia tay <br>
            Anh cũng chẳng giữ dù là phút giây`
        },
        {
            name: 'ID-072019',
            singer: 'W/N',
            path: './assets/mp3/id 072019 - W_N - NhacHayVN.mp3',
            image: './assets/img/id-072019-W-N.jpg',
            lyric: `Có cơn mưa nào đôi mình đi qua <br>
            Anh đến bên em ngày đôi mình chia xa <br>
            Mỗi lá rơi bên hồ nỗi cô đơn lớn lên <br>
            Mùa thu ấy em không còn bên cạnh anh nữa <br>
            Anh vẫn đứng nơi đây chờ em cùng cơn mưa <br>
            Chúng ta sau này chẳng có chúng ta bây giờ <br>
            Một người âm thầm đứng dưới mưa nhìn em <br>
            Một người giữa thành phố vẫn cứ chờ em <br>
            Vì sao cứ nơi đó mà anh dần xa nơi đâu <br>
            Giờ này chỉ nỗi nhớ cứ vơi nhiều thêm <br>
            Giờ này chỉ mình ta với những tháng năm dài <br>
            Có khi em chẳng còn yêu anh như trái tim ta từng chung lối đi <br>
            Anh đi một vòng thị trấn trên con đường cũ ta đi <br>
            Vòng bánh xe như thế cứ chạy <br>
            Hai tuyến đường ngược chiều ta nghĩ <br>
            Chắc em cũng quên tên đường này rồi <br>
            Nhánh hoa sữa nhẹ bay đi khắp lối <br>
            Em cũng giống như anh của ngày trước <br>
            Hai con đường về nhà khi sắp tối <br>
            Anh còn nhớ hồi đó ta đi học <br>
            Lúc tan trường thì em ngồi sau xe <br>
            Lúc em buồn thì anh hay trêu chọc <br>
            Bảo em cười kể chuyện cho nhau nghe <br>
            Rồi vào quán mua món mà em thích <br>
            Em mỉm cười làm anh cũng vui lây <br>
            Nhưng hồi đó thì vẫn là hồi đó <br>
            Anh cảm ơn em đã để lại chuỗi ngày <br>
            Một người âm thầm đứng dưới mưa nhìn em <br>
            Một người giữa thành phố vẫn cứ chờ em <br>
            Vì sao cứ nơi đó mà anh dần xa nơi đâu <br>
            Giờ này chỉ nỗi nhớ cứ vơi nhiều thêm <br>
            Giờ này chỉ mình ta với những tháng năm dài <br>
            Có khi em chẳng còn yêu anh như trái tim ta từng chung lối đi <br>
            Có cơn mưa nào đôi mình đi qua <br>
            Anh viết cho em bài ca mùa yêu xa <br>
            Mỗi lá rơi bên hồ nỗi cô đơn lớn lên <br>
            Mùa thu ấy anh không còn bên cạnh em nữa <br>
            Em vẫn đứng nơi đây chờ anh cùng cơn mưa <br>
            Chúng ta sau này chẳng có chúng ta bây giờ`
        },
        {
            name: 'Sau cơn mưa',
            singer: 'CoolKid, Quang Anh Rhyder',
            path: './assets/mp3/y2meta.com - CoolKid - Sau Cơn Mưa (ft. Rhyder) (128 kbps).mp3',
            image: './assets/img/sau-con-mua.png',
            lyric: `Nhìn em đẹp hơn khi nở nụ cười trên môi <br>
            Nhưng chỉ toàn u buồn, khi người ở bên tôi <br>
            Em tìm một ai khác, em cần một vòng tay khác <br>
            Một chàng trai khác khiến em vui hơn là anh <br>
            Và rồi hàng triệu khúc mắc chỉ vỏn vẹn vài tích tắc <br>
            Và anh đã hiểu rằng <br>
            Oh my girl, em giấu nhiều điều nhưng chẳng phải là anh không biết đâu (oh-oh) <br>
            Chỉ là trước khi rời đi, lòng anh muốn nói vài lời <br>
            Đừng để ai khiến em khóc thật nhiều như anh đã từng thế <br>
            Đằng sau cơn mưa sẽ có cầu vồng cùng em trên lối về <br>
            Anh chỉ cười thế thôi, ghì chặt khoé môi <br>
            Vì biết rằng câu chuyện cũng đã rồi <br>
            Những mẩu chuyện xé đôi, kỷ niệm ghé chơi <br>
            Giờ này hai đứa hai nơi (yeah we don't talk anymore) <br>
            Ah-ah <br>
            Ah-ah-ah-ah <br>
            Ah-ah <br>
            Ah-ah-ah-ah <br>
            Peace guy <br>
            Và nếu muốn khóc, cứ để nước mắt rơi hết đi <br>
            Anh không muốn phải thấy em bên đấy sẽ ướt mi thêm vì <br>
            Em đã cố giấu bao nỗi đau <br>
            Do anh đã cố chấp nên giờ đành phải lạc nhau <br>
            Chỉ một vài lời nói, vô tình khiến em đau <br>
            Mặt trời không thể thắng được khi cơn giông dần đi tới <br>
            Và em cần một người mới, một người tốt hơn anh <br>
            Cả bầu trời chuyển tối, yeah we don't talk anymore <br>
            Em đã rất vui khi nhận tình cảm từ anh ta nhưng ngoại trừ anh ra bây giờ thì khác <br>
            Anh đành phải chịu thua thôi, anh có một vài lời muốn nói <br>
            Đừng để ai khiến em khóc thật nhiều như anh đã từng thế <br>
            Đằng sau cơn mưa sẽ có cầu vồng cùng em trên lối về <br>
            Anh chỉ cười thế thôi, ghì chặt khoé môi <br>
            Vì biết rằng câu chuyện cũng đã rồi <br>
            Những mẩu chuyện xé đôi, kỷ niệm ghé chơi <br>
            Giờ này hai đứa hai nơi (we don't talk anymore) <br>
            Ah-ah <br>
            Ah-ah-ah-ah <br>
            Ah-ah <br>
            Ah-ah-ah-ah`
        },
        {
            name: 'Time Machine',
            singer: 'Mj Apanay, Aren Park',
            path: './assets/mp3/y2meta.com - [Vietsub + Lyrics] Time machine - mj apanay (feat. aren park) (128 kbps).mp3',
            image: './assets/img/time-machine.png',
            lyric: `Staring at stars, watching the moon <br>
            Hoping that one day they'll lead me to you <br>
            Wait every night 'cause if a star falls <br>
            I'll wish to go back to the times that I loved <br>
            Why do the stars shine so bright in the sky <br>
            If most of the people are sleeping at night? <br>
            Why do we only have one chance at life? <br>
            I wish I could go back in time <br>
            Pictures remind me of things I forgot <br>
            But also of all of the things that I've lost <br>
            Can't get them back, they won't fall from above <br>
            So I try to forget all the times that I loved <br>
            Why do we remember beautiful lies? <br>
            We end up regretting them most of our lives <br>
            Why do we only have one chance to try? <br>
            I wish I could go back in time <br>
            Each time I fall asleep <br>
            I always see you there in my dreams <br>
            It's like going back in a time machine <br>
            I know when I wake up, your time with me will end <br>
            So don't let me fall asleep <br>
            I don't wanna meet you there in my dreams <br>
            I know that we'll never build a time machine <br>
            It's time for me to try and wake up again <br>
            I fall asleep <br>
            But honestly <br>
            I wanna see you in my dreams <br>
            I'm trying to wake up again`
        },
        {
            name: 'Ánh chiều tàn',
            singer: 'Not singer',
            path: './assets/mp3/y2meta.com - D Empty - ÁNH CHIỀU TÀN ft. Poll (Prod. by Vic) _ OFFICIAL LYRIC VIDEO (128 kbps).mp3',
            image: './assets/img/anhchieutan.png',
            lyric: `Not lyric`
        },
        {
            name: 'ID-T41104',
            singer: 'Not singer',
            path: './assets/mp3/y2meta.com - id T41104-W_n (267) Lyric Video (128 kbps).mp3',
            image: './assets/img/idt41104.png',
            lyric: `Not lyric`
        },
        {
            name: 'Liệu đến bao giờ',
            singer: 'Not singer',
            path: './assets/mp3/y2meta.com - [ Demo ] Liệu Đến Bao Giờ - Nguyenn (128 kbps).mp3',
            image: './assets/img/lieudenbaogio.png',
            lyric: `Not lyric`
        },
        {
            name: 'Nếu lúc đó',
            singer: 'Not singer',
            path: './assets/mp3/y2meta.com - tlinh - nếu lúc đó _ OFFICIAL VISUALIZER (128 kbps).mp3',
            image: './assets/img/neulucdo.png',
            lyric: `Not lyric`
        },
        {
            name: 'Sài gòn hôm nay mưa',
            singer: 'Not singer',
            path: './assets/mp3/y2meta.com - Sài Gòn Hôm Nay Mưa (Lo-fi) - Hoàng Duyên ft. JSOL (128 kbps).mp3',
            image: './assets/img/saigonhomnaymua.png',
            lyric: `Not lyric`
        },
        {
            name: 'Sa vào nguy hiểm',
            singer: 'Not singer',
            path: './assets/mp3/y2meta.com - Mashup Trái Tim Trống Rỗng + Sa Vào Nguy Hiểm + Không Còn Nước Mắt 空心 + 悬溺 + 没有泪点 (128 kbps).mp3',
            image: './assets/img/savaonguyhiem.png',
            lyric: `Not lyric`
        },
        {
            name: 'Thằng điên',
            singer: 'Not singer',
            path: './assets/mp3/y2meta.com - Thằng Điên _ Justatee x Phương Ly _ slowed + reverb (128 kbps).mp3',
            image: './assets/img/thangdien.png',
            lyric: `Not lyric`
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

