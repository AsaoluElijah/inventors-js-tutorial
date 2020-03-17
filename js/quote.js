var url = "https://api.quotable.io/random";
setInterval(() => {

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function(data) {
            // console.table(data);
            document.getElementById("quote").innerHTML = data.content;
            document.querySelector(".author").innerHTML = "- " + data.author;

        })

    .catch(function(err) {
        console.log(err);
    });

}, 5000);

// AJAX - asyncronous javascript and xml 
// callback function
// Promise