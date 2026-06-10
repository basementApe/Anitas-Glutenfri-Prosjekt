// ISAK

function toggleCard(card) {
  card.classList.toggle("expanded");
}
function checkAllergy(allergyList) {
    let icons = '';

    if (allergyList.vegan) {
        icons += `<img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/allergy/vegan.svg" class="allergyIcon">`;
    }
    if (allergyList.milk) {
        icons += `<img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/allergy/milk.svg" class="allergyIcon">`;
    }
    if (allergyList.nuts) {
        icons += `<img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/allergy/nuts1.svg" class="allergyIcon">`;
    }
    if (allergyList.wheat) {
        icons += `<img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/allergy/wheat.svg" class="allergyIcon">`;
    }

    return icons;
}
function checkImage(image) {
   return image[0] ? `<img class="pic" src="${image}">` : `<div></div>`;
}
function likeBtn(like) {
    like = like + 1;
    console.log(like);
    updateView();
}
