// Exercise 3: six ways to compare
// ===  is the same as        !==  is not the same as
// <    is less than          >    is more than
// <=   is at most            >=   is at least

function exercise3(start) {
  let bpm = 120;
  let octave = 5;

  synth.triggerAttackRelease("C" + octave, "8n", start);

  // TODO 3a: before you press the button, write your prediction (true or false) after each "I predict:".
  //          Then press it and check.
  console.log("Exercise 3: bpm === 90 is " + (bpm === 120)); // I predict: TRUE - FALSE
  console.log("Exercise 3: bpm !== 120 is " + (bpm !== 120)); // I predict:FALSE - FALSE
  console.log("Exercise 3: bpm < 90 is " + (bpm < 120)); // I predict: TRUE - FALSE
  console.log("Exercise 3: octave > 3 is " + (octave > 5)); // I predict: TRUE - TRUE
  console.log("Exercise 3: bpm <= 90 is " + (bpm <= 120)); // I predict: TRUE - FALSE
  console.log("Exercise 3: octave >= 5 is " + (octave >= 5)); // I predict: FALSE - TRUE

  // TODO 3b: change octave to 5 and bpm to 120. Predict all six again, then press.



  // TODO 3c: write two comparisons of your own about bpm and octave, and log them the same way.

  console.log("Exercise 3: bpm !== 90 is" + (bpm === 120)); // 
  console.log("Exercise 3: octave === 1 is" + (ocatve === 5)); // FALSE
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-3", exercise3);
