var options = JSON.parse(window.localStorage.getItem('games'));

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < options.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(options[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('foo').appendChild(makeUL(options[0]));


window.addEventListener('load', () => {
  console.log(localStorage);
});

