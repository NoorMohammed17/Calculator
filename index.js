let keys = document.querySelectorAll("#keyboard>div");
    let bag = "";

    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", myCalculator);
    }

    function myCalculator(event) {
        let targetNumber = event.target.innerText;
        //console.log(targetNumber)


        if (targetNumber == "C") {
            bag = "";
            document.querySelector("#screen").innerText = bag;
        }
        else if (targetNumber == "=") {
            document.querySelector("#screen").innerText = eval(bag);
        }

        else {
            bag += targetNumber;
            document.querySelector("#screen").innerText = bag;
        }

    }