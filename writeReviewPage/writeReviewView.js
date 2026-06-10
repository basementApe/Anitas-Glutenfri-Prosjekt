// ISAK
            function writeReviewPage(){
                        storeFront()
                        showWriteReview()
                        selectCity()
                    }
                    
                    
                         function showWriteReview() {
                           const storeId = model.data.cities[model.viewState.storeFrontPage.selectedCity].store[model.viewState.storeFrontPage.selectedStore];
                           const writeReview = document.getElementById("storeReviews");
                           writeReview.innerHTML= 
                            /*HTML*/`
                           <div class="main review">
                           <div style="color:red; font-size: 40px" id="wrongInput"></div>
                           <h1>${storeId.info.storeName}</h1>
                           <div class="darkborder">
                           <div onclick="toggleAllergy(this, 'vegan')"><img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/allergy/vegan.svg"></div>
                           <div onclick="toggleAllergy(this, 'milk')"><img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/allergy/milk.svg"></div>
                           <div onclick="toggleAllergy(this, 'nuts')"><img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/allergy/nuts1.svg"></div>
                           <div onclick="toggleAllergy(this, 'wheat')"><img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/allergy/wheat.svg"></div>
                           </div>
                           <input type="text" placeholder="Navn" class="nameInput" onchange="userReviewName(this.value)">
                           <div> <textarea placeholder="Skriv her"class="userReviewBox" onchange="userText(this.value)"></textarea> </div>
                           <br>
                           <label class="ratingLabel">Din vurdering:</label>
                            <div class="starcontainer">
                           <input 
                            type="range"
                            min="0.5"
                            max="5"
                            step="0.5"
                            value="2.5"
                            class="user-rating"
                            style="--val: 2.5"
                            oninput="this.style.setProperty('--val', this.value)"
                            onclick="userScore(this.value)"
                            >
                           </div>
                           <br>
                           <div class="reviewbtn" onclick="validateReview()">Legg til Anmeldelser</div>
                           <br>
                           </div>
                           `;       
                           showImageUploadSection();
                        }
                        
                        function showImageUploadSection() {
                            const storeSelection = document.getElementById("storeSelection");
                            storeSelection.innerHTML = `
                                <div class="imageUploadSection">
                                    <h3>Legg til bilder</h3>
                                    <input type="file" accept="image/*" multiple class="imageFileInput" onchange="handleImageUpload(this.files)">
                                    <div class="imagePreviewGrid" id="imagePreviewGrid">
                                    </div>
                                </div>
                            `;
                        }