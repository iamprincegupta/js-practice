function greet(name){
    return "Hello" + name + "!"
}

console.log(greet("Prince"))
console.log(greet("Rahul"))



function add(a, b){
    return a + b
}

function multiply(a, b){
    return a*b
}

console.log("Add:", add(10, 5))
console.log("Multiply:", multiply(10, 5))



function calculateArea(length, width){
    return length * width
}

console.log("Area:", calculateArea(12, 8))




function checkAge(age){
    if (age >= 18){
        return "Adult"
    } else {
        return "Minor"
    }
}

console.log(checkAge(20))
console.log(checkAge(15))



function getGrade(marks){
    if (marks >= 90){
        return "A"
    } else if (marks >= 75){
        return "B"
} else if (marks >= 60){
    return "C"
} else if (marks >= 40){
    return "D"
} else {
    return "Fail"
}
}


console.log(getGrade(92))
console.log(getGrade(76))
console.log(getGrade(45))
console.log(getGrade(30))




function isEven(num){
    if (num % 2 === 0){
        return true
    } else {
        return false
    }
}


console.log(isEven(4))
console.log(isEven(7))





function findMax(a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > c) {
        return b
    } else {
        return c
    }
}

console.log(findMax(10, 45, 23))
console.log(findMax(99, 45, 23))
console.log(findMax(10, 45, 99))



function bmi(weight, height) {
    let result = weight / (height * height)

    if (result < 18.5) {
        return "Underweight — BMI: " + result
    } else if (result <= 24.9) {
        return "Normal — BMI: " + result
    } else {
        return "Overweight — BMI: " + result
    }
}

console.log(bmi(70, 1.75))
console.log(bmi(61, 1.75))