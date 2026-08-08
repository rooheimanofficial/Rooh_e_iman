const dailyHadiths = [

{
title: "Sahih al-Bukhari 5027",
text: "The best among you are those who learn the Quran and teach it."
},

{
title: "Sahih Muslim 2699",
text: "Whoever follows a path in search of knowledge, Allah will make easy for him a path to Paradise."
},

{
title: "Sahih al-Bukhari 13",
text: "None of you truly believes until he loves for his brother what he loves for himself."
},

{
title: "Jami at-Tirmidhi 2516",
text: "Be mindful of Allah, and He will protect you."
},

{
title: "Sahih Muslim 223",
text: "Purity is half of faith."
}

];
// =========================
// Random Daily Hadith
// =========================

const hadithTitle = document.getElementById("hadithTitle");
const hadithText = document.getElementById("hadithText");
const hadithReference = document.getElementById("hadithReference");

if (hadithTitle) {

const randomIndex = Math.floor(Math.random() * dailyHadiths.length);

const hadith = dailyHadiths[randomIndex];

hadithTitle.innerText = "📜 Daily Hadith";
hadithText.innerText = hadith.text;
hadithReference.innerText = "— " + hadith.title;

}