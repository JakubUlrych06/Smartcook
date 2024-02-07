document.addEventListener("DOMContentLoaded", function () {
    const toleranceBtn = document.getElementById("toleranceBtn");
    const toleranceOptions = document.getElementById("toleranceOptions");
    const checkboxes = document.querySelectorAll('.tolerance-options input[type="checkbox"]');
    

    toleranceBtn.addEventListener("click", function () {                                                  
        categoryOptions.style.display = 'none'
        difficultyOptions.style.display = 'none'
        dishOptions.style.display = 'none'
        priceOptions.style.display = 'none'
        
        categoryBtn.style.backgroundColor = 'white'; 
        difficultyBtn.style.backgroundColor = 'white';
        dishBtn.style.backgroundColor = 'white';
        priceBtn.style.backgroundColor = 'white';
        //                                                                                                            Tolerance Toggle       
        toleranceOptions.style.display = (toleranceOptions.style.display === "none") ? "block" : "none";
        toleranceBtn.style.backgroundColor = (toleranceOptions.style.display === "none") ? "white" : "#cffcd1";

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
        //          hides others
        toleranceOptions.style.display = 'none'
        categoryOptions.style.display = 'none'
        difficultyOptions.style.display = 'none'
        dishOptions.style.display = 'none'
        //          revers others color
        toleranceBtn.style.backgroundColor = 'white'; 
        categoryBtn.style.backgroundColor = 'white'; 
        difficultyBtn.style.backgroundColor = 'white';
        dishBtn.style.backgroundColor = 'white';
        // Toggle the display property of the price options
        if (priceOptions.style.display === "none" || priceOptions.style.display === "") {
            priceOptions.style.display = "block";
        } else {
            priceOptions.style.display = "none";
        }
        priceBtn.style.backgroundColor = (priceOptions.style.display === "none") ? "white" : "#cffcd1";

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

                                                            //                                                              Difficulty  
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
        toleranceOptions.style.display = 'none'
        categoryOptions.style.display = 'none'
        dishOptions.style.display = 'none'
        priceOptions.style.display = 'none'

        toleranceBtn.style.backgroundColor = 'white'; 
        categoryBtn.style.backgroundColor = 'white'; 
        dishBtn.style.backgroundColor = 'white';
        priceBtn.style.backgroundColor = 'white';

        difficultyOptions.style.display = (difficultyOptions.style.display === "none" || difficultyOptions.style.display === "") ? "block" : "none";
        difficultyBtn.style.backgroundColor = (difficultyOptions.style.display === "none") ? "white" : "#cffcd1";

    });





                    //                                                                                                            Dish button
// Assuming dishBtn is your button element
var dishBtn = document.getElementById("dishBtn");

dishBtn.addEventListener("click", function () {
    toleranceOptions.style.display = 'none'
    categoryOptions.style.display = 'none'
    difficultyOptions.style.display = 'none'
    priceOptions.style.display = 'none'

    toleranceBtn.style.backgroundColor = 'white'; 
    categoryBtn.style.backgroundColor = 'white'; 
    difficultyBtn.style.backgroundColor = 'white';
    priceBtn.style.backgroundColor = 'white';

    var dishOptions = document.getElementById("dishOptions");
    dishOptions.style.display = (dishOptions.style.display === "none") ? "block" : "none";
    dishBtn.style.backgroundColor = (dishOptions.style.display === "none") ? "white" : "#cffcd1";
});


    // Dish border
    function toggleDishBorderColor() {
        document.querySelectorAll('.dish-options input[type="checkbox"]').forEach(function (checkbox) {
            checkbox.parentNode.style.borderColor = checkbox.checked ? "transparent" : "#66bb6a";
            checkbox.parentNode.style.color = "black";
        });
    }

    document.querySelectorAll('.dish-options input[type="checkbox"]').forEach(function (checkbox) {
        checkbox.addEventListener("change", toggleDishBorderColor);
    });


    //                                                                                                                          Category button
const categoryBtn = document.getElementById("categoryBtn");
const categoryOptions = document.getElementById("categoryOptions");

categoryBtn.addEventListener("click", function () {
    toleranceOptions.style.display = 'none'
    difficultyOptions.style.display = 'none'
    dishOptions.style.display = 'none'
    priceOptions.style.display = 'none'

    toleranceBtn.style.backgroundColor = 'white'; 
    difficultyBtn.style.backgroundColor = 'white';
    dishBtn.style.backgroundColor = 'white';
    priceBtn.style.backgroundColor = 'white';

    categoryOptions.style.display = (categoryOptions.style.display === "none") ? "block" : "none";
    categoryBtn.style.backgroundColor = (categoryOptions.style.display === "none") ? "white" : "#cffcd1";

});

function toggleBorderColor() {
    document.querySelectorAll('.category-options input[type="checkbox"]').forEach(function (checkbox) {
        checkbox.parentNode.style.borderColor = checkbox.checked ? "transparent" : "#66bb6a";
        checkbox.parentNode.style.color = "black";
    });
}

document.querySelectorAll('.category-options input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener("change", toggleBorderColor);
});

document.addEventListener("DOMContentLoaded", function () {
    var categoryBtn = document.getElementById("categoryBtn");
    var categoryOptions = document.querySelector('.category-options');

    categoryBtn.addEventListener("click", function () {
        categoryOptions.style.display = (categoryOptions.style.display === "none" || categoryOptions.style.display === "") ? "block" : "none";
    });
});


});


    const toggleButton = document.getElementById('toggleButton');  //                                                           Menu toggle
    toggleButton.addEventListener('click', function () {
        toleranceBtn.style.backgroundColor = 'white'; 
        difficultyBtn.style.backgroundColor = 'white';
        dishBtn.style.backgroundColor = 'white';
        priceBtn.style.backgroundColor = 'white';
        categoryBtn.style.backgroundColor = 'white';
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
        if (dishBtn.style.display === 'none') {
            dishBtn.style.display = 'block';
            dishOptions.style.display = 'none'
        } else {
            dishBtn.style.display = 'none';
            dishOptions.style.display = 'none'
        }
        if (categoryBtn.style.display === 'none') {
            categoryBtn.style.display = 'block';
            categoryOptions.style.display = 'none'
        } else {
            categoryBtn.style.display = 'none';
            categoryOptions.style.display = 'none'
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

document.addEventListener("DOMContentLoaded", function () {
    const categoryCheckboxes = document.querySelectorAll('.category-options input[type="checkbox"]');
    const recipes = document.querySelectorAll('.square-button');

    categoryCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", filterRecipes);
    });

    function filterRecipes() {
        const selectedCategoryOptions = Array.from(categoryCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.name.toLowerCase());

        recipes.forEach(function (recipe) {
            const recipeCategoryOption = recipe.dataset.category;

            if (typeof recipeCategoryOption === "string") {
                const isVisible = selectedCategoryOptions.includes(recipeCategoryOption.toLowerCase());
                recipe.style.visibility = isVisible ? "hidden" : "visible";
            } else {
                // Handle the case where dataset.category is not a string or undefined
                console.error("Dataset category is not a string or undefined for the recipe element:", recipe);
                recipe.style.visibility = "visible"; // Show the recipe if category is not a string or undefined
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const dishCheckboxes = document.querySelectorAll('.dish-options input[type="checkbox"]');
    const recipes = document.querySelectorAll('.square-button');

    dishCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", filterRecipes);
    });

    function filterRecipes() {
        const selectedDishOptions = Array.from(dishCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.name.toLowerCase());

        recipes.forEach(function (recipe) {
            const recipeDishOption = recipe.dataset.dish;

            if (typeof recipeDishOption === "string") {
                const isVisible = selectedDishOptions.includes(recipeDishOption.toLowerCase());
                recipe.style.visibility = isVisible ? "hidden" : "visible";
            } else {
                // Handle the case where dataset.dish is not a string or undefined
                console.error("Dataset dish is not a string or undefined for the recipe element:", recipe);
                recipe.style.visibility = "visible"; // Show the recipe if dish is not a string or undefined
            }
        });
    }
});



//                                                                                                                              Blank space arrange


document.addEventListener("DOMContentLoaded", function () {
    const recipes = document.querySelectorAll('.square-button');
    const wrapper = document.querySelector('.wrapper');

    window.addEventListener('resize', updateGrid); // Update grid on window resize

    function updateGrid() {
        const visibleRecipes = Array.from(recipes).filter(recipe => recipe.style.visibility !== "hidden");

        visibleRecipes.forEach((recipe, index) => {
            const row = Math.floor(index / 4) + 1;
            const col = (index % 4) + 1;

            recipe.style.gridRow = row;
            recipe.style.gridColumn = col;
        });

        wrapper.style.gridTemplateRows = `repeat(${Math.ceil(visibleRecipes.length / 4)}, 500px)`;
    }

    function filterRecipes() {
        recipes.forEach(function (recipe) {
            const isVisible = recipe.style.visibility !== "hidden";
            recipe.style.display = isVisible ? "block" : "none";
        });

        updateGrid();
    }

    // Attach the filterRecipes function to the change event of checkboxes
    const checkboxes = document.querySelectorAll('.tolerance-options input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", filterRecipes);
    });

    const priceCheckboxes = document.querySelectorAll('.price-options input[type="checkbox"]');
    priceCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", filterRecipes);
    });

    const difficultyCheckboxes = document.querySelectorAll('.difficulty-options input[type="checkbox"]');
    difficultyCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", filterRecipes);
    });

    const dishCheckboxes = document.querySelectorAll('.dish-options input[type="checkbox"]');
    dishCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", filterRecipes);
    });

    const categoryCheckboxes = document.querySelectorAll('.category-options input[type="checkbox"]');
    categoryCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", filterRecipes);
    });

    // Initial update of the grid on page load
    updateGrid();
});

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const recipes = document.querySelectorAll('.square-button');
    const wrapper = document.querySelector('.wrapper');

    window.addEventListener('resize', updateGrid); // Update grid on window resize
    searchButton.addEventListener("click", filterRecipes);

    function filterRecipes() {
        const searchTerm = searchInput.value.toLowerCase();

        recipes.forEach(function (recipe) {
            const recipeTitle = recipe.dataset.title.toLowerCase();
            const isVisible = recipeTitle.includes(searchTerm);
            recipe.style.visibility = isVisible ? "visible" : "hidden";
        });

        updateGrid();
    }

    function updateGrid() {
        const visibleRecipes = Array.from(recipes).filter(recipe => recipe.style.visibility !== "hidden");

        visibleRecipes.forEach((recipe, index) => {
            const row = Math.floor(index / 4) + 1;
            const col = (index % 4) + 1;

            recipe.style.gridRow = row;
            recipe.style.gridColumn = col;
        });

        wrapper.style.gridTemplateRows = `repeat(${Math.ceil(visibleRecipes.length / 4)}, 500px)`;
    }

    // Initial update of the grid on page load
    updateGrid();
});
