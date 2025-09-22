let words = [
    {
        word: "السعودية",
    },
    {
        word: "همة",
    },
    {
        word: "وطن",
    },
    {
        word: "راية",
    },
    {
        word: "فخر",
    },
    {
        word: "تراث",
    },
    {
        word: "مجد",
    },
    {
        word: "علم",
    },
    {
        word: "شموخ",
    },
    {
        word: "رؤية",
    },
    {
        word: "قيادة",
    },
    {
        word: "مستقبل",
    },
    {
        word: "اصالة",
    },
    {
        word: "كرم",
    },
    {
        word: "طموح",
    },
    {
        word: "فزعة",
    },
    {
        word: "نهضة",
    }
];

let timer;

const wordText = document.querySelector(".word"),
        timeText = document.querySelector(".time b"),
        inputField = document.querySelector("input"),
        refreshBtn = document.querySelector(".refresh-word"),
        checkBtn = document.querySelector(".check-word");

const initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime
        }
        alert(`خلص الوقت`);
        initGame();
    }, 1000);
}

function initGame() {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split('');

    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join('');
    correctword = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctword.length);
}

initGame(); // Page reload

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("ادخل الكلمة");
    if(userWord !== correctword) return alert(`الكلمة ${userWord} ليست الكلمة الصحيحة`);
    alert(`كفو  ${correctword.toLowerCase()} الكلمة صحيحة`)
    initGame();
}

refreshBtn.addEventListener("click", initGame)
checkBtn.addEventListener("click", checkWord)