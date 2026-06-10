
function viewLoggedInAdmin()
{
    return `
        <br><h2 class="loginPage_loggedIn">Logget inn som administrator</h2>
        <br>
        <button class="buttonLogin" onclick="buttonLogout()">Logg ut</button>
    `;
}


function viewLogInElements()
{
    return `
        <br>
        <div style="color: #feffa6;">Brukernavn:</div>
        <input class="inputLogin" oninput="updateUsername(this.value)" onkeydown="if(event.key==='Enter'){ buttonLogin(); }">

        <div style="color: #feffa6;">Passord:</div>
        <input class="inputLogin" type="password" oninput="updatePassword(this.value)" onkeydown="if(event.key==='Enter'){ buttonLogin(); }">

        <br>
        <button class="buttonLogin" onclick="buttonLogin()">Logg inn</button>

        <div class="inputLoginFail">
            ${model.viewState.loginPage.loginInvalid}
        </div>
    `;
}


function viewLoginPage() 
{
    app.innerHTML = `
        <div class="containerLogin" style="background-image: url('/Anitas%20Glutenfri%20Prosjekt/media/background/background.jpg');">

            <button type="button" class="loginBackButton" onclick="model.app.currentPage='frontPage'; updateView();">
                <img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/login/arrow_back_ios_new.svg" alt="" width="16" height="16" aria-hidden="true">
           </button>

            ${ model.app.adminLoggedIn ? viewLoggedInAdmin() : viewLogInElements() }

            ${ model.app.adminLoggedIn ? `` : `<br><button class="loginPage_register_btn" onclick="goForward()">Registrer ny bruker</button>` }
        </div>
    `;
}

