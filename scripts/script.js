var listItemDelay = 0.6;

/*===========
    Animation: portfolio items
*/
var portfolioList = document.querySelector('#portfolio');
var portfolioChildrenNodeList = portfolioList.childNodes; // This is a NodeList
var portfolioChildren = [];

// Make an array of the Li elements from the nodelist. 0 and even numbers above that are node text
for (var i = 0; i < portfolioChildrenNodeList.length; i++) {
    if (i % 2 !== 0) {
        portfolioChildren.push(portfolioChildrenNodeList[i]);
    }
}


for (var i = 0; i < portfolioChildren.length; i++) {
    listItemDelay.toString();
    portfolioChildren[i].style.opacity = 0;
    portfolioChildren[i].style.animation = "0.6s ease-in " + listItemDelay + "s forwards fadein";
    listItemDelay = listItemDelay + 0.2;
}

/*===========
    Animation: footer contact
*/
var footerContact = document.getElementById("contact");
footerContact.style.opacity = 0;
footerContact.style.animation = "0.6s ease-in " + listItemDelay + "s forwards fadein";
