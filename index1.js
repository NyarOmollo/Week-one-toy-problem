 //This program takes the speed of a car as input 
speed Limit =70km/h
5->1 Point
Math.floor(1.3)
12 point -> suspended

 function speedDetector(speed) {
    for (const speedLimit = 70; 
        const kmPerPoint=5;

        if speed <= speedLimit + kmPerPoint) {
            console.log("ok");
            return;
        }
        const Demeritpoints = Math.floor ((speed - speedLimit) / kmPerPoint);
         if (Dimeritpoints >= 12)
         console.log("License suspended");
         else console.log("Points", Demeritpoints);
    }
    speedDetector(90);







