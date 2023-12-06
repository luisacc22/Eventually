
  document.addEventListener('DOMContentLoaded', function () {

    const urlParams = new URLSearchParams(window.location.search);
    const eventName = urlParams.get('event');
    const h2 = document.getElementsByTagName("h2")[0];
    const date = document.getElementById('date-holder');
    const venue = document.getElementById('venue-holder');
    const imgCard = document.getElementById('img-card');
    if (eventName === 'disney') {
        imgCard.src = 'poster/disney.jpg';
        h2.textContent = "2023 DISNEY ON ICE 100 YEARS OF WONDER"; 
        date.innerHTML = 'Dec 22, 2023 - Jan 07, 2024';
        venue.innerHTML = 'SM Mall Of Asia Arena';
    } else if (eventName === 'daryl') {
        imgCard.src = 'poster/daryl.jpg';
    } else if (eventName === 'rod') {
        imgCard.src = 'poster/rod.jpg';
        h2.textContent = "ROD STEWART LIVE ON CONCERT"; 
        date.innerHTML = 'Mar 12, 2024';
        venue.innerHTML = 'SM Mall Of Asia Arena';
    } else if (eventName === 'seventeen') {
        imgCard.src = 'poster/seventeen.jpg';
        h2.textContent = "SEVENTEEN JAN 13 - SHUTTLE BUS"; 
        date.innerHTML = 'Jan 13, 2024';
        venue.innerHTML = 'Philippine Arena';
    } else if (eventName === 'bts') {
        imgCard.src = 'poster/bts.jpg';
    } else if (eventName === 'coldplay') {
        imgCard.src = 'poster/coldplay.jpg';
        h2.textContent = "COLDPLAY JAN 19 - SHUTTLE BUS"; 
        date.innerHTML = 'Jan 19, 2024';
        venue.innerHTML = 'Philippine Arena';
    } else if (eventName === 'edsheeran') {
        imgCard.src = 'poster/edsheeran.jpg';
        h2.textContent = "ED SHEERAN"; 
        date.innerHTML = 'March 09, 2024';
        venue.innerHTML = 'SMDC Festival Grounds';
    } else if (eventName === 'rivermaya') {
        imgCard.src = 'poster/rivermaya.jpg';
        h2.textContent = "RIVERMAYA THE REUNION"; 
        date.innerHTML = 'Feb 17, 2024';
        venue.innerHTML = 'SMDC Festival Grounds';
    }
});

function initiatePayment() {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Basic c2tfdGVzdF95VUxCcGYxelVHRnpBaWZDTVRaWFZ3M1k6THVpc0FkaW5nXzIwMDUh'
        },
        body: JSON.stringify({data: {attributes: {amount: 2000}}})
      };
      fetch('https://api.paymongo.com/v1/payments', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buyButton").addEventListener("click", function() {
        initiatePayment();
    });
});

function home(){
    window.history.back();
}

