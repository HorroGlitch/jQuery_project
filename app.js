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


async function afficherFilms() {
    const reponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=${nom}&APPID=0eee845fbfb08dcc0204fcb70613dc4a");
    const films = await reponse.json();
    console.log(films);
  }