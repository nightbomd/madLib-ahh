
const properties = {
  userName: window.prompt("What is your name?"),
  location: window.prompt("Pick a random location"),
  biggestOpp: window.prompt("Who do you hate the most?"),
  description: window.prompt("How would you describe yourself in one word?"),
  year: window.prompt("The year"),
  advocate: window.prompt("What do you believe most in?"),
  antiAdvocate: window.prompt("What do you think should be reformed the most in the current state of the world?"),
  profession: window.prompt("What do you wanna be when you grow up?")
};



const story = `${properties.userName}, who is a ${properties.profession} and a strident advocate for the cause of ${properties.advocate}, in their debate, is fighting against ${properties.biggestOpp}, in which ${properties.userName} is condemnding ${[properties.antiAdvocate]}. In their speech, located at ${properties.location} ${properties.userName} asserts, "It must be noted that ${properties.advocate} is the right cause on the basis of moral judgement and well-being, and that ${properties.biggestOpp}'s beliefs of ${properties.antiAdvocate} is wrong, and they should be publicaly shamed.`;

document.getElementById("madlib-output").innerHTML = story;

