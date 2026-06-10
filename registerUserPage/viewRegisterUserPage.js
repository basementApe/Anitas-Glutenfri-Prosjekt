
function confirmPassword(userInput)
{
    model.viewState.registerUserPage.confirmPassword = userInput;
}


function viewRegisterUserPage()
{
    app.innerHTML = /*html*/ `
        <div class="containerLogin" style="background-image: url('/Anitas%20Glutenfri%20Prosjekt/media/background/background.jpg');">

            <button type="button" class="loginBackButton" onclick="model.app.currentPage='frontPage'; updateView();">
                <img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/login/arrow_back_ios_new.svg" alt="" width="16" height="16" aria-hidden="true">
           </button>
        <div>

        <div>
            <br>
            <div style="color: #feffa6;">Velg ditt brukernavn:</div>
            <input type="text" class="inputLogin" oninput="updateUsername(this.value)" onkeydown="if(event.key==='Enter'){ confirmRegistrationButton(); }">
            <br>
            <div style="color: #feffa6;">Velg ditt passord:</div>
            <input type="password" placeholder="passord" class="inputLogin" type="password" oninput="updatePassword(this.value)" onkeydown="if(event.key==='Enter'){ confirmRegistrationButton(); }"> 
            <br>
            <div style="color: #feffa6;">Bekreft passord:</div>
            <input type="password" placeholder="passord" class="inputLogin" type="password" oninput="confirmPassword(this.value)" onkeydown="if(event.key==='Enter'){ confirmRegistrationButton(); }"> 
            <br>
            <button class="buttonLogin" onclick="confirmRegistrationButton()">Bekreft</button>
        </div>
   `;
}
