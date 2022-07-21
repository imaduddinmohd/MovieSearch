function onSearch(){
let queryString=decodeURIComponent(window.location.search);
queryString=queryString.substring(1); 
let queries=queryString.split("&"); 
var res;
for(var i=0;i<queries.length;i++)
{
    console.log(queries[i]);
}  

let poster=document.getElementsByClassName('search_hero_poster')[0].setAttribute("src",queries[1]);
let title=document.getElementsByClassName('hero_title')[0].innerHTML=queries[0];
let mini_pic=document.getElementsByClassName('search_info_hero_image')[0].setAttribute("src",queries[2]);
    
let year=document.getElementById('year');
year.innerHTML='Year    '+`<strong style="color:#78a6b8;"> ${queries[3]}<strong>`
let cast=document.getElementById('cast');
cast.innerHTML='Cast '+`<strong style="color:#78a6b8;"> ${queries[4]}<strong>`
let type=document.getElementById('type');
type.innerHTML='Type '+`<strong style="color:#78a6b8;"> ${queries[5]}<strong>` 


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
		'X-RapidAPI-Key': '02047cd683msh74d165ce8501732p19eec6jsnc535d21d73c9'
	}
};

fetch('https://ott-details.p.rapidapi.com/search?title='+title+'&page=1&sort=latest', options)
	.then(response => response.json())
	.then(response => { 
        console.log(response);
        document.getElementsByClassName('synopsis')[0].innerHTML=response.results[0].synopsis;
    })
	.catch(err => console.error(err));

   



}
