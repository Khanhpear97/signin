let userName = prompt("Who's there?", '');
if (userName == 'Admin') {
    let password = prompt("Password", '');
    if (password == "TheMaster") {
        alert('Welcome');
    } else if (password == 'null') {
        alert('canceled');
    } else {
        alert('Wrong password');
    }
} else if (userName == 'null') {
    alert('canceled');
} else {
    alert("I don't know you");
}