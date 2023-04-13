function scuberGreetingForFeet(i){
  if (i<= 400){
  return "This one is on me!" }

else if (i > 400 && i <=2000){
return "That will be twenty bucks." }

else if (i > 2000 && i <=2500){
  return "I will gladly take your thirty bucks."
}
else {
  return "No can do."
}
}

function ternaryCheckCity (i) {
if (i == "NYC"){
return "Ok, sounds good."
}
else {
  return "No go."
}
}

function switchOnCharmFromTip(tip){
 switch (tip) {
  case "generous":
    return "Thank you so much."
    break;
    case "not as generous":
      return "Thank you."
 
  default:
    return "Bye."
    break;
 }

}