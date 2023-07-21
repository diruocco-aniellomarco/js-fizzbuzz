const fizzbuzz_row = document.querySelector('div.fizzbuzz_row');


for (let i = 1; i <= 100; i++) {
    let divBox = `<div class="box color_number">${i}</div>`
    if (i % 3 == 0 || i % 5 == 0 ) {
        if (i % 3 == 0 && i % 5 == 0 ) {
            divBox = `<div class="box color_fizzbuzz">FizzBuzz</div>`
            fizzbuzz_row.innerHTML += divBox;
            console.log('FizzBuzz');
        }else if (i % 3 == 0) {
            divBox = `<div class="box color_fizz">Fizz</div>`
            fizzbuzz_row.innerHTML += divBox;
            console.log('Fizz');
        }else {
            divBox = `<div class="box color_buzz">Buzz</div>`
            fizzbuzz_row.innerHTML += divBox;
            console.log('Buzz');
        }
    }else {
        fizzbuzz_row.innerHTML += divBox;
        console.log(i);
    }
}