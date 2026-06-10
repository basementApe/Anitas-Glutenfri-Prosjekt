
function buttonLogin()
{
    let validUsername = false;
    let validPassword = false;
    for (let i = 0; i < model.data.credentials.length; i++)
    {
        if (model.viewState.loginPage.username === model.data.credentials[i].name)
        {
            validUsername = true;
        }
    }
    if (!validUsername)
    {
        model.viewState.loginPage.loginInvalid = "Feil brukernavn!";
        // document.getElementById("app").innerHTML += `<div class="inputLoginFail">Feil brukernavn!</div>`;
        updateView();
        return;
    }

    for (let i = 0; i < model.data.credentials.length; i++)
    {
        if (model.viewState.loginPage.userPassword === model.data.credentials[i].password)
        {
            validPassword = true;
        }
    }
    if (!validPassword)
    {
        model.viewState.loginPage.loginInvalid = "Feil passord!";
        updateView();
        return;
    }

    model.viewState.loginPage.loginInvalid = "";
    // forutsetter at index 0 er reservert for admin
    if (model.viewState.loginPage.username === model.data.credentials[0].name && model.viewState.loginPage.userPassword === model.data.credentials[0].password)
        model.app.adminLoggedIn = true;
    model.app.currentPage = "frontPage";
    updateView();
}


function buttonLogout()
{
    model.viewState.loginPage.loginInvalid = "";
    model.app.adminLoggedIn = false;
    model.viewState.loginPage.username = null;
    model.viewState.loginPage.userPassword = null;
    model.app.currentPage = "frontPage";
    updateView();
}