// Arrays and iteration · Block 3: counting while you walk
// Exercises 9 to 11. Nothing plays in this block: the code runs every time you save,
// and the answers are in the console. Predict first, every time.
// After each exercise: save, read the console, and commit.

// A longer melody, with some notes more than once.
let melody = ["C4", "E4", "G4", "C4", "A4", "C4", "G4", "E4"];

// ---------- Exercise 9: count something ----------
// How many times does "C4" come in the melody?
// 9a Predict the count, in a comment, by reading the list above.
// 3 times
// TODO 9b: write it in three parts:
//            before the loop:  let count = 0;
//            in the loop:      if melody[i] is "C4", add one:  count++;
//            after the loop:   console.log("C4 comes " + count + " times");
// TODO 9c: move  let count = 0;  inside the loop, as the first line of the body. Predict, then

let count = 0;
for (let i = 0; i < melody.length; i++) {
  if (melody[i] === "C4") {
    count++;
  }
}

console.log("C4 comes " + count + " times")



//          run it. In a comment: what went wrong, and why? Then move it back.// count was not defined

// ---------- Exercise 10: count something else ----------
// TODO 10: write a second loop, with its own counter, that counts something you choose.
//          Give the counter a name that says what it counts. Predict, then check. Some ideas:
//            - notes that aren't "C4"                 (!==)
//            - notes that are "E4" or "G4"            (||)
//            - notes in the first half of the melody  (a test on i, not on melody[i])
//            - every note: what should that count be, without the loop?
let note1 = 0;
for (let i = 0; i < melody.length; i++){
  if (melody[i] !== "C4"){
    note1++;
  }
}
console.log("Notes that aren't C4: " + note1);

// ---------- Exercise 11: trace it by hand ----------
// A short melody, so you can follow every pass.
let short = ["E4", "C4", "G4", "C4"];
// TODO 11a: in a comment, write a table: one row per pass, with the value of i,
//           short[i], and the count at the START of that pass. Like this:
//             i | short[i] | count at the start
//             0 | "E4"     | 0
//             1 | ...
//           Then write what is logged after the loop.
//  i | short[i]
//  0 | "E4"    | 0
//  1 | "C4"    | 0
//  2 | "G4"    | 1
//  3 | "C4"    | 1
// in the table i am looking for matches to c4, why c4, bc its what weve worked with in this block. ===c4. and we didnt count the last c4 bc were showing the count before each pass. if it were to show after, last one will be 2


// TODO 11b: only now, write the loop that counts "C4" in short, and log the count after it.
//           Add  console.log(i, short[i], countShort);  as the first line of the body
//           to check your table, pass by pass.
let countShort = 0;
for (let i = 0; i < short.length; i++) {
  console.log(i, short[i], countShort);
  if (melody[i] === "C4") {
    countShort++;
  }
  console.log(i, short[i], countShort);
}
console.log("C4 comes " + countShort + " times in short")
