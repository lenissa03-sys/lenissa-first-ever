// Exercise 8: bug hunt

// The octave arrives as text, the way it would from a text box on a web page.
const typedOctave = "4";

// TODO 8a: predict what noteUp and noteDown hold. Then log them and play exercise 8.

//noteUp c5
//noteDown c3

console.log(noteDown, noteUp)

// TODO 8b: one note is wildly wrong. Why? Fix noteUp so it really is one octave up.
//- "4"+1 glues them togeheter to 41, instead of c5, it was c41

// The fix: turn the text into a number before doing arithmetic with it.

const noteUp = "C" + (number(typedOctave + 1));
const noteDown = "C" + (number(typedOctave - 1));

console.log("Exercise 8: up is " + noteUp + ", down is " + noteDown);

function exercise8(start) {
  synth.triggerAttackRelease(noteDown, "4n", start);
  synth.triggerAttackRelease(noteUp, "4n", start + 0.5);
}





// ---------- You don't need to change anything below this line ----------

playOnClick("play-8", exercise8);
