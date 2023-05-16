
    // Create Dino Constructor
    function Dino(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
    }


    // Create Dino Objects
    const triceratops = new Dino(
        "Triceratops",
        13000,
        114,
        "herbavor",
        "North America",
        "Late Cretaceous",
        "First discovered in 1889 by Othniel Charles Marsh"
    );


    // Create Human Object
    const human = {
        name: "John",
        height: 180,
        weight: 80,
        diet: "omnivore"
    };

    // Use IIFE to get human data from form
    (function() {
        const form = document.getElementById("dino-compare");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const feet = document.getElementById("feet").value;
            const inches = document.getElementById("inches").value;
            const weight = document.getElementById("weight").value;

        });
    })();



    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches
     

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
