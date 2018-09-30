console.log("Scripts loaded");

function rolld6(pool, explode){
  //Note: "Explode" means use the Rule of Six (SR rulebook, page 55)
  let rolls = [];
  for (let i=0; i<pool; i++){
    rolls.push(calcSuccesses())
  }
  if (explode) {
    let done = false;
    while (!done) {
      if (rolls.indexOf(6) !== -1){
        console.log('Explode case called')
        let numRolls = rolls.length
        for (let j = 0; j<numRolls;j++){
          if (rolls[j] === 6){
            rolls[j] += 1;
            rolls.push(calcSuccesses());
          }
        }
      } else {
        done = true;
      }
    }
  }
  //console.log(rolls)
  //console.log("Pool: " + pool + "; Rolls.length: " + rolls.length)
  let totHits = 0;
  let glitchCheck = 0;
  for (let k =0; k<rolls.length;k++){
    if (rolls[k] > 4){
      totHits++;
    } else if (rolls[k] === 1){
      glitchCheck++;
    }
  }
  let halfPool = Math.floor(pool/2);
  let didGlitch = false;
  let didCritGlitch = false;
  if (glitchCheck >= halfPool && totHits === 0){
    didGlitch = true;
    didCritGlitch = true;
  } else if (glitchCheck >= halfPool) {
    didGlitch = true;
  }
  let tally = {
    hits: totHits,
    glitch: didGlitch,
    critglitch: didCritGlitch,
  };
  //console.log(tally);
  return tally;
};

function calcSuccesses(){
  var res = Math.floor(Math.random()*6) + 1;
  return res;
};