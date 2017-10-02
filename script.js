document.addEventListener('DOMContentLoaded', function () {
    var mybtn = document.createElement('button');
    mybtn.innerText = ('Add Square');
    document.body.appendChild('mybtn');


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
       
        return color;

    
    

        function setRandomColor() {
            $("#colorpad").css("background-color", getRandomColor());


            mybtn.addEventListener('click', function () {
                var squareDiv = document.createElement('div');
                squareDiv.className = ('box');
                document.body.appendChild(squareDiv);
                var squareId = document.getElementsByTagName('div');
                squareDiv.id = squareId.length;

                var squarenum = document.createElement('h3');
                squarenum.innerText = (squareId.length);
                squareDiv.appendChild(squarenum);
            });
        });
    });
        });


        






