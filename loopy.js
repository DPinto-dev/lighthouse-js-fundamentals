for (let n = 100; n <= 200; n++) {
  if (n % 3 === 0 && n % 4 === 0) {
    // console.log(n);
    console.log("LoopyLighthouse");
  } else if (n % 3 === 0) {
    // console.log(n);
    console.log("Loopy");
  } else if (n % 4 === 0) {
    // console.log(n);
    console.log("Lighthouse");
  } else {
    console.log(n);
  }
}