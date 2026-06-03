for (let i=1; i<=5; i++) {
    console.log("Number:", i)
}

for (let i=1; i<=10; i++){
    console.log("5 x " + i + "=" + (5*i))
}




let count = 1
while (count <= 5) {
    console.log("Count:", count)
    count++
}

let timer = 10
while (timer >= 0) {
    console.log("Timer:", timer)
    timer--
}




for (let i=1; i<=10; i++) {
    if (i === 6) {
        break
    }
    console.log(i)
}

for (let i=1; i<=10; i++) {
    if (i === 5) {
        continue
    }
    console.log(i)
}



for (let i=1; i<=30; i++){
    if(i % 15 === 0){
        console.log("FizzBuzz")
    } else if (i % 3 === 0){
        console.log("Fizz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}



for (let i=1; i<=10; i++) {
    console.log("--- Table of " + i + "---")
    for (let j=1; j<=10; j++) {
        console.log(i + "x" + j + "=" + (i*j))
    }
}