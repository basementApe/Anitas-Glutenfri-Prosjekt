// ISAK
function updateView()
{
    viewCurrentPage();
    adminControl();
}


function viewCurrentPage()
{
    if (model.app.currentPage === "frontPage")
    {
        frontPage();
    }
    else if (model.app.currentPage === "selectionPage")
    {
        return selectionPage();
    }
    else if (model.app.currentPage === "storePage")
    {
        return storePage(0, 0);
    }
    else if (model.app.currentPage === "loginPage")
    {
        return viewLoginPage();
    }
    else if (model.app.currentPage === "registerUserPage")
    {
        return viewRegisterUserPage();
    }
     else if (model.app.currentPage === "writeReviewPage")
    {
        return writeReviewPage();
    }
}

function goBack (){
    if (model.app.currentPage === "frontPage")
    {
        model.app.currentPage = "loginPage";
        updateView();
    }
    else if (model.app.currentPage === "storePage")
    {
        model.app.currentPage = "frontPage"
        updateView();
    }
    else if (model.app.currentPage === "loginPage" || model.app.currentPage === "registerUserPage")
    {
        model.app.currentPage = "frontPage"
        updateView();
    }
    else if (model.app.currentPage === "writeReviewPage")
    {
        model.app.currentPage = "storePage"
        updateView();
    }

}

function goForward() {
       if (model.app.currentPage === "frontPage")
    {
        model.app.currentPage = "storePage";
        updateView();
    }
    else if (model.app.currentPage === "storePage")
    {
        model.app.currentPage = "writeReviewPage"
        updateView();
    }
    else if (model.app.currentPage === "loginPage")
    {
        model.app.currentPage = "registerUserPage";
        updateView();
    }
}
function goHome (){
        model.app.currentPage = "frontPage"
        updateView();
}
function changeStore(index) {
    model.viewState.storeFrontPage.selectedStore = index;
}
function changeCity(index) {
    model.viewState.storeFrontPage.selectedCity = index;
}


function updateUsername(userInput)
{
    switch(model.app.currentPage)
    {
        case "loginPage": model.viewState.loginPage.username = userInput; break;
        case "registerUserPage": model.viewState.registerUserPage.username = userInput; break;
        default: break;
    }
}

function updatePassword(userInput)
{
    switch(model.app.currentPage)
    {
        case "loginPage": model.viewState.loginPage.userPassword = userInput; break;
        case "registerUserPage": model.viewState.registerUserPage.userPassword = userInput; break;
        default: break;
    }
}

