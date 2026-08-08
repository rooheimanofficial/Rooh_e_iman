const dailyAyahs = [

{
surah: "Surah Al-Baqarah (2:152)",
arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
translation: "So remember Me; I will remember you. Be grateful to Me and do not be ungrateful."
},

{
surah: "Surah Al-Imran (3:139)",
arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ",
translation: "Do not lose heart and do not grieve; you will be superior if you are believers."
},

{
surah: "Surah At-Tawbah (9:51)",
arabic: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا",
translation: "Nothing will happen to us except what Allah has decreed for us."
},

{
surah: "Surah Ash-Sharh (94:5)",
arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
translation: "Indeed, with hardship comes ease."
},

{
surah: "Surah Al-Baqarah (2:286)",
arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
translation: "Allah does not burden a soul beyond what it can bear."
}

];
// =========================
// Random Daily Ayah
// =========================

const ayahSurah = document.getElementById("ayahSurah");
const ayahArabic = document.getElementById("ayahArabic");
const ayahTranslation = document.getElementById("ayahTranslation");

if (ayahSurah) {

const randomIndex = Math.floor(Math.random() * dailyAyahs.length);

const ayah = dailyAyahs[randomIndex];

ayahSurah.innerText = ayah.surah;
ayahArabic.innerText = ayah.arabic;
ayahTranslation.innerText = ayah.translation;

}