const fizzbuzz_row = document.getElementById('fizzbuzz_row');
// trasforma in id

for (let i = 1; i <= 100; i++) {
    // let divBox = `<div class="box color_number">${i}</div>`
    const divBox = document.createElement("div")
    divBox.classList.add('box')

    
    if (i % 3 == 0 || i % 5 == 0 ) {
        if (i % 3 == 0 && i % 5 == 0 ) {
            // divBox = `<div class="box color_fizzbuzz">FizzBuzz</div>`
            // fizzbuzz_row.innerHTML += divBox;
            divBox.classList.add('color_fizzbuzz')
            divBox.innerHTML = 'FizzBuzz';
                        
            console.log('FizzBuzz');
        }else if (i % 3 == 0) {
            // divBox = `<div class="box color_fizz">Fizz</div>`
            // fizzbuzz_row.innerHTML += divBox;
            divBox.classList.add('color_fizz')
            divBox.innerHTML = 'Fizz';
            
            console.log('Fizz');
        }else {
            // divBox = `<div class="box color_buzz">Buzz</div>`
            // fizzbuzz_row.innerHTML += divBox;
            divBox.classList.add('color_buzz')
            divBox.innerHTML = 'Buzz';
            
            console.log('Buzz');
        }
    }else {
        // fizzbuzz_row.innerHTML += divBox;
        divBox.classList.add('color_number')
        divBox.innerHTML = i;
                
        console.log(i);
    }
    fizzbuzz_row.append(divBox);
}