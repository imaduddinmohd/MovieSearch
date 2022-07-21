var q;
function onSearch()
{
    const inputValue=document.getElementsByClassName('input')[0].value; 
    title=inputValue;
   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
            'X-RapidAPI-Key': '02047cd683msh74d165ce8501732p19eec6jsnc535d21d73c9'
        }
    };
    
    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q='+inputValue, options)
        .then(response => response.json())
        .then(response => 
            {
                const movie_title=response.d[0].l;
                const movie_poster=response.d[0].i.imageUrl; 
                const mini_pic=response.d[0].v[0].i.imageUrl 
                const year=response.d[0].y;
                const type=response.d[0].q;
                const cast=response.d[0].s;
               
                console.log(response);
               
                
                queryString="?"+movie_title+"&"+movie_poster+"&"+mini_pic+"&"+year+"&"+cast+"&"+type;  
                q=queryString; 
             
               window.location.href="search.html"+queryString; 
           
            })
        .catch(err => console.error(err)); 
  
      
       

}



