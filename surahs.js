const surahs = [

{ id:1, name:"Al-Fatihah", arabic:"الفاتحة", verses:7, type:"Makki" },
{ id:2, name:"Al-Baqarah", arabic:"البقرة", verses:286, type:"Madani" },
{ id:3, name:"Aal-Imran", arabic:"آل عمران", verses:200, type:"Madani" },
{ id:4, name:"An-Nisa", arabic:"النساء", verses:176, type:"Madani" },
{ id:5, name:"Al-Ma'idah", arabic:"المائدة", verses:120, type:"Madani" },
{ id:6, name:"Al-An'am", arabic:"الأنعام", verses:165, type:"Makki" },
{ id:7, name:"Al-A'raf", arabic:"الأعراف", verses:206, type:"Makki" },
{ id:8, name:"Al-Anfal", arabic:"الأنفال", verses:75, type:"Madani" },
{ id:9, name:"At-Tawbah", arabic:"التوبة", verses:129, type:"Madani" },
{ id:10, name:"Yunus", arabic:"يونس", verses:109, type:"Makki" },
{ id:11, name:"Hud", arabic:"هود", verses:123, type:"Makki" },
{ id:12, name:"Yusuf", arabic:"يوسف", verses:111, type:"Makki" },
{ id:13, name:"Ar-Ra'd", arabic:"الرعد", verses:43, type:"Madani" },
{ id:14, name:"Ibrahim", arabic:"إبراهيم", verses:52, type:"Makki" },
{ id:15, name:"Al-Hijr", arabic:"الحجر", verses:99, type:"Makki" },
{ id:16, name:"An-Nahl", arabic:"النحل", verses:128, type:"Makki" },
{ id:17, name:"Al-Isra", arabic:"الإسراء", verses:111, type:"Makki" },
{ id:18, name:"Al-Kahf", arabic:"الكهف", verses:110, type:"Makki" },
{ id:19, name:"Maryam", arabic:"مريم", verses:98, type:"Makki" },
{ id:20, name:"Ta-Ha", arabic:"طه", verses:135, type:"Makki" },
{ id:21, name:"Al-Anbiya", arabic:"الأنبياء", verses:112, type:"Makki" },
{ id:22, name:"Al-Hajj", arabic:"الحج", verses:78, type:"Madani" },
{ id:23, name:"Al-Mu'minun", arabic:"المؤمنون", verses:118, type:"Makki" },
{ id:24, name:"An-Nur", arabic:"النور", verses:64, type:"Madani" },
{ id:25, name:"Al-Furqan", arabic:"الفرقان", verses:77, type:"Makki" },
{ id:26, name:"Ash-Shu'ara", arabic:"الشعراء", verses:227, type:"Makki" },
{ id:27, name:"An-Naml", arabic:"النمل", verses:93, type:"Makki" },
{ id:28, name:"Al-Qasas", arabic:"القصص", verses:88, type:"Makki" },
{ id:29, name:"Al-Ankabut", arabic:"العنكبوت", verses:69, type:"Makki" },
{ id:30, name:"Ar-Rum", arabic:"الروم", verses:60, type:"Makki" },
{ id:31, name:"Luqman", arabic:"لقمان", verses:34, type:"Makki" },
{ id:32, name:"As-Sajdah", arabic:"السجدة", verses:30, type:"Makki" },
{ id:33, name:"Al-Ahzab", arabic:"الأحزاب", verses:73, type:"Madani" },
{ id:34, name:"Saba", arabic:"سبأ", verses:54, type:"Makki" },
{ id:35, name:"Fatir", arabic:"فاطر", verses:45, type:"Makki" },
{ id:36, name:"Ya-Sin", arabic:"يس", verses:83, type:"Makki" },
{ id:37, name:"As-Saffat", arabic:"الصافات", verses:182, type:"Makki" },
{ id:38, name:"Sad", arabic:"ص", verses:88, type:"Makki" },
{ id:39, name:"Az-Zumar", arabic:"الزمر", verses:75, type:"Makki" },
{ id:40, name:"Ghafir", arabic:"غافر", verses:85, type:"Makki" },
{ id:41, name:"Fussilat", arabic:"فصلت", verses:54, type:"Makki" },
{ id:42, name:"Ash-Shura", arabic:"الشورى", verses:53, type:"Makki" },
{ id:43, name:"Az-Zukhruf", arabic:"الزخرف", verses:89, type:"Makki" },
{ id:44, name:"Ad-Dukhan", arabic:"الدخان", verses:59, type:"Makki" },
{ id:45, name:"Al-Jathiyah", arabic:"الجاثية", verses:37, type:"Makki" },
{ id:46, name:"Al-Ahqaf", arabic:"الأحقاف", verses:35, type:"Makki" },
{ id:47, name:"Muhammad", arabic:"محمد", verses:38, type:"Madani" },
{ id:48, name:"Al-Fath", arabic:"الفتح", verses:29, type:"Madani" },
{ id:49, name:"Al-Hujurat", arabic:"الحجرات", verses:18, type:"Madani" },
{ id:50, name:"Qaf", arabic:"ق", verses:45, type:"Makki" },
{ id:51, name:"Adh-Dhariyat", arabic:"الذاريات", verses:60, type:"Makki" },
{ id:52, name:"At-Tur", arabic:"الطور", verses:49, type:"Makki" },
{ id:53, name:"An-Najm", arabic:"النجم", verses:62, type:"Makki" },
{ id:54, name:"Al-Qamar", arabic:"القمر", verses:55, type:"Makki" },
{ id:55, name:"Ar-Rahman", arabic:"الرحمن", verses:78, type:"Makki" },
{ id:56, name:"Al-Waqi'ah", arabic:"الواقعة", verses:96, type:"Makki" },
{ id:57, name:"Al-Hadid", arabic:"الحديد", verses:29, type:"Madani" },
{ id:58, name:"Al-Mujadilah", arabic:"المجادلة", verses:22, type:"Madani" },
{ id:59, name:"Al-Hashr", arabic:"الحشر", verses:24, type:"Madani" },
{ id:60, name:"Al-Mumtahanah", arabic:"الممتحنة", verses:13, type:"Madani" },
{ id:61, name:"As-Saff", arabic:"الصف", verses:14, type:"Madani" },
{ id:62, name:"Al-Jumu'ah", arabic:"الجمعة", verses:11, type:"Madani" },
{ id:63, name:"Al-Munafiqun", arabic:"المنافقون", verses:11, type:"Madani" },
{ id:64, name:"At-Taghabun", arabic:"التغابن", verses:18, type:"Madani" },
{ id:65, name:"At-Talaq", arabic:"الطلاق", verses:12, type:"Madani" },
{ id:66, name:"At-Tahrim", arabic:"التحريم", verses:12, type:"Madani" },
{ id:67, name:"Al-Mulk", arabic:"الملك", verses:30, type:"Makki" },
{ id:68, name:"Al-Qalam", arabic:"القلم", verses:52, type:"Makki" },
{ id:69, name:"Al-Haqqah", arabic:"الحاقة", verses:52, type:"Makki" },
{ id:70, name:"Al-Ma'arij", arabic:"المعارج", verses:44, type:"Makki" },
{ id:71, name:"Nuh", arabic:"نوح", verses:28, type:"Makki" },
{ id:72, name:"Al-Jinn", arabic:"الجن", verses:28, type:"Makki" },
{ id:73, name:"Al-Muzzammil", arabic:"المزمل", verses:20, type:"Makki" },
{ id:74, name:"Al-Muddaththir", arabic:"المدثر", verses:56, type:"Makki" },
{ id:75, name:"Al-Qiyamah", arabic:"القيامة", verses:40, type:"Makki" },
{ id:76, name:"Al-Insan", arabic:"الإنسان", verses:31, type:"Madani" },
{ id:77, name:"Al-Mursalat", arabic:"المرسلات", verses:50, type:"Makki" },
{ id:78, name:"An-Naba", arabic:"النبأ", verses:40, type:"Makki" },
{ id:79, name:"An-Nazi'at", arabic:"النازعات", verses:46, type:"Makki" },
{ id:80, name:"Abasa", arabic:"عبس", verses:42, type:"Makki" },
{ id:81, name:"At-Takwir", arabic:"التكوير", verses:29, type:"Makki" },
{ id:82, name:"Al-Infitar", arabic:"الإنفطار", verses:19, type:"Makki" },
{ id:83, name:"Al-Mutaffifin", arabic:"المطففين", verses:36, type:"Makki" },
{ id:84, name:"Al-Inshiqaq", arabic:"الإنشقاق", verses:25, type:"Makki" },
{ id:85, name:"Al-Buruj", arabic:"البروج", verses:22, type:"Makki" },
{ id:86, name:"At-Tariq", arabic:"الطارق", verses:17, type:"Makki" },
{ id:87, name:"Al-A'la", arabic:"الأعلى", verses:19, type:"Makki" },
{ id:88, name:"Al-Ghashiyah", arabic:"الغاشية", verses:26, type:"Makki" },
{ id:89, name:"Al-Fajr", arabic:"الفجر", verses:30, type:"Makki" },
{ id:90, name:"Al-Balad", arabic:"البلد", verses:20, type:"Makki" },
{ id:91, name:"Ash-Shams", arabic:"الشمس", verses:15, type:"Makki" },
{ id:92, name:"Al-Lail", arabic:"الليل", verses:21, type:"Makki" },
{ id:93, name:"Ad-Duha", arabic:"الضحى", verses:11, type:"Makki" },
{ id:94, name:"Ash-Sharh", arabic:"الشرح", verses:8, type:"Makki" },
{ id:95, name:"At-Tin", arabic:"التين", verses:8, type:"Makki" },
{ id:96, name:"Al-Alaq", arabic:"العلق", verses:19, type:"Makki" },
{ id:97, name:"Al-Qadr", arabic:"القدر", verses:5, type:"Makki" },
{ id:98, name:"Al-Bayyinah", arabic:"البينة", verses:8, type:"Madani" },
{ id:99, name:"Az-Zalzalah", arabic:"الزلزلة", verses:8, type:"Madani" },
{ id:100, name:"Al-Adiyat", arabic:"العاديات", verses:11, type:"Makki" },
{ id:101, name:"Al-Qari'ah", arabic:"القارعة", verses:11, type:"Makki" },
{ id:102, name:"At-Takathur", arabic:"التكاثر", verses:8, type:"Makki" },
{ id:103, name:"Al-Asr", arabic:"العصر", verses:3, type:"Makki" },
{ id:104, name:"Al-Humazah", arabic:"الهمزة", verses:9, type:"Makki" },
{ id:105, name:"Al-Fil", arabic:"الفيل", verses:5, type:"Makki" },
{ id:106, name:"Quraysh", arabic:"قريش", verses:4, type:"Makki" },
{ id:107, name:"Al-Ma'un", arabic:"الماعون", verses:7, type:"Makki" },
{ id:108, name:"Al-Kawthar", arabic:"الكوثر", verses:3, type:"Makki" },
{ id:109, name:"Al-Kafirun", arabic:"الكافرون", verses:6, type:"Makki" },
{ id:110, name:"An-Nasr", arabic:"النصر", verses:3, type:"Madani" },
{ id:111, name:"Al-Masad", arabic:"المسد", verses:5, type:"Makki" },
{ id:112, name:"Al-Ikhlas", arabic:"الإخلاص", verses:4, type:"Makki" },
{ id:113, name:"Al-Falaq", arabic:"الفلق", verses:5, type:"Makki" },
{ id:114, name:"An-Nas", arabic:"الناس", verses:6, type:"Makki" },

];






// Create Premium Surah Cards
if (surahList) {

    surahs.forEach(function(surah){

        let type = surah.type ? surah.type : "Makki";

        surahList.innerHTML += `
        <div class="card">

            <div class="card-top">
                <span class="surah-number">📖 ${surah.id}</span>
                <span class="surah-type">${type}</span>
            </div>

            <h2 class="arabic-name">${surah.arabic}</h2>

            <h3>${surah.name}</h3>

            <p>📜 ${surah.verses} Ayahs</p>

            <a href="surah.html?id=${surah.id}">
                Read Surah →
            </a>

        </div>
        `;

    });

}