let myName = "Prince"
let myAge = 20
let myCity = "Thane"
let isStudent = true

console.log("My name is " + myName)
console.log("I am " + myAge + " years old")
console.log("I live in " + myCity)
console.log("Am I a student? " + isStudent)

let a = 25
let b = 7

console.log("Sum:", a + b)
console.log("Difference:", a - b)
console.log("Product:", a * b)
console.log("Division:", a / b)
console.log("Remainder:", a % b)



let bodyWeight = 70
let bodyFatPercent = 24

let fatMass = bodyWeight * (bodyFatPercent / 100)
let leanMass = bodyWeight - fatMass

console.log("Fat mass:", fatMass, "kg")
console.log("Lean mass:", leanMass, "kg")

let targetFatPercent = 10
let targetFatMass = bodyWeight * (targetFatPercent / 100)
let targetLeanMass = bodyWeight - targetFatMass

console.log("At 10% body fat:")
console.log("Fat mass will be:", targetFatMass, "kg")
console.log("Lean mass will be:", targetLeanMass, "kg")