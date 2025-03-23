const valid_choices = ['rock', 'paper', 'scissors', 'shotgun']

function play_game() {
    let user_val = document.forms["user_info"]["user_choice"].value;

    if (user_val) {
        console.log(user_val);
    }
    else {
        let result_div = document.getElementById('results');
        result_div.innerHTML = "Please Enter a non empty input";
    }




    return false;
}