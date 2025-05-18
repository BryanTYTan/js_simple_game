const valid_player_choices = ['rock', 'paper', 'scissors']
const valid_computer_choices = ['rock', 'paper', 'scissors']

let button_box = document.querySelector('.button_box');

button_box.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  play_game(event.target.value);
});


function play_game(user_choice) {
    let user_val = user_choice;
    let result_div = document.getElementById('results');

    if (user_val) {
        let choice = user_val.toLowerCase();

        // Check if it is a valid input
        if (valid_player_choices.indexOf(choice) > -1) {
            let computer_choice = obtain_computer_choice();

            // Auto Win
            if (valid_player_choices.indexOf(choice) == 3) {
                do_player_win();
                return false;
            }

            // True If player won
            let result = check_who_won(choice, computer_choice);
            if (result == 0) {
                do_player_win();
            } else if (result == 1) {
                result_div.innerHTML = "Draw! Play again!";
            } else {
                do_computer_Win();
            }

        } else {
            result_div.innerHTML = "Please enter a valid input";
        }
        
    }
    else {
        result_div.innerHTML = "Please Enter a non empty input";
    }

    return false;
}

function check_who_won(player_choice, computer_choice) {
    // 0 = Win
    // 1 = Draw
    // 2 = Lost
    let win = '0';

    switch(player_choice) {
        case 'rock':
            if (valid_computer_choices.indexOf(computer_choice) == 0) {
                win = 1;
            } else if (valid_computer_choices.indexOf(computer_choice) == 1) {
                win = 2;
            }
            break;

        case 'paper':
            if (valid_computer_choices.indexOf(computer_choice) == 1) {
                win = 1;
            } else if (valid_computer_choices.indexOf(computer_choice) == 2) {
                win = 2;
            }
            break;

        case 'scissors':
            if (valid_computer_choices.indexOf(computer_choice) == 2) {
                win = 1;
            } else if (valid_computer_choices.indexOf(computer_choice) == 0) {
                win = 2;
            }
            break;

        default:
            break;
    }


    return win;
}

function do_player_win() {
    let result_div = document.getElementById('results');
    let player_score = document.getElementById('user_score');
    result_div.innerHTML = "You win!";
    let current_score = parseInt(player_score.innerText) + 1;
    player_score.innerHTML = current_score;
}

function do_computer_Win() {
    let result_div = document.getElementById('results');
    let copmputer_score = document.getElementById('computer_score');
    result_div.innerHTML = "You lost, better luck next time";
    let current_score = parseInt(copmputer_score.innerText) + 1;
    copmputer_score.innerHTML = current_score;
}

function obtain_computer_choice() {
    return valid_computer_choices[Math.floor(Math.random() * valid_computer_choices.length)]
}