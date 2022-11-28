function analyze(json) {


    // document.getElementById("rawJSON").innerHTML = json.meals[0].mealId[5];
    images = [];
    mealName = [];
    mealId = [];
    for (let key in json) {
        let value = json[key];
        if(value == null){
            let final = "No meals found";
            $(".notFound").append(final);
        }else{
        for (i = 0; i < value.length; i++) {
            images.push(value[i].strMealThumb);
            mealName.push(value[i].strMeal);
            mealId.push(value[i].idMeal);
        }
    }
    }


    for (let i = 0; i < images.length; i++) {
        displayFoodImage(images[i], mealName[i], mealId[i]);
    }



} // analyze


function displayFoodImage(foodImage, mealName, mealId) {


    let code1 = "<div class='img-with-text'>";
    let code = "<img src='" + foodImage + "' class='foodImages' onclick='foodPage(" + mealId + ")'>";
    let code2 = "<p>" + mealName + "</p>";
    let code3 = "</div";
   
    let final = code1 + code + code2 + code3;
    $(".container55").append(final);
}

function foodPage(mealId) {
  
    window.location.href = "foodPage.html?param=" + mealId;



} // foodPage

function designFoodPage() {



    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page_type = urlParams.get('param');
    let fullURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + page_type;

    $.get(fullURL, function(data) {
        
        createFoodPage(data);
    });


} // designFoodPage


function createFoodPage(data) {

    images = [];
    mealName = [];
    instructions = [];
    video = [];
    ingredients = [];
    measurement = [];
    let counter = 1;
    for (let key in data) {
        let value = data[key];
        images.push(value[0].strMealThumb);
        mealName.push(value[0].strMeal);
        instructions.push(value[0].strInstructions);
        video.push(value[0].strYoutube);
        ingredients.push(value[0].strIngredient1);
        ingredients.push(value[0].strIngredient2);
        ingredients.push(value[0].strIngredient3);
        ingredients.push(value[0].strIngredient4);
        ingredients.push(value[0].strIngredient5);
        ingredients.push(value[0].strIngredient6);
        ingredients.push(value[0].strIngredient7);
        ingredients.push(value[0].strIngredient8);
        ingredients.push(value[0].strIngredient9);
        ingredients.push(value[0].strIngredient10);
        ingredients.push(value[0].strIngredient11);
        ingredients.push(value[0].strIngredient12);
        ingredients.push(value[0].strIngredient13);
        ingredients.push(value[0].strIngredient14);
        ingredients.push(value[0].strIngredient15);
        ingredients.push(value[0].strIngredient16);
        ingredients.push(value[0].strIngredient17);
        ingredients.push(value[0].strIngredient18);
        ingredients.push(value[0].strIngredient19);
        ingredients.push(value[0].strIngredient20);

        measurement.push(value[0].strMeasure1);
        measurement.push(value[0].strMeasure2);
        measurement.push(value[0].strMeasure3);
        measurement.push(value[0].strMeasure4);
        measurement.push(value[0].strMeasure5);
        measurement.push(value[0].strMeasure6);
        measurement.push(value[0].strMeasure7);
        measurement.push(value[0].strMeasure8);
        measurement.push(value[0].strMeasure9);
        measurement.push(value[0].strMeasure10);
        measurement.push(value[0].strMeasure11);
        measurement.push(value[0].strMeasure12);
        measurement.push(value[0].strMeasure13);
        measurement.push(value[0].strMeasure14);
        measurement.push(value[0].strMeasure15);
        measurement.push(value[0].strMeasure16);
        measurement.push(value[0].strMeasure17);
        measurement.push(value[0].strMeasure18);
        measurement.push(value[0].strMeasure19);
        measurement.push(value[0].strMeasure20);




    } // for

    document.getElementById("food-title").innerHTML = mealName[0];
    document.getElementById('food-image').innerHTML = '<img width="400" height="400" class="food-image2" id="food-opac" onclick="openModal()" src=" ' + images[0] + '">';
    document.getElementById("imgClickAndChange").src = images[0];

    let videoLink = video[0].replace('watch?v=', 'embed/')
    videoLink = '<iframe width="400" height="400" class="food-image2" src="' + videoLink + ' "></iframe>';
    
    $("#food-image").append(videoLink);

    let tab = "<table class='ingre-table2'>";
    let header = "<tr class='ingre-table2'><th class='ingre-table2'>Ingredients</th> <th class='ingre-table2'>Measurements</th></tr>";
    let content = "";
    
    for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i] != "") {
            content += "<tr class='ingre-table2'><td class='ingre-table2'>" + ingredients[i] + "</td><td class='ingre-table2'>" + measurement[i] + "</td></tr>";
        } else {
            break;
        }
    } // for

    let tabEnd = "</table>";

    let finalOutput = tab + header + content + tabEnd;
    
    document.getElementById("ingre-table").innerHTML = finalOutput;
    let total = instructions[0];
    let result = total.replace(/\n/g, '</br>');

    result = '<p id="instr"><span id="instr-title">Instructions<br><br></span>' + result + '</p>';
    document.getElementById("instruction").innerHTML = result;
    // $("#instruction").append(result);

} // createFoodPage


function getJSON(searchItem) {

    let baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    
    // get information entered to web-page here
    //let searchItem = document.getElementById("foodItem").value;
    // using baseURL + information entered, create full URL
    let fullURL;
    if(searchItem == ""){
        fullURL = baseURL + ".";
    }else{
     fullURL = baseURL + searchItem;
    }


    // Make sure the fullURL works: copy and paste it in a browser:
   // console.log(fullURL);

    $.get(fullURL, function(data) {
        // The following line outputs the JSON response to the console:
        

        // The following line outputs the JSON response to the webpage:

        //$("#rawJSON").html(JSON.stringify(data));

        // The following line gives the JSON response to the analyze
        // function. From there, you can pull information from the JSON
        // response and display things on your webpage.

        analyze(data);
    });
} // getJSON



function getUrlData() {

    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const page_type = urlParams.get('foodItem');


    getJSON(page_type);

} // getURLData




$("#nav-btn").click(function() {
    $("nav").toggle("slow");
});



window.onresize = function() {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w >= 830) {
        $("nav").show();

        cond = 0;
        location.reload();
        return;
    }

}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function openModal() {
  document.getElementById("myModal").style.display = "block";

   
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}












