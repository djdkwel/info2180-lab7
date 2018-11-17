window.onload = function() {
    
    var url = "https://info2180-djdkwel97.c9users.io/world.php?q=";
    var lookup = document.getElementById("lookup");
    var result = document.getElementById("result");
    var httpRequest = new XMLHttpRequest(); 
    
    function doSomething() { 
        if(httpRequest.readyState === XMLHttpRequest.DONE) { 
        if(httpRequest.status === 200) { 
            var response = httpRequest.responseText; 
            result.innerHTML=response; } 
        else
    { 
     result.append('There was a problem with the request.'); 
    
   
}// end of else function
}// end of first if statement
   
}//end of doSomething function 
 lookup.onclick = function(){
        var country = document.getElementById("country").value; 
        console.log(country);
        url = url + country;
        httpRequest.onreadystatechange = doSomething; 
        httpRequest.open('GET', url); 
        httpRequest.send();
    }// end of lookup onclick function
}// end of window.onload function 