

const properties = {
   userName: window.prompt("What is your Name?"),
   location: window.prompt("pick a random location"),
   biggestOpp: window.prompt("who do you hate the most?"),
   description: window.prompt("How would you describe yourself in one word?"),
   year: window.prompt("the year"),
   advocate: window.prompt("what do you believe most in?"),
   antiAdvocate: window.prompt("what do you think should be reformed the most in the current state of the world?"),
   profession: window.prompt("what do you wanna be when you grow up?"),
}

properties.forEach(property => {
   property.classList.add("property")
})

const story = `${properties.userName}, who is a ${properties.profession} and a strident advocate for the cause of ${properties.advocate}, in their debate, is fighting against ${properties.biggestOpp}, in which ${properties.userName} is condemnding ${[properties.antiAdvocate]}. In their speech, located at ${properties.location} ${properties.userName} asserts, "It must be noted that ${properties.advocate} is the right cause on the basis of moral judgement and well-being, and that ${properties.biggestOpp}'s beliefs of ${properties.antiAdvocate} is wrong, and they should be publicaly shamed.`;

document.getElementById("madlib-output").innerHTML = story;

