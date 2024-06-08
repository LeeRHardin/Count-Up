let countUp = 0;
let countDown = 0;

let btnCountUp = document.getElementById('btnCountUp');
let btnCountDown = document.getElementById('btnCountDown');
let btnReset = document.getElementById('btnReset');
let countDisplay = document.getElementById('countDisplay');

// Add event listener to the count up button
btnCountUp.addEventListener('click', function() {
    // Increment countUp
    countUp++;

    // Update the button text
    btnCountUp.textContent = `Count Up (${countUp})`;
});

// Add event listener to the count down button
btnCountDown.addEventListener('click', function() {
    // Decrement countDown
    countDown--;

    // Update the button text
    btnCountDown.textContent = `Count Down (${countDown})`;
});

// Add event listener to the reset button
btnReset.addEventListener('click', function() {
    // Reset counts
    countUp = 0;
    countDown = 0;

    // Update the button text
    btnCountUp.textContent = `Count Up (${countUp})`;
    btnCountDown.textContent = `Count Down (${countDown})`;
});