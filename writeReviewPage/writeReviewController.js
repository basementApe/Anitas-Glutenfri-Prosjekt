// ISAK
function userText(textInput) {
    model.viewState.writeReviewPage.userReview = textInput;

}
function userReviewName(textInput) {
    model.viewState.writeReviewPage.userName = textInput;

}
function userScore(input) {
    model.viewState.writeReviewPage.userScore = input;
}
function sendReview() {
    const d = new Date();
    let newDate =`${d.getFullYear()}-${d.getDate()}-${d.getMonth()}`
    const m = model.viewState.writeReviewPage;
    const storeId = model.data.cities[model.viewState.storeFrontPage.selectedCity].store[model.viewState.storeFrontPage.selectedStore];
    let tempObj = {
        name: m.userName,
        pictures: [m.userPicture],
        score: m.userScore,
        reviewText: m.userReview,
        date: newDate,
        likes: 0,
        allergyList: {
                        vegan: m.allergyList.vegan,
                        milk: m.allergyList.milk,
                        nuts: m.allergyList.nuts,
                        wheat: m.allergyList.wheat,
                     },    

    }
    console.log(tempObj)
    storeId.reviews.push(tempObj)

      m.userScore = undefined;
      m.userReview = "";
      m.userName = "";
      m.userPicture = [];

      m.allergyList.vegan = false;
      m.allergyList.milk = false;
      m.allergyList.nuts = false;
      m.allergyList.wheat = false;
    goBack()
 
}
function validateReview () {
    const wrongInput = document.getElementById("wrongInput")
    let accepted = false;

    if (model.viewState.writeReviewPage.userScore === undefined){
        wrongInput.innerHTML = "Husk å velg hvor mange stjerner du vil gi";
        accepted = false;
        
    }
    if (model.viewState.writeReviewPage.userName === ""){
        wrongInput.innerHTML = "Husk å skrive navn";
        accepted = false;
        
    }
    if (model.viewState.writeReviewPage.userReview === ""){
        wrongInput.innerHTML = "Husk å skriv en anmeldelse";
        accepted = false;
        
    }
    if (model.viewState.writeReviewPage.userReview !== "" &&
        model.viewState.writeReviewPage.userName !== "" &&
        model.viewState.writeReviewPage.userScore !== undefined) {
        accepted = true;
        }
    
    if (accepted === true){
        wrongInput.innerHTML = "";
        sendReview()
    }
}
function toggleAllergy(card, allergy) {
  card.classList.toggle("toggle");

  if (allergy === "vegan"){
    if (model.viewState.writeReviewPage.allergyList.vegan === false){
    return model.viewState.writeReviewPage.allergyList.vegan = true;
    }
    else {
     return model.viewState.writeReviewPage.allergyList.vegan = false;
    }
  }
    
  if (allergy === "milk"){
    if (model.viewState.writeReviewPage.allergyList.milk === false){
    return model.viewState.writeReviewPage.allergyList.milk = true;
    }
    else {
     return model.viewState.writeReviewPage.allergyList.milk = false;
    }
  }

  if (allergy === "nuts"){
    if (model.viewState.writeReviewPage.allergyList.nuts === false){
    return model.viewState.writeReviewPage.allergyList.nuts = true;
    }
    else {
     return model.viewState.writeReviewPage.allergyList.nuts = false;
    }
  }
  if (allergy === "wheat"){
    if (model.viewState.writeReviewPage.allergyList.wheat === false){
    return model.viewState.writeReviewPage.allergyList.wheat = true;
    }
    else {
     return model.viewState.writeReviewPage.allergyList.wheat = false;
    }
  }
}
function handleImageUpload(images){
model.viewState.writeReviewPage.userPicture = images[0]
}