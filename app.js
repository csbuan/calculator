(function() {
    // First, we have to set variables for all the elements we have in the index.html that will get inputs
    let screen = document.querySelector('.screen');     // we have to use the document because this is in inside of our HTML 
    let buttons = document.querySelectorAll('.btn');    // we have to use querySelectorAll to get all the inputs from all the buttons and select the class name keyword which all the buttons are identical and that is 'btn'
    let clear = document.querySelector('.btn-clear');   // the class used must be different from the buttons so even if it has btn in its class name we have to pick the remaining different one 
    let equal = document.querySelector('.btn-equal');

    // Buttons functionality
    // We have to know which buttons were pressed using the function below: 
    // For finding out the button name and button data we are using the forEach
    buttons.forEach(function(button){   
        // And then, we will take the value from the button if any button was pressed 
        button.addEventListener('click', function(e){  // we have to use addEventListener for us to know which button was pressed 
            // event name is click; if anyone clicks on the buttons we have to run a function. this function will only work if any event is active 
            //  we have to store the value of buttons pressed in a variable called value that targets the data-num class in HTML which stores the data value of each button 
            // If anyone clicks on the buttons this will take those values and store in value variable set below 
            let value = e.target.dataset.num;    
            // now with the code below, it will push all those numbers on the screen 
            screen.value += value; 
        }) 
    });
    
    // Now we will only add the addEventListener because we just have to observe if the equal sign is pressed. 
    equal.addEventListener('click', function(e) {
        if (screen.value === ''){   // if anyone press the equal button and there's no value on the screen
            screen.value = "";      // then we will not show anything on the screen
        } else {                    // otherwise, if there is/are number/s on the screen
            let answer = eval(screen.value);        // the answer will be the EVALUATED value of our screen value on line 19, that's why we have to call our evaluate function 
            screen.value = answer;  // and then that evaluated value will be stored on our answer variable. So here after evaluating the screen.value we will now let that screen.value be the answer
        }
    })  // if you encountered undefined when using the equal remove the btn from the class of equal and let it be btn-equal in index.html instead
    
    
    clear.addEventListener('click', function(e) {   // e stands for if only this button was pressed then that will the only time it will work. Same with equal button and buttons
        screen.value = "";
    })
})();