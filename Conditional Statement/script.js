let age = 18;
let batch = "mern 2201";
let due = 8000;

if (age >= 18) {
  if (batch == "mern 2201") {
    if (due < 5000) {
      document.write("Can continue class in MERN 2201 batch ");
    } else {
      document.write("Will get 3 days to pay the due");
    }
  } else {
    document.write("Won't continue class in any other batch ");
  }
} else {
  document.write("Won't take admission at CIT");
}
