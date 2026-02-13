// =====================
// Stage Switch Functions
// =====================
function goToStage2() {
    document.getElementById("stage1").classList.remove("active");
    document.getElementById("stage2").classList.add("active");
}

function goToStage3() {
    document.getElementById("stage2").classList.remove("active");
    document.getElementById("stage3").classList.add("active");
}

function goToPhotos() {
    document.getElementById("stage3").classList.remove("active");
    document.getElementById("photosPage").classList.add("active");
}

function goToFinal() {
    document.getElementById("photosPage").classList.remove("active");
    document.getElementById("finalPage").classList.add("active");
}

function showValentine() {
    document.getElementById("finalPage").classList.remove("active");
    document.getElementById("valentineMessage").classList.add("active");
}

// =====================
// "No" Click Angry Popup
// =====================
function sayNo() {
    let angerEmojis = "";
    for (let i = 0; i < 15; i++) {
        angerEmojis += "<div class='anger-emoji' style='left:" + 
        Math.random()*100 + "%; animation-duration:" + 
        (2 + Math.random()*3) + "s;'>😡</div>";
    }

    const content = `
        <div class="anger-box">
            <h2 style="color:#ff4d4d; text-shadow:0 0 15px red;">
                You Stupid 😤 <br><br>
                Click Yes 💖
            </h2>
            ${angerEmojis}
        </div>
    `;

    openPopup(content);
}

// =====================
// Gifts Popups
// =====================
function openGift1() {
    let kisses = "";
    for (let i = 0; i < 100; i++) {
        kisses += "💋 ";
    }
    openPopup("<div class='red-glow'>" + kisses + "</div>");
}

function openGift2() {
    let hugs = "";
    for (let i = 0; i < 100; i++) {
        hugs += "🫂 ";
    }
    openPopup("<div class='blue-glow'>" + hugs + "</div>");
}

function openGift3() {
    const letter = `
    <div class="letter-glow">
    I choose you. <br><br>
    Always and forever. ❤️
    </div>
    `;
    openPopup(letter);
}

// =====================
// Popup Functions
// =====================
function openPopup(content) {
    const popup = document.getElementById("popupBox");
    popup.innerHTML = content + "<br><br><button onclick='closePopup()'>Close</button>";
    popup.classList.add("show");
}

function closePopup() {
    document.getElementById("popupBox").classList.remove("show");
}

// =====================
// Photos Popups
// =====================
function showPhoto1() {
    openPopup("<img src='media/photo1.jpg' width='250'>");
}

function showPhoto2() {
    openPopup("<img src='media/photo2.jpg' width='250'>");
}

// =====================
// QR Click → Open Photos Page
// =====================
document.getElementById("qrCode").onclick = function(){
    window.open("media/qr_photos.html","_blank");
}

// =====================
// Stage 3 Next Button → Move to Photos Stage
// =====================
document.getElementById("nextStage3").onclick = goToPhotos;

// =====================
// Example: First Stage Next Buttons
// =====================
document.getElementById("stage1Next").onclick = goToStage2;
document.getElementById("stage2Next").onclick = goToStage3;

// =====================
// Stage 4 Next Button → Final Page
// =====================
document.getElementById("nextStage4").onclick = goToFinal;

// =====================
// Final Stage Next Button → Valentine Message
// =====================
document.getElementById("nextFinal").onclick = showValentine;
