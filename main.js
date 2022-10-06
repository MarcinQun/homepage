


console.log('siema');
const name = 'Marcin' ;
const age = 31;
console.log(name);
console.log(age);

console.log(`cześć jestem ${name} 
i mam ${age} lat`)



const about = document.querySelector('.paragraph__JS');

about.innerHTML = 'pozdrówki';

switch (age) {
    case 20:
        console.log( 'masz 20 lat')
}


function calculate(x) {
    x = x + 3;
    console.log(`tradycyjnie ${x}`);
    return x*7;

}


console.log(calculate(25));




const calculateFat = x => (x+3)*7;

console.log(calculateFat(8));