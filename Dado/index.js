var waypoint = require('waypoint');

let countFromZero = () => {
    let numOfCount = document.querySelectorAll('.block-number .block .num');
    let storage = [3000, 5000, 6000, 10000]
    let count = 0;
    numOfCount.forEach(function(val) {
        for (let i = 0; i <= storage[count]; i++) {
            setTimeout(() => {
                val.innerHTML = i;
            }, 10);
        }
        console.log(count);
        count++;
    })
}



document.getElementById('section-e').scroll(function() {
    console.log('great is here');
    countFromZero();
});