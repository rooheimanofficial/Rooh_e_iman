const surahList = document.getElementById("surahList");

// Search Function
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function(){

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll("#surahList .card");

        cards.forEach(function(card){

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}
// =========================
// Side Menu
// =========================

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

if(menuBtn && closeBtn && sideMenu && overlay){

menuBtn.onclick = function(){

sideMenu.style.width = "260px";
overlay.style.display = "block";

};

closeBtn.onclick = function(){

sideMenu.style.width = "0";
overlay.style.display = "none";

};

overlay.onclick = function(){

sideMenu.style.width = "0";
overlay.style.display = "none";

};

}

// =========================
// Image Slider
// =========================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

if (slides.length > 0) {

let currentSlide = 0;

function showSlide(index){

slides.forEach((slide)=>{
slide.classList.remove("active");
});

dots.forEach((dot)=>{
dot.classList.remove("active");
});

slides[index].classList.add("active");
dots[index].classList.add("active");

}

setInterval(function(){

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

showSlide(currentSlide);

},4000);

dots.forEach((dot,index)=>{

dot.addEventListener("click",function(){

currentSlide = index;

showSlide(currentSlide);

});

});

}

// =========================
// Prayer Times API
// =========================

const fajr = document.getElementById("fajr");
const dhuhr = document.getElementById("dhuhr");
const asr = document.getElementById("asr");
const maghrib = document.getElementById("maghrib");
const isha = document.getElementById("isha");

if(fajr){

fetch("https://api.aladhan.com/v1/timingsByCity?city=Lahore&country=Pakistan&method=2")
.then(response => response.json())
.then(data => {

const t = data.data.timings;

// Today's Date
document.getElementById("todayDate").innerText =
"📅 " + data.data.date.gregorian.date;

// Hijri Date
const hijri = data.data.date.hijri;

document.getElementById("hijriDate").innerText =
"🌙 " + hijri.day + " " +
hijri.month.en + " " +
hijri.year + " AH";

function to12Hour(time){

const [hour, minute] = time.split(":");

let h = parseInt(hour);

const ampm = h >= 12 ? "PM" : "AM";

h = h % 12;

if(h === 0){
h = 12;
}

return h + ":" + minute + " " + ampm;

}

fajr.innerText = to12Hour(t.Fajr);
dhuhr.innerText = to12Hour(t.Dhuhr);
asr.innerText = to12Hour(t.Asr);
maghrib.innerText = to12Hour(t.Maghrib);
isha.innerText = to12Hour(t.Isha);

// =========================
// Current Prayer Highlight
// =========================

const now = new Date();
const currentMinutes = now.getHours() * 60 + now.getMinutes();

function toMinutes(time){

const cleanTime = time.split(" ")[0];
const parts = cleanTime.split(":");

return parseInt(parts[0]) * 60 + parseInt(parts[1]);

}

const prayerCards = [

{
time: toMinutes(t.Fajr),
card: document.getElementById("cardFajr")
},

{
time: toMinutes(t.Dhuhr),
card: document.getElementById("cardDhuhr")
},

{
time: toMinutes(t.Asr),
card: document.getElementById("cardAsr")
},

{
time: toMinutes(t.Maghrib),
card: document.getElementById("cardMaghrib")
},

{
time: toMinutes(t.Isha),
card: document.getElementById("cardIsha")
}

];
for(let i = 0; i < prayerCards.length; i++){

    if(
        currentMinutes >= prayerCards[i].time &&
        (
            i === prayerCards.length - 1 ||
            currentMinutes < prayerCards[i + 1].time
        )
    ){

        prayerCards[i].card.classList.add("active-prayer");
        break;

    }

}

})
.catch(error => {

    console.log("Prayer API Error:", error);

});

}

// =========================
// Auto Scroll Search Input
// =========================

const searchBox = document.getElementById("searchInput");

if (searchBox) {

    searchBox.addEventListener("focus", function () {

        setTimeout(() => {

            searchBox.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);

    });

}

// =========================
// Create Para Cards
// =========================

const paraList = document.getElementById("surahList");

if (paraList && typeof paras !== "undefined") {

    paras.forEach(function(para){

        paraList.innerHTML += `
        <div class="card">

<div class="card-top">

<span class="surah-number">📖 ${para.id}</span>

<span class="surah-type">Para</span>

</div>

<h3>${para.name}</h3>

<h2 class="arabic-name">${para.arabic}</h2>

<p>📍 ${para.start}</p>

<p>📍 ${para.end}</p>

<a href="para.html?id=${para.id}">Read Para</a>

</div>
        `;

    });

}