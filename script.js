//function that will validate input that should be a number between 1-20
function validateInput1()
 {
    let searchInput1 = document.getElementById("input1").value;
    let ul = document.getElementById("poke-list");
    let popup = document.getElementById("myPopup");
    let li = ul.getElementsByTagName("li");
    let text;

    //if statement to check if first search box input is a number between 1-20
    //if no criteria is met popup block appears and error text appears
    if(searchInput1 > 20 || searchInput1 < 1 || isNaN(searchInput1))
    {
        popup.style.display = "block";

        text = "Input not valid - Please enter a number between 1-20";
        document.getElementById("p1").innerHTML = text;
        document.getElementById("p2").innerHTML = " ";
        document.getElementById("p3").innerHTML = " ";
        document.getElementById("p4").innerHTML = " ";
        document.getElementById("p5").innerHTML = " ";
    }

    //if criteria is met popup block appears and shows up to 5 results
    else
    {
        popup.style.display = "block";

        let counter = 0;

        /* for loop iterates 20 times (length of li array), if the li array element at current iteration number includes the search input within the text then
        the pokemon at that array position is added to the popup of results */
        for(let i = 0; i < li.length; i++)
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
    let searchInput2 = document.getElementById("input2").value;
    let filter = searchInput2.toUpperCase();
    let ul = document.getElementById("poke-list");
    let popup = document.getElementById("myPopup");
    let li = ul.getElementsByTagName("li");
    let c, text;

    /* for loop iterates through each character of the second search box input,
    if statement checks if each character is a letter, if the character's lowercase equals the characters uppercase that
    means it is not a letter (for ex: 'a' does not equal to 'A')*/
    for (c of filter)
    {
        if(c.toLowerCase() === c.toUpperCase())
        {
            popup.style.display = "block";

            text = "Input not valid - Please enter letters A-Z or a-z and no more than 20 characters";
            document.getElementById("p1").innerHTML = text;
            document.getElementById("p2").innerHTML = " ";
            document.getElementById("p3").innerHTML = " ";
            document.getElementById("p4").innerHTML = " ";
            document.getElementById("p5").innerHTML = " ";
        }
    }

    //if the search box input is empty or has more than 20 characters than popup with error text appears
    if(filter.length > 20 || filter.length < 1 || !isNaN(filter))
    {
        popup.style.display = "block";

        text = "Input not valid - Please enter letters A-Z or a-z and no more than 20 characters";
        document.getElementById("p1").innerHTML = text;
        document.getElementById("p2").innerHTML = " ";
        document.getElementById("p3").innerHTML = " ";
        document.getElementById("p4").innerHTML = " ";
        document.getElementById("p5").innerHTML = " ";
    }

    //if there are no errors in the search box input then else statement will run
    else 
    {
        popup.style.display = "block";

        let counter = 0;

       /* for loop iterates 20 times (length of li array), if the li array element at current iteration number includes the search input within the text then
        the pokemon at that array position is added to the popup of results */
        for(let i = 0; i < li.length; i++)
        {
            if((li[i].textContent).includes(filter))
            {
                text = li[i].textContent;
                document.getElementById("p" + (counter + 1)).innerHTML = text;
                counter++;
            }

            if(counter === 5) break;
        }
    }
}

//this function is attached to the span element within the popup
//when the x icon is clicked on the popup the closePopUp() function will close the the popup by getting the element id and setting the popup style to be blank
function closePopup()
{
    let popup = document.getElementById("myPopup");
    popup.style.display = "none";
}

var div = document.createElement("div");
div.className = "contentBlock";
div.id = "myCB";

var divHeader = document.createElement("h4");
divHeader.textContent = "RESULTS";
div.appendChild(divHeader);

var bottomSearch = document.getElementById("search2");
bottomSearch.appendChild(div);

var list = document.createElement("ul"); 
list.className = "divList";
list.id = "myList"
var ul = document.getElementById("poke-list");
var li = ul.getElementsByClassName("pokemonImages");
var listElement;

for(let i = 0; i < li.length; i++)
{
    listElement = document.createElement("li");
    listElement.textContent = li[i].textContent; 
    listElement.setAttribute("class","newList");
    list.appendChild(listElement);
}

div.appendChild(list);

function dynamicSearch2()
{
    let input = document.getElementById("input2");
    let filter = input.value.toUpperCase();
    var mylist = document.getElementById("myList");
    var listElement = mylist.getElementsByTagName("li");
    var contentBlk = document.getElementById("myCB");
    let x, txtValue;

    contentBlk.style.display = "block";

    for(let i = 0; i < li.length; i++)
    {
        x = li[i].getElementsByTagName("span")[0];

        txtValue = x.textContent;

        if(txtValue.toUpperCase().indexOf(filter) > -1)
        {
            listElement[i].style.display = "";
        }

        else
        {
            listElement[i].style.display = "none";
        }
    }

    if(input.value.length == 0)
    {
        contentBlk.style.display = "none";
    }
}