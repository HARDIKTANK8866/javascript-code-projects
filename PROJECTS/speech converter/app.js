// let speech = new SpeechSynthesisUtterance()

// let voices =[]
// let voiceSelect = document.querySelector("select")

// window.speechSynthesis.onvoiceschanged=()=>{
//     voice= window.speechSynthesis.getVoices()
//     speech.voice = voices[0]

//     voices.forEach((voice, i)=>(voiceSelect.options[i]= new Option(voice.name,i)))
// };
// voiceSelect.addEventListener("change",()=>{
//     speech.voice = voices[voiceSelect.value]
// })

// document.querySelector("button").addEventListener("click",()=>{
//     speech.text = document.querySelector("textarea").value
//     window.speechSynthesis.speak(speech)
// })
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voiceSelect.innerHTML = '';

    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.options.add(option);
    });

    voiceSelect.selectedIndex = 0;
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

window.speechSynthesis.onvoiceschanged();
// console.log("Available voices:", voices);
