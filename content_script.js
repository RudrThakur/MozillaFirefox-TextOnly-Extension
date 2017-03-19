var element = document.querySelector(".banner");
element.parentElement.removeChild(element);

//var element1 = document.querySelector(".shop_canvas_td");
//element1.parentElement.removeChild(element1);




var elementone = document.getElementsByTagName("img"), index;

for (index = elementone.length - 1; index >= 0; index--) {
    elementone[index].parentNode.removeChild(elementone[index]);
}

