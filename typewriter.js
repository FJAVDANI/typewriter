const sentence = "hello there from lighthouse labs";
let delay = 0
for (const char of sentence) {
    delay = delay + 500
    setTimeout(() => {
        process.stdout.write(char);
        // print the char here
      }, delay) // <= 1s delay to make it noticeable. Can dial it down later.
    
  }
setTimeout (()=>{console.log()}, delay)