let startValue = process.argv[2];
let startTime;
if (process.argv[2].includes("s")) {
  startTime = startValue.slice(0, -1);
} else {
  startTime = startValue.slice(0, -3) * 60;
}
let firstTick = startTime - 1;
let countdown = global.setInterval(timer, 1000);
function timer() {
  if (firstTick === 0) {
    global.clearInterval(countdown);
    console.log("Time's up!");
  } else {
    console.log(`Left: ${firstTick--}s`);
  };
};
