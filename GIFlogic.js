// Array of animal list

var AnimalList = [
    "dog", "cat", "godfish","chunk","bird", "turtle", "sugar glider","chinchilla",
    "hermitcrab", "capybara", "pygmy goat", "chicken", "teacup pig", "frog","salamander"];

// creating a function to hold ajax

function AnimalListDisplay (){
var AnimalType = $(this).attr("data name");
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + AnimalType + "&api_key=dc6zaTOxFJmzC&limit=10";



$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
// Creating a div to hold the animals

var AnimalDiv = $("<div>");
// Storing the type data

var Type = response.Type;

// displaying the type data

var displayType = $("<p>").text("Type: " + Type);
// appending displaytype to the Animal div

AnimalDiv.append(displayType);

// getting image information 
var imgURL = response.images;
var images= $("<img>").attr("src", imgURL);
AnimalDiv.append(images);

$("#animal-view").prepend(AnimalDiv);




});
 // Function for displaying the animal list
 function Buttons() {

    $("#buttons-view").empty();

    // Looping through the array of animals
    for (var i = 0; i < AnimalList.length; i++) {

      var a = $("<button>");
      a.addClass("mybutton");
      a.attr("data-name", AnimalList[i]);
      a.text(AnimalList[i])
      $("#buttons-view").append(a);
     
    }
    Console.log(Buttons);
  }

  // The function handles events where an animal button is clicked
  $("#submit").on("click", function(event) {
    event.preventDefault();

    var Animal = $("#AddMore").val().trim();

    AnimalList.push(Animal);

    Buttons();
  });

  // Adding a click event listener to all elements with a class of "mybutton"
  $(document).on("click", ".mybutton", AnimalListDisplay);

  // Calling the renderButtons function to display the intial buttons
  Buttons();


Console.log(AnimalListDisplay);


}