function changeTitle() {
    const titles = ['Welcome to villixx!', 'Explore My Links!', 'Check Out My Content!', 'Join the Community!', 'Discover More!'];
    let currentIndex = 0;

    setInterval(() => {
        document.title = titles[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length;
    }, 500); // Change title every 500 milliseconds
}

changeTitle();

function showContent() {
    document.getElementById('click-to-enter').style.display = 'none';
    document.getElementById('content').style.display = 'flex';
    document.getElementById('audio').play();
}

const texts = ['Welcome to my site!', 'Enjoy your stay!', 'Feel free to explore!'];
let index = 0;
let textIndex = 0;
const typingSpeed = 150;
const typingTextElement = document.getElementById('typing-text');

function typeText() {
    if (textIndex < texts[index].length) {
        typingTextElement.textContent += texts[index].charAt(textIndex);
        textIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(() => {
            typingTextElement.textContent = '';
            textIndex = 0;
            index = (index + 1) % texts.length;
            typeText();
        }, 2000);
    }
}
typeText();

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(snowflake);
    setTimeout(() => {
        document.body.removeChild(snowflake);
    }, 5000);
}
setInterval(createSnowflake, 100);
