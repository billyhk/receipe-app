# Recipe App: Proposal

## Project Description

My app is called "i’m hungry". It’s a recipe app for people who don’t know what to eat, and don’t feel like flipping through all those bulky cookbooks. The user can search for a food by name, and the page is populated with the images of the search results. When the user clicks on an image, the the page shows information about the food, including a description, a list of ingredients, and step-by-step directions. In the future, I would like to add an advanced search feature so users can filter search results based on dietary restrictions, rating, and average price.

## Sketches

**Home Page**  
![Home Page](/readMe-images/wireframes/wireframe-home-page.png)  
**Show Page**  
![Show Page](/readMe-images/wireframes/wireframe-show-page.png)

## User Stories

**MVP User Stories**

- _As a user, I want to to be able to search for foods by name and be presented with many options represented by appetizing pictures of foods._

- _As a user, I want to be able to click on a picture of food and be shown a description of the food and a recipe so that I can decide if I want to try that._

- _As a user, I want to know all of the required ingredients so that I can determine if I am prepared to make the food right now._

**Post MVP Stretch Goals**

- _As a user, I want to request a random food._

- _As a user, I want to filter search results so that I can appease my vegan girlfriend._

## API

[Spoonacular API documentation](https://spoonacular.com/food-api/docs)

**Random Recipe Response**

```json
{
    "recipes": [{
                "vegetarian": false,
                "vegan": false,
                "glutenFree": true,
                "dairyFree": true,
                "veryHealthy": false,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "weightWatcherSmartPoints": 1,
                "gaps": "no",
                "lowFodmap": false,
                "aggregateLikes": 22,
                "spoonacularScore": 78.0,
                "healthScore": 22.0,
                "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                "license": "CC BY 3.0",
                "sourceName": "Foodista",
                "pricePerServing": 133.22,
                "extendedIngredients": [{
                    "id": 10123,
                    "aisle": "Meat",
                    "image": "raw-bacon.png",
                    "consistency": "solid",
                    "name": "bacon",
                    "original": "2 slices of bacon cut in small slices (center cut preferred)",
                    "originalString": "2 slices of bacon cut in small slices (center cut preferred)",
                    "originalName": "bacon cut in small slices (center cut preferred)",
                    "amount": 2.0,
                    "unit": "slices",
                    "meta": ["cut in small slices (center cut preferred)"],
                    "metaInformation": ["cut in small slices (center cut preferred)"],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "slice",
                            "unitLong": "slices"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "slice",
                            "unitLong": "slices"
                        }
                    }
                }, {
                    "id": 11098,
                    "aisle": "Produce",
                    "image": "brussels-sprouts.jpg",
                    "consistency": "solid",
                    "name": "brussels sprouts",
                    "original": "1 1/2 pounds Brussels sprouts, trimmed and halved",
                    "originalString": "1 1/2 pounds Brussels sprouts, trimmed and halved",
                    "originalName": "Brussels sprouts, trimmed and halved",
                    "amount": 1.5,
                    "unit": "pounds",
                    "meta": ["trimmed", "halved"],
                    "metaInformation": ["trimmed", "halved"],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 680.389,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                }, {
                    "id": 9152,
                    "aisle": "Produce",
                    "image": "lemon-juice.jpg",
                    "consistency": "liquid",
                    "name": "lemon juice",
                    "original": "1 tablespoon freshly squeezed lemon juice",
                    "originalString": "1 tablespoon freshly squeezed lemon juice",
                    "originalName": "freshly squeezed lemon juice",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": ["freshly squeezed"],
                    "metaInformation": ["freshly squeezed"],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                }, {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "solid",
                    "name": "salt and pepper",
                    "original": "Salt and pepper",
                    "originalString": "Salt and pepper",
                    "originalName": "Salt and pepper",
                    "amount": 4.0,
                    "unit": "servings",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                }, {
                    "id": 11677,
                    "aisle": "Produce",
                    "image": "shallots.jpg",
                    "consistency": "solid",
                    "name": "shallot",
                    "original": "1 large shallot, peeled and thinly sliced",
                    "originalString": "1 large shallot, peeled and thinly sliced",
                    "originalName": "shallot, peeled and thinly sliced",
                    "amount": 1.0,
                    "unit": "large",
                    "meta": ["peeled", "thinly sliced"],
                    "metaInformation": ["peeled", "thinly sliced"],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "large",
                            "unitLong": "large"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "large",
                            "unitLong": "large"
                        }
                    }
                }],
                "id": 636365,
                "title": "Brussels Sprouts with Bacon and Shallots",
                "readyInMinutes": 45,
                "servings": 4,
                "sourceUrl": "http://www.foodista.com/recipe/G3FR8CXJ/brussels-sprouts-with-bacon-and-shallots",
                "image": "https://spoonacular.com/recipeImages/636365-556x370.jpg",
                "imageType": "jpg",
                "summary": "Brussels Sprouts with Bacon and Shallots might be just the side dish you are searching for. One serving contains <b>124 calories</b>, <b>7g of protein</b>, and <b>5g of fat</b>. For <b>\$1.33 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. A couple people made this recipe, and 20 would say it hit the spot. A mixture of bacon, salt and pepper, lemon juice, and a handful of other ingredients are all it takes to make this recipe so tasty. It is a good option if you're following a <b>caveman, gluten free, dairy free, and primal</b> diet. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 80%</b>. This score is good. Try <a href=\"https://spoonacular.com/recipes/brussels-sprouts-with-bacon-garlic-and-shallots-10699\">Brussels Sprouts with Bacon, Garlic, and Shallots</a>, <a href=\"https://spoonacular.com/recipes/roasted-brussels-sprouts-with-bacon-and-shallots-534752\">Roasted Brussels Sprouts with Bacon and Shallots</a>, and <a href=\"https://spoonacular.com/recipes/brussels-sprouts-with-crispy-bacon-and-shallots-206996\">Brussels Sprouts with Crispy Bacon and Shallots</a> for similar recipes.",
                "cuisines": [],
                "dishTypes": ["side dish"],
                "diets": ["gluten free", "dairy free", "paleolithic", "primal"],
                "occasions": [],
                "winePairing": {},
                "instructions": "<ol><li>In a large skillet place the bacon and cook until golden brown.</li><li>Add the shallots and cook until tender. Add the Brussels sprouts and saut to high heat to give it a nice golden outside.</li><li>Add a squeeze of lemon, salt and pepper to season and serve.</li></ol>",
                "analyzedInstructions": [{
                            "name": "",
                            "steps": [{
                                        "number": 1,
                                        "step": "In a large skillet place the bacon and cook until golden brown."},
```

**Response from Search Query “Tiramisu”**

```json
{
    "results": [{
                "id": 249565,
                "title": "Vegan Chai Tiramisu",
                "readyInMinutes": 120,
                "servings": 12,
                "sourceUrl": "https://www.godairyfree.org/recipes/chai-tiramisu-vegan-nut-free",
                "openLicense": 0,
                "image": "Vegan-Chai-Tiramisu-249565.jpg"
            }, {
                "id": 218828,
                "title": "Chloe's pink tiramisu",
                "readyInMinutes": 25,
                "servings": 6,
                "sourceUrl": "https://www.bbcgoodfood.com/recipes/1263664/chloes-pink-tiramisu",
                "openLicense": 0,
                "image": "Chloes-pink-tiramisu-218828.jpg"
            }, {
                "id": 642614,
                "title": "Fast Tiramisu",
                "readyInMinutes": 45,
                "servings": 12,
                "sourceUrl": "https://www.foodista.com/recipe/2QR423YJ/fast-tiramisu",
                "openLicense": 2,
                "image": "Fast-Tiramisu-642614.jpg"
            },
```

**Recipe Response for one of the Tiramisu results**

```json
{"id": 249565,
"title": "Vegan Chai Tiramisu",
"readyInMinutes": 120,
"servings": 12,
"sourceUrl": "https://www.godairyfree.org/recipes/chai-tiramisu-vegan-nut-free",
"image": "https://spoonacular.com/recipeImages/249565-556x370.jpg",
"imageType": "jpg",
"summary": "Vegan Chai Tiramisu takes about <b>2 hours</b> from beginning to end. This recipe makes 12 servings with <b>279 calories</b>, <b>5g of protein</b>, and <b>7g of fat</b> each. For <b>$3.37 per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. It is a good option if you're following a <b>dairy free</b> diet. This recipe from Go Dairy Free requires sugar, energ egg replacer, ground cardamom, and ground fennel seeds. 29 people were glad they tried this recipe. A few people really liked this Mediterranean dish. Overall, this recipe earns an <b>improvable spoonacular score of 0%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/gluten-free-chai-tiramisu-67967\">Gluten-free Chai Tiramisu</a>, <a href=\"https://spoonacular.com/recipes/vegan-chai-latte-chai-spice-mix-1057301\">Vegan Chai Latte (& Chai Spice Mix)</a>, and <a href=\"https://spoonacular.com/recipes/vegan-chai-latte-626856\">Vegan Chai Latte</a>.",
"cuisines": ["Mediterranean", "Italian", "Eastern European", "European", "Greek"],
"dishTypes": [],
"diets": ["dairy free"],
"occasions": [], "winePairing": {},
"instructions": "In a small bowl, whisk together the cocoa, cinnamon, cardamom, cloves, and fennel.\nPut the dairy-free cream cheese, tofu, agave, sugar, creamer, and agar in your food processor or blender and process until thoroughly combined.\nPour the mixture into a saucepan and simmer it over medium heat for 5 minutes. Let cool, and refrigerate the mixture for at least 1 hour.\nPreheat your oven to 350°F.\nIn a large bowl, whisk together the flour, sugar, baking powder, and salt. Combine the dry ingredients together.\nIn a medium bowl, whisk together the creamer, agave, Energ-G “eggs,” and oil.\nFold the wet ingredients into the dry ingredients.\nScrape the batter into a pastry bag. Pipe the batter into 3-inch long by 1-inch wide cookies, leaving about a 1 inch between each cookie.\nBake for 18 minutes.\nOption: Do not pipe the batter, but fill a rectangular cake pan with the batter about 1” high and bake the cake for 25 minutes.\nPour the chai tea into a shallow bowl.\nDunk each ladyfinger in the chai tea for about 3 seconds.\nLine the bottom of a baking dish with the lady fingers and lightly brush them with a little chai tea. Spread about ½-inch of the sweet cream on top of the lady fingers. Repeat this process with another layer of lady fingers and sweet cream. Sprinkle the cocoa-chai spice mix over the top layer of sweet cream.\nChill the tiramisu for at least 30 minutes.", "analyzedInstructions": [{
        "name": "",
        "steps": [{
                    "number": 1,
                    "step": "In a small bowl, whisk together the cocoa, cinnamon, cardamom, cloves, and fennel."},
```

## Component Hierarchy

![Component Hierarchy](/readMe-images/components-tree.png)
