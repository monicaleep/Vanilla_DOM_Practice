// Get the element with the id you assigned and save it to a variable . Console.log that variable.
const myId = document.querySelector('#header')
console.log(myId)

// Get the h2 element and save it to a variable h2. Console.log that variable.
const myHTwo = document.querySelector('h2')
console.log(myHTwo)

//Using JavaScript, change the innerText of your h2 to have 3 exclamation points at the end
myHTwo.innerText += "!!!"

//Get all of the elements with the class you assigned and save them to a variable. Console.log that variable.
const myFavorites = document.querySelectorAll('.favorite')
console.log(myFavorites)

// Change the style/color of the text of your ONE of your li elements to your favorite html color
const lis = document.querySelectorAll('li');
lis[1].style.color = "DARKORCHID"

// Change the innerText of one of your list items to 'Jamboree sandwich at the Jambo-ree'
lis[2].innerText = "Jamboree sandwich at the Jambo-ree"


//Create a new img element using document.createElement()
const newImg = document.createElement('img')

//Add an attribute for the source url of your new image using .setAttribute()
newImg.setAttribute('src',"https://upload.wikimedia.org/wikipedia/commons/f/f2/Dunkin%27_Donuts_Park_-_main_entrance.png")
