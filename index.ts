// first question
function rectangleArea(length:number, width:number):number {
    return length*width
}

// second question
function circleDiameter(circumference:number):number {
    return circumference / Math.PI
}

function circleCircumference(radius:number):number {
    return 2*Math.PI*radius
}

function circleArea(radius:number):number {
    return Math.PI * radius**2
}

// third question
function findAngle(a:number, b:number):number {
    return 180 - (a+b)
}

// forth question
function findDateDifference(date1:Date, date2:Date):number{
    const diffMiliseconds:number = Math.abs(date1.getTime() - date2.getTime());
    return Math.floor(diffMiliseconds / (24*60*60*1000));
}

// fifth question 
function findInitial(name:string):string {
    const initials = name.split(" ");
    return initials.map(a => a.charAt(0).toUpperCase()).join("");
}

// run question;
console.log("The area of rectangle is " + rectangleArea(10,10))

console.log("The diameter of circe is " + circleDiameter(40));
console.log("The circumference of circe is " + circleDiameter(10));
console.log("The area of circe is " + circleDiameter(10));

console.log("The angle is " + findAngle(45, 45));

console.log("The date difference is " + findDateDifference(new Date('08/08/2022'), new Date('08/08/2024')));

console.log("The initials is " + findInitial("Inggis Kurnia Trisiawan"));
