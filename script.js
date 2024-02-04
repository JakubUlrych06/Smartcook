document.addEventListener("DOMContentLoaded", function () {
    const toleranceBtn = document.getElementById("toleranceBtn");
    const toleranceOptions = document.getElementById("toleranceOptions");
    const checkboxes = document.querySelectorAll('.tolerance-options input[type="checkbox"]');
    

    toleranceBtn.addEventListener("click", function () {                                                        //      Tolerance Toggle       
        toleranceOptions.style.display = (toleranceOptions.style.display === "none") ? "block" : "none";
    });

    checkboxes.forEach(function (checkbox) {        //                                                                  Tolerance border 
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                checkbox.parentNode.style.borderColor = "#66bb6a"; // Change to your desired color
            } else {
                checkbox.parentNode.style.borderColor = "transparent";
            }
        });
    });
});





document.addEventListener("DOMContentLoaded", function () { //                                                            Price  toggle
    // Get references to the button and options elements    
    var priceBtn = document.getElementById("priceBtn");
    var priceOptions = document.getElementById("priceOptions");

    // Add a click event listener to the button
    priceBtn.addEventListener("click", function () {
        // Toggle the display property of the price options
        if (priceOptions.style.display === "none" || priceOptions.style.display === "") {
            priceOptions.style.display = "block";
        } else {
            priceOptions.style.display = "none";
        }
    });
});


    const priceOptions = document.getElementById('priceOptions');   //                                                     Price border 

    priceOptions.addEventListener('change', function (event) {
        const checkboxes = priceOptions.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach(function (checkbox) {
            const label = checkbox.parentElement;

            if (checkbox.checked) {
                label.style.borderColor= "#66bb6a"; // Change the border color for checked items
            } else {
                label.style.borderColor = "transparent"; // Change it back to the default for unchecked items
            }
        });
    });

                                                            //                                                              Difficulty toggle 
    function toggleBorderColor() {          
        document.querySelectorAll('.difficulty-options input[type="checkbox"]').forEach(function (checkbox) {
            checkbox.parentNode.style.borderColor = checkbox.checked ? "transparent" : "#66bb6a";
            checkbox.parentNode.style.color = "black";
        });
    }

    document.querySelectorAll('.difficulty-options input[type="checkbox"]').forEach(function (checkbox) {
        checkbox.addEventListener("change", toggleBorderColor);
    });
    
document.addEventListener("DOMContentLoaded", function () {

    var difficultyBtn = document.getElementById("difficultyBtn");
    var difficultyOptions = document.getElementById("difficultyOptions");

    difficultyBtn.addEventListener("click", function () {
        difficultyOptions.style.display = (difficultyOptions.style.display === "none" || difficultyOptions.style.display === "") ? "block" : "none";
    });


                            //                                                                                              Difficulty border

});


    const toggleButton = document.getElementById('toggleButton');  //                                                           Menu toggle
    toggleButton.addEventListener('click', function () {
        if (toleranceBtn.style.display === 'none') {
            toleranceBtn.style.display = 'block';
            toleranceOptions.style.display = 'none'
        } else {
            toleranceBtn.style.display = 'none';
            toleranceOptions.style.display = 'none'
        }
        if (priceBtn.style.display === 'none') {
            priceBtn.style.display = 'block';
            priceOptions.style.display = 'none'
        } else {
            priceBtn.style.display = 'none';
            priceOptions.style.display = 'none'
        }
        if (difficultyBtn.style.display === 'none') {
            difficultyBtn.style.display = 'block';
            difficultyOptions.style.display = 'none'
        } else {
            difficultyBtn.style.display = 'none';
            difficultyOptions.style.display = 'none'

        }
    });
    function toggleMenu() {
        var priceOptions = document.getElementById("priceOptions");
        priceOptions.style.display = (priceOptions.style.display === "none") ? "block" : "none";
    }

    document.addEventListener("DOMContentLoaded", function () {
        // Get all checkboxes in the toleranceOptions section
        var toleranceCheckboxes = document.querySelectorAll('#toleranceOptions input[type="checkbox"]');
    
        // Check each checkbox
        toleranceCheckboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    
        // Similar logic for other checkbox sections (priceOptions, difficultyOptions) if needed
    });
    
    // Add a script to handle navigation
