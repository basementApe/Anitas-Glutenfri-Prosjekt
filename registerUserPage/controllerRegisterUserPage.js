

function confirmRegistrationButton()
{
  
    /*
        - loop igjennom brukerne (admin anita er alltid der)
        - sjekk om brukernavnet allerede eksisterer
        - Hvis ja, avbryt
        - Hvis nei, push det nye brukernavnet og passordet til databasen, altså model.data.credentials[index].blabla

        - Tilleggs-fanciness:
            Sjekk at passordet og bekreft passord-inputs stemmer med hverandre. Hvis de ikke matcher må vi også avbryte.
    */
    for (let i = 0; i < model.data.credentials.length; i++)
    {
        if (model.viewState.registerUserPage.userPassword !== model.viewState.registerUserPage.confirmPassword)
        {
            alert("Passordene matcher ikke.");
            return;
        }
        if (model.viewState.registerUserPage.username === model.data.credentials[i].name)
        {
            alert("Brukernavnet finnes allerede.");
            return;
        }
    }

    let tempObj = 
    {
        name: model.viewState.registerUserPage.username,
        password: model.viewState.registerUserPage.userPassword,
    }

    model.data.credentials.push(tempObj);
    model.viewState.loginPage.username = tempObj.name;
    model.viewState.loginPage.userPassword = tempObj.password;
    model.viewState.registerUserPage.username = null;
    model.viewState.registerUserPage.userPassword = null;
    goBack();
}
