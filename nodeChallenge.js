// challenge 1
const theOneFunc = (delay) => {
    return console.log("Hello World after " + delay + " seconds");
}

setTimeout(theOneFunc, 4 * 1000, 4);
setTimeout(theOneFunc, 8 * 1000, 8);