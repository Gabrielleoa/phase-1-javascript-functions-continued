const saturdayFun= function (activity ='roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}
console.log(saturdayFun());
console.log(saturdayFun('bathe my dog!'))


function mondayWork (activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`);
}
console.log(mondayWork());
console.log(mondayWork('work from home'));

function wrapAdjective(visualFlair = "*") {
    return function(adjective = "special") {
      return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
  }
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a hard worker"));
 

/*function wrapAdjective () {
    let result = wrapAdjective('*');
    let emphatic = 'a hard worker'
    return(`You are ${result}${emphatic}${result}! `)
    }
    console.log(wrapAdjective());

*/
  
