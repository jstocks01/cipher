/// back end code

/// front end code
$(document).ready(function() {
    var words = prompt("enter a sentence");
    var nameCapitalized = words.charAt(0).toUpperCase() + words.slice(1)+ words.charAt(-1).toUpperCase() + words.slice(0)
    alert(nameCapitalized);
});