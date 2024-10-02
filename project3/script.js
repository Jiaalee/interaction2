

    setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * 6;

        hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;

        updateTime();
        checkTargetTime();
    }, 1000);

    function updateTime() {
        let hourElem = document.getElementById("hour");
        let minutesElem = document.getElementById("minutes");

        let today = new Date();
        let thisHour = today.getHours();
        let thisMinute = today.getMinutes();

        thisHour = thisHour < 10 ? "0" + thisHour : thisHour;
        thisMinute = thisMinute < 10 ? "0" + thisMinute : thisMinute;

        hourElem.textContent = thisHour;
        minutesElem.textContent = thisMinute;
    }

document.addEventListener("DOMContentLoaded", function() {
    var palette1Colors = {
        blob1: "#984ddf",
        blob2: "#4344ad",
        blob3: "#74d9e1",
        blob4: "#0e0e38",
        circle: "#74d9e1"
    };

    var palette2Colors = {
        blob1: "#ffeb58",
        blob2: "#ff834a",
        blob3: "#ffe986",
        blob4: "#fff4eb",
    };

    var circles = document.querySelectorAll('.circle');

    setInterval(() => {
        var today = new Date();
        var currentHour = today.getHours();

        if (currentHour >= 19 || currentHour < 7) {
            // Between 7 PM and 7 AM, use palette 1 colors
            updateBlobColors(palette1Colors);
            document.body.style.backgroundColor = "black";
    
        } else {
            // Otherwise, use palette 2 colors
            updateBlobColors(palette2Colors);
            document.body.style.backgroundCOlor = "white";
        }
    }, 1000);

    function updateBlobColors(colors) {
        var blobs = document.querySelectorAll('.blob path');
        blobs.forEach(function(blob, index) {
            switch (index) {
                case 0:
                    blob.style.fill = colors.blob1;
                    break;
                case 1:
                    blob.style.fill = colors.blob2;
                    break;
                case 2:
                    blob.style.fill = colors.blob3;
                    break;
                case 3:
                    blob.style.fill = colors.blob4;
                    break;
                    case 4:
                        blob.style.fill = colors.blob1;
                        break;
                    case 5:
                        blob.style.fill = colors.blob2;
                        break;
                    case 6:
                        blob.style.fill = colors.blob3;
                        break;
                    case 7:
                        blob.style.fill = colors.blob4;
                        break;
                    default:
                        break;
            }
        });
    }
});
