// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let astronaut = document.getElementById("container");
            astronaut.innerHTML = `
                <div class = "astronaut">
                    <div class = "bio"
                        <h3><b>${json[0].firstName} ${json[0].lastName}</b>
                        <ul>
                            <li>Hours in space: ${json[0].hoursInSpace}
                            <li>Active: ${json[0].active}
                            <li>Skills: ${json[0].skills}
                        </ul>
                    </div>
                    <img class="avatar" src=${json[0].picture}
                </div>`;
                             
        });
    });
});