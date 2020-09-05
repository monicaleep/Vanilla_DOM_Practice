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
console.log(myFavorites )
