
function frontPage()
{
    let cityList = addCityList();
    app.innerHTML = /*HTML*/`
        <div class="container">
            <h3 class="frontPage_logo">${frontPage_logo_text()}</h3>
            <div class="container_frontPage_header">
                ${viewLoginButton()}
            </div>
            <div>
                ${cityList}
            </div>
        </div>
    `;
}

function addCityList()
{
    let tempString = /*HTML*/ `
            <h2 class="frontPage_search_header">Velg by:</h2>
            <br>
            <div class="frontPage_search_elements">
                <div class="frontPage_cityList_dropdown">
                    <button class="frontPage_cityList_btn">${model.data.cities[model.viewState.storeFrontPage.selectedCity].name}</button>
                    <div class="frontPage_cityList_content">
        `;
    for (let c = 0; c < model.data.cities.length; c++)
    {
        tempString += `<a onclick="changeCity(${c}); updateView()">${model.data.cities[c].name}</a>`;
    }
    tempString += /*HTML*/ `
                    </div>
                </div>
                <button class="frontPage_buttonSearch" onclick="goForward()">Søk</button>
            </div>
            <br>
        `;
    return tempString;
}


function viewSignedInStatus()
{
    if (model.viewState.loginPage.username)
        return `<div class="frontPage_username">${model.viewState.loginPage.username}</div>`;
    else
        return `Not signed in`;
}


function viewLoginButton()
{
    let loggedIn = model.viewState.loginPage.username;

    return `
        <div class="frontPage_container_signin">
        <h3 class="frontPage_signInStatus">${viewSignedInStatus()}</h3>
        ${ loggedIn ? `
        <button class="frontPage_loginIcon" onclick="buttonLogout()">
            <img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/login/logout.svg">
        </button>`
        : `
        <button class="frontPage_loginIcon" onclick="goBack()">
            <img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/login/login.svg">
        </button>`}
        </div>
    `;
}


function frontPage_logo_text()
{
    return `Glutify`;
}
