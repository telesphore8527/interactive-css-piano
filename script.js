
let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s3 = document.getElementById('s3');
let s4 = document.getElementById('s4');
let s5 = document.getElementById('s5');
let s6 = document.getElementById('s6');
let s7 = document.getElementById('s7');
let s8 = document.getElementById('s8');
let s9 = document.getElementById('s9');
let s10 = document.getElementById('s10');
let s11 = document.getElementById('s11');
let s12 = document.getElementById('s12');
let s13 = document.getElementById('s13');
let s14 = document.getElementById('s14');

let sounds = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13];

    function playSound(i){
        for(let j = 0; j<13; j++){
            if(j===i){
                sounds[j].play(); 
                setTimeout(()=>{
                    stopOthersSounds(j);
                },500);
                break;
            }
        }
    }


function stopOthersSounds(j){
    for(let k=0; k<14; k++){
        if(k !== j){
            sounds[k].pause();
            sounds[k].currentTime = 0;
        }
    }
}

let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
let n4 = document.getElementById('n4');
let n5 = document.getElementById('n5');
let n6 = document.getElementById('n6');
let n7 = document.getElementById('n7');
let n8 = document.getElementById('n8');
let n9 = document.getElementById('n9');
let n10 = document.getElementById('n10');

let notes = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10];

function playNote(i){
    for(let j = 0; j<10; j++){
        if(i === j){
            notes[j].play(); 
                setTimeout(()=>{
                    stopOthersNotes(i);
                },500);
                break;
        }
    }
}

function stopOthersNotes(i){
    for(let k=0; k<14; k++){
        if(k !== i){
            notes[k].pause();
            notes[k].currentTime = 0;
        }
    }
}