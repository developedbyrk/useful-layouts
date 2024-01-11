function insetSuggestedMessage() {
    let newElement = document.createElement("div");
    let newElementText = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat sed facere voluptate doloremque. Commodi, in? Mollitia voluptatibus quos id tenetur omnis veniam aut ea.');
    newElement.classList.add('added-content')
    newElement.appendChild(newElementText);

    document.querySelector('.suggested-message-content').appendChild(newElement);
}

function deleteSuggestedMessage() {
    let removableItem = document.querySelector('.added-content:last-child');
    removableItem.remove();
}

function toggleSuggestedMessage(){
    document.querySelector('.suggested-message').classList.toggle('toggle-message');
}