document.addEventListener('DOMContentLoaded', () => {
    console.log("Script running!");
    const createAdButton = document.getElementById('createAdButton');

    createAdButton.addEventListener('click', function(event) {
        event.preventDefault();

        var adDescriptionInput = document.querySelector('.ad-description');
        var manufacturerSelect = document.getElementById('manufacturer');
        var modelSelect = document.getElementById('model');
        var yearSelect = document.getElementById('modelYear');
        var priceInput = document.querySelector('.ad-price');

            

        // console.log("Create Ad button works.");
        // console.log(adDescriptionInput.value);
        // console.log(manufacturerSelect.value);
        // console.log(modelSelect.value);
        // console.log(yearSelect.value);
        // console.log(priceInput.value);

        const adElement = document.createElement('div');
            adElement.className = 'generated-ad';
            adElement.classList.add('generated-ad-padded');
            adElement.style.paddingTop = '20px';
            adElement.style.paddingBottom = '20px';
            adElement.innerHTML = `
                <h3> ${manufacturerSelect.value} ${modelSelect.value} ${yearSelect.value}</h3>
                <p>Description: ${adDescriptionInput.value}</p>
                <p>Price: ${priceInput.value}</p>
            `;
        const classifiedsBanner = document.querySelector('.classifiedsbanner');

        classifiedsBanner.parentNode.insertBefore(adElement, classifiedsBanner);

        // Clear the form fields
        adDescriptionInput.value = "";
        manufacturerSelect.value = "";
        modelSelect.value = "";
        yearSelect.value = "";
        priceInput.value = "";
    });
});