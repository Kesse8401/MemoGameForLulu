const tier_1 = document.getElementById('tier-1')
const tier_2 = document.getElementById('tier-2')
const tier_3 = document.getElementById('tier-3')
const tier_4 = document.getElementById('tier-4')
const tier_5 = document.getElementById('tier-5')
const tier_6 = document.getElementById('tier-6')
const tier_7 = document.getElementById('tier-7')
const tier_8 = document.getElementById('tier-8')

let typeOfTile;



tier_1.addEventListener('click', e => {
    tier_1.classList.add('cow')
    typeOfTile = 'cow'
    setTimeout(b => {
        console.log("Hello");
        tier_1.classList.add('tree');
        typeOfTile = undefined;
    }, 2000);
})

tier_2.addEventListener('click', e => {
    tier_2.classList.add('Lulu')
    setTimeout(b => {
        tier_2.classList.add('tree');
    }, 2000);
})

tier_3.addEventListener('click', e => {
    tier_3.classList.add('monkey')
    setTimeout(b => {
        tier_3.classList.add('tree');
    }, 2000);
})

tier_4.addEventListener('click', e => {
    tier_4.classList.add('Lulu')
    setTimeout(b => {
        tier_4.classList.add('tree');
    }, 2000);
})

tier_5.addEventListener('click', e => {
    tier_5.classList.add('donkey')
    setTimeout(b => {
        tier_5.classList.add('tree');
    }, 2000);
})


tier_6.addEventListener('click', e => {
    tier_6.classList.add('cow')
    if(typeOfTile === 'cow') {
        console.log('uuiii')
    } 
    setTimeout(b => {
        tier_6.classList.add('tree');
    }, 2000);
})


tier_7.addEventListener('click', e => {
    tier_7.classList.add('donkey')
    setTimeout(b => {
        tier_7.classList.add('tree');
    }, 2000);
})

tier_8.addEventListener('click', e => {
    tier_8.classList.add('monkey')
    setTimeout(b => {
        tier_8.classList.add('tree');
    }, 2000);
})

