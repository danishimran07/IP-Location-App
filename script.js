const input = document.getElementById('hello');
const button = document.getElementsByTagName('button');

const update = document.getElementsByClassName('update');

function myScript(){
     
    const IP = input.value;
   fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_92TwOIEOd7A5xMpqRBHJ7mBl2DSAG&ipAddress=${IP}`)
    .then((res)=>res.json())
    .then((data)=>setData(data)
    );
         
    function setData(data){
        

        let  data1 = [data.location.lat, data.location.lng];
        update[0].innerHTML =data.ip;
        update[1].innerHTML =data.location.region +', '+ data.location.country;
        update[2].innerHTML =data.location.timezone;
        update[3].innerHTML =data.isp;
        if(map === undefined){

            var map = L.map('map').setView(data1, 13);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
    var marker = L.marker(data1).addTo(map);


        }

        

        

        
        

 


        




    }
    

    


     }

   

//window.addEventListener('load', myScript);
button[0].addEventListener('click', myScript);

