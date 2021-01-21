const imageBox = document.getElementById('images');
        const searchForm = document.getElementById('search-form');
        const apiKey = "c919b32e24ecd6635e56a30fc18ecabe"


        searchForm.addEventListener("submit", async function(e){
            e.preventDefault();
            imageBox.innerHTML = ""
            let val = searchForm["search"].value;
            const photos = await fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+apiKey+"&text="+ val +"&safe_search=1&per_page=20&format=json&nojsoncallback=1").then(res => res.json());
            console.log(photos["photos"]);
            var items = [];
            photos["photos"]["photo"].map((v, i) => {
                items.push(`https://farm${v.farm}.staticflickr.com/${v.server}/${v.id}_${v.secret}.jpg`)
            })
            items.forEach(v => {
                imageBox.innerHTML += "<img src="+ v +"/>"
            })
        })

    const clearIcon = document.getElementById("clear-icon");
    const searchBar = document.getElementById("search");

    searchBar.addEventListener("keyup", () => {
        if(searchBar.value){
            clearIcon.classList.remove("hidden");
        } else if(!searchBar.value) {
            clearIcon.classList.add("hidden");
        }
    });

    clearIcon.addEventListener("click", () => {
        searchBar.value = "";
        clearIcon.classList.add("hidden");
})