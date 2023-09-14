//prompt

let genre = prompt("Who is your favourite genre");

document.write ("Your favourite genre is"  + genre);

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


document.write(message);
