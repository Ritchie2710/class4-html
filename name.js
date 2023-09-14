
// prompt 

function name(){
let username = prompt("What is your name?");
console.log(username);
document.write  ("Hey " + username);}




function movie() {
let film = prompt("Who is your favourite film");

let message = film + " Interesting choice of film";
document.write(message);}




function type(){
let genre = prompt("What is your favourite genre");

document.write (" Your favourite genre is " + genre); 

if(genre <= horror) {
    message = "red";
} else if (genre < action )
{
    message = "Blue";
} else if (genre < scifi )
{
    message = "green";
}
else if (genre < romantic )
{
    message = "pink";}

    else if (genre < comedy )
{
        message = "orange"; }

}
document.write(message);