/*let slovo = [
         nominativJ: ['more','nominativ j.c.'],
         genitivJ: ['more', 'genitiv j.c.'],
         dativJ: ['mori', 'dativ j.c.'],
         akuzativJ: ['mori', 'akuzativ j.c.'],
         vokativJ: ['more', ],
         lokalJ: ['mori', 'lokal j.c.'],
         instrumentalJ: ['morem', 'instrumental j.c.'],
         nominativMn: ['more', 'nominativ mn.c.'], 
         genitivMn: ['mori', 'genitiv mn.c.'],
         dativMn: ['morim', 'dativ mn.c.'],
         akuzativMn:['more', 'akuzativ j.c.'], 
         vokativMn:['more', 'vokativ mn.c.'], 
         lokalMn:['morich', 'lokal mn.c.'], 
         instrumentalMn:['mori', 'instrumental mn.c.']
}*/

let slovo = [
         ['moře','Nominativ j.c.'],
         ['moře', 'Genitiv j.c.'],
         ['moří', 'Dativ j.c.'],
         ['moře', 'Akuzativ j.c.'],
         ['moře', 'Vokativ j.c.'],
         ['moří', 'Lokal j.c.'],
         ['mořem', 'Instrumental j.c.'],
         ['moře', 'Nominativ mn.c.'], 
         ['moří', 'Genitiv mn.c.'],
         ['mořím', 'Dativ mn.c.'],
         ['moře', 'Akuzativ j.c.'], 
         ['moře', 'Vokativ mn.c.'], 
         ['mořích', 'Lokal mn.c.'], 
         ['moří', 'Instrumental mn.c.']
]


let pady = [ 'Nominativ j.c.', 
'Genitiv j.c.', 
'Dativ j.c.', 
'Akuzativ j.c.', 
'Vokativ j.c.', 
'Lokal j.c.', 
'Instrumental j.c.', 
'Nominativ mn.c.', 
'Genitiv mn.c.', 
'Dativ mn.c.', 
'Akuzativ j.c.', 
'Vokativ mn.c.', 
'Lokal mn.c.', 
'Instrumental mn.c.'];

let node ='';
let count=0;
let failCount=0;
let button = document.querySelector('.button');
let btn = document.createElement('button');
let heads = document.querySelectorAll('.head');
let input = document.createElement('input');
let currentPad = 0;
let answerValue = '';
let result = '';

function headsAppear() {
    for (let i=0;i<3;i++) {
        heads[i].textContent='';
        }
    currentPad = Math.floor (Math.random()*pady.length);
    node = document.createTextNode('Vaše slovo:');
    heads[0].appendChild(node);
    node = document.createTextNode(slovo[0][0]);
    heads[1].appendChild(node);
    node = document.createTextNode(pady[currentPad] + '?');
    heads[2].appendChild(node);
    answerValue = document.getElementById('answer').value;
    result = document.getElementById('result');
    result.textContent= "";
}


button.addEventListener("click", ()=>{
    button.parentNode.removeChild(button);
    btn.innerHTML= 'Pokracovat'; 
    document.getElementById('download').appendChild(input);
    document.getElementById('download').appendChild(btn);
    input.setAttribute('id','answer');
    btn.classList.add('btn');
    btn.classList.add('btn-default');
    btn.classList.add('btn-lg');
    headsAppear();
});


btn.addEventListener("click", ()=>{ 
    if (!isthreestrikes()) {
        for (let i=0;i<14;i++) {
             if ((answerValue === slovo[i][0]) && (pady[currentPad]===slovo[i][1]) && (answerValue!=null)) {
                 count++;
                 answerValue='';
        } 
    }
    if (count===1) {
        nodeResult = document.createTextNode('Skvele!');
        result.appendChild(nodeResult);
        result.classList.add('success');
        headsAppear();
        count=0;
    }
    else {
        failCount++;
        getstrike();
        nodeResult = document.createTextNode('Sakra!');
        result.appendChild(nodeResult);
        result.classList.add('fail');
        headsAppear();
    }
}
    else {
         location.reload();
}
});


function getstrike(){
    let strike = document.getElementById('strike');
    let nodeStrike = document.createTextNode("Strike! ");
    strike.appendChild(nodeStrike);
    
}

function isthreestrikes(){
     if (failCount===3) {
              alert ("Hra OVER!");
              return true;
     } 
}


input.addEventListener("onkeypress",()=> {
    

});