let studentMarks = ("number")
function gradeGenerator(){
    //this function prompts the user to input student marks

    if (studentMarks >= 79){
        console.log("Grade : A");
    }
    else if (studentMarks < 79 && studentMarks >= 60) {
        console.log("Grade : B");
    }
    else if (studentMarks <=59 && studentMarks >=49) {
        console.log( "Grade : C");
        }
    else if (studentMarks <49 && studentMarks >=40) {
        console.log("Grade : D");
    }
    else if (studentMarks <40) {
        console.log("Grade : E");
    }
}
gradeGenerator(10);