let command = process.argv[2];

console.log(command)

let slashActions = {
  "combat": ['attackLongsword',' throwHatchet',' riposte',' menacingAttack',' maneuveringAttack',' *useRing',' flee'],
  "ring_spells": ['Firestorm',' Tsunami',' Whirlwind',' Reverse Time',' Regenerate',' Power Word Kill'],
  misc:['Use stake',' use healing potion',' use rope',' use tinder',' examine',' detect lie',' bluff',' assist',]
}

doSomething = (obj, command) => {
  if (obj[command]) {
    let i = Math.floor(Math.random()*obj[command].length + 1);
    // console.log(i)
    let action = obj[command][i];
    // console.log(action, typeof action)
    // console.log(action.indexOf('a'))
    if (obj[command][i].indexOf('*') > -1 && action){
      switch (action) {
        case '*useRing': 
          let j = Math.floor(Math.random()*obj['ring_spells'].length + 1)
        return `Wish for a spell! ${obj['ring_spells'][j]}`  
        default: 
          return 'Action not found!!'
      }
    } else {
      console.log(action);
      return obj[command][i];
    }
  } else {
    
  }
}

doSomething(slashActions, command);