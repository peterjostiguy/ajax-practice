$(document).ready(function(){
  $get("http://www.omdbapi.com/?t=rambo)", function(data){
    console.log(data)
  }
})
