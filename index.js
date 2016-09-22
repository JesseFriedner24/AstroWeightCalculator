var myPlanets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];



var planetselect = document.getElementById("planets");
for(var i = 0; i<=myPlanets.length-1; i++) {
  var opt = document.createElement('option');
  opt.value = myPlanets[i].gravity;
  opt.innerHTML = myPlanets[i].planet;
  planetselect.appendChild(opt);
}


function yournewanswer() {
  var personweight = document.getElementById("weight").value;
  var yourplanet = document.getElementById("planets").value;
  var youranswer = personweight * yourplanet;
  var planetsel = document.getElementById("planets") [document.getElementById("planets").selectedIndex].text;



var planetCheck = ["Sun", "Moon", "Earth"].indexOf(planetsel)

if(planetCheck !=-1 ) 
  {document.getElementById("expectedoutput").innerHTML = "If you were on the  " + planetsel + " your weight would be " + youranswer  + "lbs!"; 

}else {document.getElementById("expectedoutput").innerHTML = "If you were on the planet " + planetsel + " your weight would be " + youranswer  + "lbs!"; 

}

} 

var reverse = 'rotaluclaC thgieW ortsA';
var newtitle = "";
for(var i = 0; i<=reverse.length; i++)
{newtitle += reverse.charAt(reverse.length-1-i);
} 

document.getElementById("title").innerHTML = newtitle;











