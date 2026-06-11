// ISAK
            function storePage(){

                storeFront()
                showStoreReviews()
                showStoreSelections()
                selectCity()
                
            
            }
            
            
            function storeFront(){
                const storeId = model.data.cities[model.viewState.storeFrontPage.selectedCity].store[model.viewState.storeFrontPage.selectedStore];
                const app = document.getElementById("app");   

                app.innerHTML = 
                /*HTML*/`
                        <div class="container">
                        <div class="leftside">
                        <img class="backbutton" src="media/icons/corner/corner.svg">
                        <a onclick="goBack()">
                           <img class="backbuttonarrow" src="media/icons/corner/arrowback.svg" >
                           </a>
                                        <h1>${model.viewState.loginPage.username}</h1>

                            <div class="citySelectId">${model.data.cities[model.viewState.storeFrontPage.selectedCity].name}
                            <div class="dropdownCity" id="citySelectId"></div>
                            </div>
                            <img class="hometab" src="media/icons/hometab/hometabv2.svg">
                            <a onclick="goHome()">
                            <img class="hometabimg" src="media/icons/hometab/homeimg.svg">
                            </a>
                            <h1>${storeId.info.storeName}</h5>
                            <div ><img class="pictureInfo" src="${storeId.info.pictures}"></div>
                            <div class="star-rating" style="--size: 2rem; --val: ${storeId.info.averageScore};"></div> (${storeId.info.reviewAmount}) Anmeldelser
                                <p>
                                ${storeId.info.address}
                                <br>
                                telefon: ${storeId.info.phone}
                                <br>
                                ${storeId.info.link}
                                <br>
                                ${storeId.info.email}
                                <br>
                                </p>
                                ${writeReviewBtn()}
                                <div onclick="adminDeleteStore()" style="color: red; font-size: 2rem; font-weight: bold; position: absolute; bottom: 5rem; cursor: pointer; z-index: 9999;">
                                        ${model.viewState.storeFrontPage.adminStore}
                                        </div>
                                        <img class="wheatlogo">
                                        </div>
                                <div class="main" id="storeReviews">
                                <div class="mainreview" id="storeReviews">
                                </div>
                                </div>
                                
                                <div class="rightside" id="storeSelection">
                                </div>
                        </div>
                        
                        `;
                    }
                    
                    
                         function showStoreReviews() {
                            const storeReviews = model.data.cities[model.viewState.storeFrontPage.selectedCity].store[model.viewState.storeFrontPage.selectedStore].reviews;
                            const storeReviewsArr = [];
                        
                        for (let i = 0; i < storeReviews.length; i++) {
                            const r = storeReviews[i]
                            
                            storeReviewsArr.push(`
                                <div class="reviewBox" onclick="toggleCard(this)">
                                ${checkImage(r.pictures)}
                                <div>
                                <div class="review star-rating" style="--val: ${r.score}; --size: 2rem; "></div>
                                <h2>${r.name}</h2>
                                <h5>${r.date}</h5>
                                (${r.likes}) <button onclick="likeBtn(${r.likes})">Liker</button>
                                <div>${checkAllergy(r.allergyList)}</div>
                                </div>
                                <p class="text">${r.reviewText}</p>
                                </br>
                                <div 
                                style="color: red; font-size: 2rem; font-weight: bold; position: absolute; top: 1rem; right: 1rem; cursor: pointer;" z-index: 9999
                                onclick="adminDeleteReview(${i})">
                                ${model.viewState.storeFrontPage.adminReview}
                                </div>
                                <img class="wheatlogoreview">
                                </div>
                                
                                `);
                            }
                            document.getElementById("storeReviews").innerHTML = storeReviewsArr.join('')
                        }
                        
                        function showStoreSelections() {
                            
                            const globalCityStore = model.data.cities[model.viewState.storeFrontPage.selectedCity].store;
                            const cityStore = [...globalCityStore];
                            const storeSelectionArr = [];
                            
                            
                            cityStore.sort((a, b) => b.info.averageScore - a.info.averageScore)
                            
                            
                            
                            for (let index = 0; index < cityStore.length; index++) {
                                const s = cityStore[index];
                                const g = globalCityStore.indexOf(s);
                                storeSelectionArr.push(`
                                <div class="storeBox" onclick="changeStore(${g}); storePage();">
                                <div class="storeBoxName">
                                ${s.info.storeName} 
                                <br>
                                <div class="pictureSelect star-rating" style="--val: ${s.info.averageScore};"></div>
                                </div>
                                
                                <img class= "pictureSelect" src="${s.info.pictures}">
                                </div>
                                `);
                            };
                             document.getElementById("storeSelection").innerHTML = storeSelectionArr.join('')
                        }



                        function selectCity(){
                            const city = model.data.cities;
                            const cityArray = [];

                            for (let index = 0; index < city.length; index++) {
                                cityArray.push(`
                                    <div class="cityoption" value="${index}" ${index === model.viewState.storeFrontPage.selectedCity ? 'selected' : ''} onclick="changeCity(${index}); storePage();" >${city[index].name}</div>

                                    `)
                                
                            }
                            
                            document.getElementById("citySelectId").innerHTML = cityArray.join('');


                        }
                        function writeReviewBtn(){
                            if (model.app.currentPage === "storePage")
                            {return `
                            <div onclick="goForward()">
                            <button>Legg til Anmeldelser</button>
                            </div>
                            `}
                            return "";
                            
                        }


                        
