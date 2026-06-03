let fruits=["Apple", "Banana", "Mango", "Orange"]

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[3])
console.log("Total Fruits:", fruits.length)
console.log("Last:", fruits[fruits.length-1])




let students =  ["Rahul", "Priya", "Amit"]

students.push("Prince")
students.unshift("Sneha")
console.log(students)

students.pop()
students.shift()
console.log(students)

console.log(students[1])



let marks = [85, 92, 78, 95, 60, 88]
for (let i=0; i<marks.length; i++) {
    console.log("Student " + (i+1) + " Marks:", marks[i])
}

let total = 0
for (let i=0; i<marks.length; i++) {
    total = total + marks[i]
}
console.log("Total:", total)

let average = total/marks.length
console.log("Average:", average)




let scores = [85, 92, 78, 95, 60, 88]
let highest = 0

for (let i=0; i<scores.length; i++) {
    if (scores[i] > highest){
        highest = scores[i]
    }
}
console.log("Highest Marks:", highest)

let lowest = 100

for (let i=0; i<scores.length; i++){
    if (scores[i] < lowest) {
        lowest = scores[i]
    }
}
console.log("Lowest Marks:", lowest)




let shopping = ["Rice", "Dal", "Oil", "Sugar", "Salt"]

shopping.push("Milk")
shopping.shift()

for (let i=0; i<shopping.length; i++) {
console.log((i+1) + "." + shopping[i])
}




let studentNames = ["Rahul", "Priya", "Amit", "Sneha", "Prince"]
let studentMarks = [85, 92, 78, 95, 88]

console.log("===RESULT CARD===")

for (let i=0; i<studentNames.length; i++) {
    let grade

    if (studentMarks[i] >=90 ) {
        grade = "A"
    } else if (studentMarks[i] >=75) {
        grade = "B"
    } else if (studentMarks[i] >=60) {
        grade = "C"
    } else {
        grade = "Fail"
    }
    console.log(studentNames[i] + " — " + studentMarks[i] + " — Grade: " + grade)
}

let allTotal = 0
for (let i=0; i<studentMarks.length; i++) {
    allTotal += studentMarks[i]
}
console.log("Class Average:", allTotal/studentMarks.length)