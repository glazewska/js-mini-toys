document.addEventListener('DOMContentLoaded', function() {

    const inputs = document.querySelectorAll('input');

    const all = inputs[0];
    const cheese = inputs[1];
    const bokchoy = inputs[2];
    const seaweed = inputs[3];
    const egg = inputs[4];
    const kimchi = inputs[5];

    const clear = inputs[6];

    const form = document.querySelector('form');

    form.addEventListener('change', function(event) {
        event.preventDefault();

        let total = 10;

        if (all.checked == true) {
            for (let i = 1; i < inputs.length-1; i++) {
                inputs[i].checked = true;
            }
            all.checked = false;
        } else if (clear.checked == true) {
            for (let i = 1; i < inputs.length-1; i++) {
                inputs[i].checked = false;
            }
            clear.checked = false;
        }

        for (let i = 1; i < inputs.length-1; i++) {
            if (inputs[i].checked == true) {
                let price = Number(inputs[i].dataset.price);
                console.log(price);
                total += price;
            }
        }

        console.log(total.toFixed(2));

        let price = document.querySelector('#price');
        price.innerText = total.toFixed(2) + '$';
    });
});
