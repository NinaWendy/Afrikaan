var entry = document.getElementById("button");
entry.addEventListener("click", displayDetails());

function displayDetails() {
    var date = document.getElementById("date").value;

    let year = "";
    let month;
    let days;
    const myArray = date.split("-");
    year = myArray[0];
    month = parseFloat(myArray[1]);
    days = parseFloat(myArray[2]);
    console.log(year);
    console.log(month);
    console.log(days);
    //display alert if invalid month or day is entered
if(days<=0 || days>31 || month<=0 || month>12){
    alert("Enter valid month/day");
}
//split year into century and year
let cc =parseFloat(year.substring(0,2));
console.log(cc);
let yy =parseFloat(year.substring(2,4));
console.log(yy)
//another method to determine day of the week accurately
// let day=parseFloat((((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + days)%7);
let day = parseInt(( yy + (yy/4)+ days + month +cc)%7);
console.log(day);
   
    //initialize male and female array 
    let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var sex = document.detail.choice.value;
    var output = document.getElementById("output");
    console.log(output);
    //condition to assign name according to gender and day of week
    if (sex == "male" && day == 0) {
        output.innerHTML = male[0];
        console.log(male[0]);
    } else if (sex == "male" && day == 1) {
        output.innerHTML = male[1];
        console.log(male[1]);
    } else if (sex == "male" && day == 2) {
        output.innerHTML = male[2];
        console.log(male[2]);
    } else if (sex == "male" && day == 3) {
        output.innerHTML = male[3];
        console.log(male[3]);
    } else if (sex == "male" && day == 4) {
        output.innerHTML = male[4];
        console.log(male[4]);
    } else if (sex == "male" && day == 5) {
        output.innerHTML = male[5];
        console.log(male[5]);
    } else if (sex == "male" && day == 6) {
        output.innerHTML = male[6];
        console.log(male[6]);
    } else if (sex == "female" && day == 0) {
        output.innerHTML = female[0];
        console.log(female[0]);
    } else if (sex == "female" && day == 1) {
        output.innerHTML = female[1];
        console.log(female[1]);
    } else if (sex == "female" && day == 2) {
        output.innerHTML = female[2];
        console.log(female[2]);
    } else if (sex == "female" && day == 3) {
        output.innerHTML = female[3];
        console.log(female[3]);
    } else if (sex == "female" && day == 4) {
        output.innerHTML = female[4];
        console.log(female[4]);
    } else if (sex == "female" && day == 5) {
        output.innerHTML = female[5];
        console.log(female[5]);
    } else if (sex == "female" && day == 6) {
        output.innerHTML = female[6];
        console.log(female[6]);
    } else {
        console.log("No entry");
    }
    // display alert message when some details are not entered
    function validate() {
        if (!sex || !date){
        alert("All details MUST be filled!");
        return false;
                }
      }
    validate();
}