let i = 0
let number = "05530867" // number to search for or part of a number
myInterval = setInterval(function() {
    if (!checkbox_3.value.indexOf(number) || !checkbox_5.value.indexOf(number) || !checkbox_7.value.indexOf(number)) {
        console.log("Found it!");
        clearInterval(myInterval);
    } else {
        generate_new_numbers.click();
        i++;
        console.log(i);
    }
}, 2000);