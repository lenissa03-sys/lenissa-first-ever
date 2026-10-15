// Exercises 4 and 5: variables as arguments, and data you can see
// beat comes from exercise3.js. Every file on the page can use the variables the others make.

function playNote(name, length, time) {
  // TODO 5: log what is playing, before the note plays:
  //         console.log("Playing " + name + " for " + length);

  console.log("playing" + name + "for" + length)

  //is this right? just this?

  synth.triggerAttackRelease(name, length, time);
}

// TODO 4a: store the three notes and one length in variables, here, above the function.

  const note4 = "C4";
  const note5 = "G4";
  const note6 = "C5";

  let noteLength1 = "2n"
    //why not a const? bc the lenght can be adjusted?


// TODO 4b: use those variables in the calls below instead of the values typed in.
// TODO 4c: change the length variable once. Do all three notes change?

function exercise4(start) {
  playNote(note4, noteLength1, start);
  playNote(note5, noteLength1, start + beat);
  playNote(note6, noteLength1, start + beat * 2);


    //Doesnt sound right?????? no changes made??????
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-4", exercise4);
