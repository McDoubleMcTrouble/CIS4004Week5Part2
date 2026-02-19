document.addEventListener("DOMContentLoaded", function () {

    const filterForm = document.getElementById("filterContent");
    const addForm = document.getElementById("newContent");

    // Hide both forms on load
    filterForm.style.display = "none";
    addForm.style.display = "none";

    window.showFilter = function () {
        filterForm.style.display = "block";
        addForm.style.display = "none";
    };

    window.showAddNew = function () {
        addForm.style.display = "flex";
        filterForm.style.display = "none";
    };

    window.filterArticles = function () {
        const showOpinion = document.getElementById("opinionCheckbox").checked;
        const showRecipe = document.getElementById("recipeCheckbox").checked;
        const showUpdate = document.getElementById("updateCheckbox").checked;

        const articles = document.querySelectorAll("#articleList article");

        articles.forEach(article => {
            if (article.classList.contains("opinion")) {
                article.style.display = showOpinion ? "block" : "none";
            } 
            else if (article.classList.contains("recipe")) {
                article.style.display = showRecipe ? "block" : "none";
            } 
            else if (article.classList.contains("update")) {
                article.style.display = showUpdate ? "block" : "none";
            }
        });
    };

    window.addNewArticle = function () {
        const title = document.getElementById("inputHeader").value;
        const text = document.getElementById("inputArticle").value;

        const opinion = document.getElementById("opinionRadio").checked;
        const recipe = document.getElementById("recipeRadio").checked;
        const update = document.getElementById("lifeRadio").checked;

        if (!title || !text || (!opinion && !recipe && !update)) {
            alert("Please complete all fields.");
            return;
        }

        let typeClass = "";
        let markerText = "";

        if (opinion) {
            typeClass = "opinion";
            markerText = "Opinion";
        } else if (recipe) {
            typeClass = "recipe";
            markerText = "Recipe";
        } else {
            typeClass = "update";
            markerText = "Update";
        }

        const article = document.createElement("article");
        article.classList.add(typeClass);

        article.innerHTML = `
            <span class="marker">${markerText}</span>
            <h2>${title}</h2>
            <p>${text}</p>
            <p><a href="moreDetails.html">Read more...</a></p>
        `;

        document.getElementById("articleList").prepend(article);

        document.getElementById("newContent").reset();
    };

});
