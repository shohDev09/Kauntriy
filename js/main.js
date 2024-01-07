class Contries {
    fOpen = async (url) => {
        let response = await fatch(url);

        if (response.ok) return response.json();
        else throw new Error(`Bu manzildagi malumotlarga ulanolmadik ${url}`)
    }
    getCountriyAll = () => this.fOpen(`https://restcountries.com/v3.1/all`)

}


const countriyData = new Contries();


function renderCountriy() {
    countriyData.getgetcountriyAll().then((data, i) => {
        console.log(data[1])
        const countriyCards = document.querySelector('.countriy-cards')
        data.forEach(item => {
            const countriyCard = document.createElement('a')
            countriyCard.classList.add('.countriy-card')
            countriyCard.setAttribute('href', 'countriy-inner.html')
            countriyCard.innerHTML = `
            <img src="${item.flags.png}" alt="Country germany" class="country-card__img">
            <div class="country-card__body">
              <h3 class="country-title">${item.name.common}</h3>
              <p class="country-text"><b> ${item.population}</p>
              <p class="country-text"><b>${item.region} </p>
              <p class="country-text"><b>${item.capital[0]}</p>
            </div>
            `

            countriyCards.append(countriyCard)
        });
    })
}
renderCountry()