document.addEventListener("DOMContentLoaded", function () {
    const recipeButtons = document.querySelectorAll('.square-button');

    recipeButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the href attribute of the clicked button
            const recipePageLink = button.getAttribute('href');
            // Navigate to the recipe page
            window.location.href = recipePageLink;
        });
    });
});
        //                                                                                                                  tolerance filter
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.tolerance-options input[type="checkbox"]');
    const priceCheckboxes = document.querySelectorAll('.price-options input[type="checkbox"]');
    const difficultyCheckboxes = document.querySelectorAll('.difficulty-options input[type="checkbox"]');
    const recipes = document.querySelectorAll('.square-button');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", filterRecipes);
    });

    priceCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", filterRecipes);
    });

    difficultyCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", filterRecipes);
    });

    function filterRecipes() {
        recipes.forEach(function (recipe) {
            const filters = getFilters(recipe);
            let isVisible = true;

            checkboxes.forEach(function (checkbox) {
                const filterName = checkbox.name;
                const filterValue = checkbox.checked;
                if (filters[filterName] && !filterValue) {
                    isVisible = false;
                }
            });

            priceCheckboxes.forEach(function (checkbox) {
                const filterName = checkbox.name;
                const filterValue = checkbox.checked;
                if (filters[filterName] && !filterValue) {
                    isVisible = false;
                }
            });

            difficultyCheckboxes.forEach(function (checkbox) {
                const filterName = checkbox.name;
                const filterValue = checkbox.checked;
                if (filters[filterName] && !filterValue) {
                    isVisible = false;
                }
            });

            if (isVisible) {
                recipe.style.visibility = "visible";
            } else {
                recipe.style.visibility = "hidden";
            }
        });
    }

    function getFilters(recipe) {
        const filters = {};
        for (const key in recipe.dataset) {
            filters[key.toLowerCase()] = recipe.dataset[key].toLowerCase() === "true";
        }
        return filters;
    }
});


//                                                                                                                      price filter
document.addEventListener("DOMContentLoaded", function () {
    const priceCheckboxes = document.querySelectorAll('.price-options input[type="checkbox"]');
    const recipes = document.querySelectorAll('.square-button');

    priceCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", filterRecipes);
    });

    function filterRecipes() {
        const selectedPriceOptions = Array.from(priceCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.name.toLowerCase());

        recipes.forEach(function (recipe) {
            const recipePriceOption = recipe.dataset.price.toLowerCase();

            const isVisible = selectedPriceOptions.includes(recipePriceOption);
            
            recipe.style.visibility = isVisible ? "visible" : "hidden";
        });
    }
});






document.addEventListener("DOMContentLoaded", function () {
    const difficultyCheckboxes = document.querySelectorAll('.difficulty-options input[type="checkbox"]');
    const recipes = document.querySelectorAll('.square-button');

    difficultyCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", filterRecipes);
    });

    function filterRecipes() {
        const selectedDifficultyOptions = Array.from(difficultyCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.name.toLowerCase());

        recipes.forEach(function (recipe) {
            const recipeDifficultyOption = recipe.dataset.difficulty;

            if (typeof recipeDifficultyOption === "string") {
                const isVisible = selectedDifficultyOptions.includes(recipeDifficultyOption.toLowerCase());
                recipe.style.visibility = isVisible ? "hidden" : "visible";
            } else {
                // Handle the case where dataset.difficulty is not a string or undefined
                console.error("Dataset difficulty is not a string or undefined for the recipe element:", recipe);
                recipe.style.visibility = "visible"; // Show the recipe if difficulty is not a string or undefined
            }
        });
    }
});
