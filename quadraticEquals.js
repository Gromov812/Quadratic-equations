'use strict';
   let D = null,
    x1 = null,
    x2 = null
    
function findDiscriminant(a,b,c){
    D = Math.pow(b,2)-4*a*c;
    x1 = (-b + Math.sqrt(D))/(2*a);
    x2 = (-b - Math.sqrt(D))/(2*a);

    let res = {        
        D:D < 0 ? "D<0 уравнение не решаемо": D,
        x1:x1,
        x2:x2
    };
    return res;
}
document.querySelector('#push').onclick = function(e) {
    let a =  document.querySelector('#a').value,
        b =  document.querySelector('#b').value,
        c =  document.querySelector('#c').value;
        let res = findDiscriminant(a,b,c);
        document.querySelector('.D').innerHTML = (res.D);
        document.querySelector('.x1').innerHTML = (res.x1);
        document.querySelector('.x2').innerHTML = (res.x2);

};
