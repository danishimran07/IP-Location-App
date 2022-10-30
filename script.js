const body = document.getElementsByTagName('body');
const button = document.getElementsByTagName('button');

function myScript(){
   fetch('https://geo.ipify.org/api/v2/country?apiKey=at_92TwOIEOd7A5xMpqRBHJ7mBl2DSAG&ipAddress=8.8.8.8')
    .then((res)=>res.json())
    .then((data)=> {
        console.log(data);
        const location = data.location;
        const ISP = data.isp;
        console.log(location.country + ISP);

        
    }
    );

    
    

    var map = L.map('map').setView([28.48, 77.01], 13);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
    var marker = L.marker([28.48, 77.01]).addTo(map);


     }

function hello(){
    console.log('body');

}


window.addEventListener('load', myScript);
