// TODO: add code here
window.addEventListener('load', function(){
  fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
    response.json().then(function(json){
      const astro = document.getElementById('container');
      // console.log(json)
      let sorted = json.sort((a,b) => (a.hoursInSpace < b.hoursInSpace) ? 1 : -1);
      
      let count = document.getElementById('astCount');
      count.innerHTML = `<h2>Count: ${json.length}</h2>`;
      for (let i = 0; i < json.length; i++){
        let isActiveColor = json[i].active ? 'green' : '';
        astro.innerHTML += `
        <div class='astronaut'>
          <div class='bio'>
            <h3>${json[i].firstName} ${json[i].lastName}</h3>
            <ul>
              <li>Hours in space: ${json[i].hoursInSpace}</li>
              <li id='isActive' style="color: ${isActiveColor};">Active: ${json[i].active}</li>
              <li>Skills: ${(json[i].skills.join(', '))}</li>
            </ul>
          </div>
          <img class='avatar' src='${json[i].picture}'</img>
        </div>
          `;
      };
    });
  });
})
