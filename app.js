// $("#lienEcole").append("<a>Site d'EDEN School</a> ")

// $("#lienEcole").ready(function(){

//     let link = $("<a>", {
//         href : "https://www.edenschool.fr/";
//         title : 
//     })
    
//     });


// $( "tr:odd" ).css("background-color","#99CCFF");


// $("td").each(function(){
//     console.log($(this).text());
// });



// $("h2").each(function(){
//     $("#menu").append(
//     $("<li>").append($("<a>", {
//         href : "#" + $(this).attr("id"),
//         text : "" +  $(this).text()
//     }))
// )
// })

// let last, diff
// $( "#paragraphClick" ).on( "click", function( event ) {
//     if ( last ) {
//       diff = event.timeStamp - last;
//       $( "#divPar" ).append( "time since last event: " + diff + "<br>" );
//     } else {
//       $( "#divPar" ).append( "Click again.<br>" );
//     }
//     last = event.timeStamp;
//   });


let ville = document.querySelector("h2")
let pays = document.querySelector("h3")
let nomDeVille = document.querySelector("#nomDeVille")
let submitIt = document.querySelector("#submitVille")

//On the top, I get 

async function town() {
    const reponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=lion&APPID=0eee845fbfb08dcc0204fcb70613dc4a");
    const nom = await reponse.json();
    console.log(nom)
    let minTemp = nom.dt.temp_min.weather[0].description
    console.log(minTemp)

    // const temp = new Promise
  }
  town()

  submitIt.addEventListener("click", ()=>{
    ville.textContent = nomDeVille.value
  })