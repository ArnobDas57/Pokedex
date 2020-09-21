
//function that will validate input that should be a number between 1-20
function validateInput1()
 {
    var searchInput1 = document.getElementById("input1").value;
    var ul = document.getElementById("poke-list");
    var popup = document.getElementById("myPopup");
    var li = ul.getElementsByTagName("li");
    var text;

    //if statement to check if first search box input is a number between 1-20
    //if no criteria is met popup block appears and error text appears
    if(searchInput1 > 20 || searchInput1 < 1 || isNaN(searchInput1))
    {
        popup.style.display = "block";

        text = "Input not valid - Please enter a number between 1-20";
        document.getElementById("p1").innerHTML = text;
    }

    //if criteria is met popup block appears and shows up to 5 results
    else
    {
        popup.style.display = "block";

        var counter = 0;

        /* for loop iterates 20 times (length of li array), if the li array element at current iteration number includes the search input within the text then
        the pokemon at that array position is added to the popup of results */
        for(var i = 0; i < li.length; i++)
        {
            if((li[i].textContent).includes(searchInput1))
            {
                text = li[i].textContent;
                document.getElementById("p" + (counter + 1)).innerHTML = text;
                counter++;
            }

            //once counter equals 5, meaning that at at most 5 matching results have appeared, the for loop ends and all results are shown in popup
            if (counter === 5) {break;}
        }
    }
}

//function that will validate input that should contain letters and no more than 20 characters
function validateInput2()
 {
    var searchInput2 = document.getElementById("input2").value;
    var ul = document.getElementById("poke-list");
    var popup = document.getElementById("myPopup");
    var li = ul.getElementsByTagName("li");
    var c, text;

    /* for loop iterates through each character of the second search box input,
    if statement checks if each character is a letter, if the character's lowercase equals the characters uppercase that
    means it is not a letter (for ex: 'a' does not equal to 'A')*/
    for (c of searchInput2)
    {
        if(c.toLowerCase() === c.toUpperCase())
        {
            popup.style.display = "block";

            text = "Input not valid - Please enter letters A-Z or a-z and no more than 20 characters";
            document.getElementById("p1").innerHTML = text;
        }
    }

    //if the search box input is empty or has more than 20 characters than popup with error text appears
    if(searchInput2.length > 20 || searchInput2.length < 1)
    {
        popup.style.display = "block";

        text = "Input not valid - Please enter letters A-Z or a-z and no more than 20 characters";
        document.getElementById("p1").innerHTML = text;
    }

    //if there are no errors in the search box input then else statement will run
    else 
    {
        popup.style.display = "block";

        var counter = 0;

       /* for loop iterates 20 times (length of li array), if the li array element at current iteration number includes the search input within the text then
        the pokemon at that array position is added to the popup of results */
        for(var i = 0; i < li.length; i++)
        {
            if((li[i].textContent).includes(searchInput2))
            {
                text = li[i].textContent;
                document.getElementById("p" + (counter + 1)).innerHTML = text;
                counter++;
            }

            if(counter === 5) break;
        }
    }
}
