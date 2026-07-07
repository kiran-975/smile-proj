let current = 1;

function changeBackground(videoName) {
    const v1 = document.getElementById("bg1");
    const v2 = document.getElementById("bg2");

    if (current === 1) {
        v2.querySelector("source").src = videoName;
        v2.load();
        v2.play();

        v1.classList.replace("visible", "hidden");
        v2.classList.replace("hidden", "visible");

        current = 2;
    } else {
        v1.querySelector("source").src = videoName;
        v1.load();
        v1.play();

        v2.classList.replace("visible", "hidden");
        v1.classList.replace("hidden", "visible");

        current = 1;
    }
}

function nextScreen(n) {
    document.querySelectorAll('.content').forEach(c => c.classList.add('hidden'));
    document.getElementById('screen' + n).classList.remove('hidden');

    if (n === 2) changeBackground("https://bjn4oce2spvndlmy.public.blob.vercel-storage.com/bg2.mp4");
}

function goodDay() {
    let msg = document.getElementById("goodMsg");
    let eng = document.getElementById("goodMsgEng");

    msg.innerText = "Το ήξερα καπετάνιε. Ακόμα και η μέρα μου τώρα θα είναι υπέροχη καθώς ντρέπεσαι ενώ το διαβάζεις αυτό....";
    eng.innerText = "I knew it captain… Even My Day Will Now Be Great As you are Blushing While Reading This...";

    msg.classList.remove("hidden");
    eng.classList.remove("hidden");

    setTimeout(() => {
        changeBackground("https://bjn4oce2spvndlmy.public.blob.vercel-storage.com/bg3.mp4");
        nextScreen(3);
    }, 4000);
}

function badDay() {
    document.getElementById("badMsg").classList.remove("hidden");
    document.getElementById("badMsgEng").classList.remove("hidden");
}

function smileYes() {
    const msg = document.getElementById("smileMessage");

    msg.innerText = "Nice… keep smiling, it looks good on you 😊";
    msg.style.display = "block";

    // Wait 3 seconds
    setTimeout(() => {

        // Hide the message BEFORE fade starts
        msg.style.display = "none";

        // Start fade to BG4
        changeBackground("https://bjn4oce2spvndlmy.public.blob.vercel-storage.com/bg4.mp4");

        // Wait for fade to finish (1 second)
        setTimeout(() => {
            nextScreen(4);
        }, 1000);

    }, 2000);
}

function smileNo() {
    const msg = document.getElementById("smileMessage");

    msg.innerText = "No way… I'm not gonna let you go without a smile today 😤";
    msg.style.display = "block";
}

function showMessage() {
    document.getElementById("hiddenMsg").classList.remove("hidden");
    document.getElementById("hiddenMsgEng").classList.remove("hidden");

    setTimeout(() => nextScreen(5), 4000);
}

