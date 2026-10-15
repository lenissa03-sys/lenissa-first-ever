// Exercise 7: a chord

// synth plays one note at a time, like one voice singing. That's all Tuesday's riff needed.
// A chord is several notes sounding at the same time. For that we need chordSynth, made in
// setup.js: a PolySynth ("poly" means many), which can play several notes at once.
const bottomNote = "c4";
const middleNote = "e4";
const topNote = "g4";

function exercise7(start) {
  chordSynth.triggerAttackRelease(bottomNote, "2n", start);
  chordSynth.triggerAttackRelease(middleNote, "2n", start + 1);
  chordSynth.triggerAttackRelease(topNote, "10n", start + 2);
}

// TODO 7a: play exercise 7 as it is. How many notes do you hear? Read the red error in the console.
    // C4, E4, G4, 8 charachters long
// TODO 7b: in exercise7, change synth to chordSynth in all three calls. Play again.



// TODO 7c: glue the three notes into one string, with a space between each, and log it:
//            const chord = bottomNote + " " + middleNote + " " + topNote;


// TODO 7d: log chord.toUpperCase(), then chord.length. Predict the length first: do the spaces count?

console.log(chord.length);

console.log("Exercise 7" + chord.toUpperCase());

console.log("Exercise 7" + chord.length)


console.log("Exercise 7: the chord is " + chord.length + " characters long");

// Chord is still e4, g4 and c4



// TODO 7e: log chord one last time. Has toUpperCase changed it?

console.log(chord)
//toUpperCase changed it

// ---------- You don't need to change anything below this line ----------

playOnClick("play-7", exercise7);
