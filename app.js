
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



const story = `${properties.userName}, who is a ${properties.profession} and a strident advocate for the cause of ${properties.advocate}, in their debate, is fighting against ${properties.biggestOpp}, in which ${properties.userName} is condemnding ${[properties.antiAdvocate]}. In their speech, located at ${properties.location} ${properties.userName} asserts, "It must be noted that ${properties.advocate} is the right cause on the basis of moral judgement and well-being, and that ${properties.biggestOpp}'s beliefs of ${properties.antiAdvocate} is wrong, and they should be publicaly shamed." ${properties.biggestOpp}, ever the so stubborn opponet, scoffed at ${properties.userName}'s statment, claiming it as a "ludicrous evaluation disguised as an attempt to undermine their authority". Nevertheless, ${properties.userName} was victorious in the debate, since the federal government is now considering reform ${properties.advocate}. However, supporters of ${properties.biggestOpp} are activley enganging in radical movements for ${properties.antiAdvocate}, though it has yet to make a big impact. All said and done, ${properties.userName} is the superior debator.`;

document.getElementById("madlib-output").innerHTML = story;

