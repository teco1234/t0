


o=['black','red','blue','white']
u=['-','|','Calcule!','Resultado','Acertou!','Errou!']

function mat(a,b){return Math.floor(Math.random()*a)+b}
function al(a){alert(a)}
function cn(a){console.log(a)}
function mostra(a){
    for(let i=0;i<a.length;i++)cn(a[i])
}
function criar(a){return document.createElement(a)}

function insere(a){
    for(let i=0;i<a.length;i++)a[i]=i
}

function tx(a,b){a.innerHTML=b}

function tln(a){a.style.display="none"}
function tlb(a){a.style.display="block"}
function tli(a){a.style.display="inline"}

function fd(a,c){a.style.backgroundColor=c}
function ft(a,c){a.style.color=c}

function soma(a,b){return a+b}
function sub(a,b){return a-b}
function mult(a,b){return a*b}
function div(a,b){return a/b}

function ise(a){
    for(let i=0;i<a.length;i++)a[i]=i
}
function sorte(a){a.sort(()=>Math.random()-.5)}
function mostra(a){
    for(let i=0;i<a.length;i++)cn(a[i])
}