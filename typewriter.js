const sentence = "Hello there from Abbotsford, BC!";
let ii = 0;
const inter = setInterval(() => {
  process.stdout.write(sentence[ii]);
  ii++;
  if (ii >= sentence.length) {
    clearInterval(inter);
    console.log()
  }
}, 50)
