const code=document.getElementById('code');
const preview=document.getElementById('preview');

function runCode(){
let lang=document.getElementById('language').value;
let value=code.value;
let html='';
if(lang==='html') html=value;
if(lang==='css') html='<style>'+value+'</style><h1>CSS Preview</h1><p>Твой CSS работает!</p>';
if(lang==='js') html='<h1>JavaScript Preview</h1><script>'+value+'<\/script>';
preview.srcdoc=html;
}

function clearCode(){
code.value='';
preview.srcdoc='';
}

function changeCode(){
let lang=document.getElementById('language').value;
const examples={
html:'<h1>Привет, мир!</h1>\n<p>Мой первый сайт</p>',
css:'body { background: #111; color: white; }\nh1 { color: violet; }',
js:'alert("Привет, программист!");\nconsole.log("CODE AI работает!");'
};
code.value=examples[lang];
}

function askAI(){
let input=document.getElementById('question');
let q=input.value.trim();
if(!q)return;
let messages=document.getElementById('messages');
messages.innerHTML+='<div class="message user"></div>';
messages.lastElementChild.textContent=q;
let answer='Я пока работаю в демонстрационном режиме. Попробуй спросить про HTML, CSS или JavaScript!';
if(q.toLowerCase().includes('html'))answer='HTML — язык разметки сайтов. Например: <h1>Привет!</h1> создаёт заголовок.';
else if(q.toLowerCase().includes('css'))answer='CSS отвечает за дизайн сайта. Например: h1 { color: purple; } делает заголовок фиолетовым.';
else if(q.toLowerCase().includes('javascript')||q.toLowerCase().includes('js'))answer='JavaScript добавляет интерактивность. Например: alert("Привет!"); показывает сообщение.';
else if(q.toLowerCase().includes('ошиб'))answer='Чтобы найти ошибку, проверь скобки, кавычки и правильность написания команд.';
messages.innerHTML+='<div class="message"></div>';
messages.lastElementChild.textContent=answer;
messages.scrollTop=messages.scrollHeight;
input.value='';
}
runCode();