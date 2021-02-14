'use strict';

 
let hours=['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:','8PM:','Total:'];

 function randomValue(min, max) {

    return Math.floor(((Math.random() * (max - min)) + min));

     }
  




let seatlle = {

    location:'seattle',
    
    minCust:23,
    maxCust:65,
    avgCookieSale:6.3,

    customer:[],
    avgCookie:[],
    total:0,
     
        avarge: function(){

        for(let x=0 ; x<hours.length ; x++){


        this.avgCookie.push(Math.floor((this.customer[x])*this.avgCookie))
     
        this.total+=Math.floor((this.customer[x])*this.avgCookie)
        


        }

        return this; 



    },

    

 render: function(){
    
    let body=document.getElementById('myBody');

    let header1 = document.createElement('h2');

    

        body.appendChild(header1);

        header1.textContent = this.Location;
    

    let ulEl = document.createElement('ul');
        body.appendChild(ulEl);


       
        for(let j = 0 ; j <hours.length ; j++)
        {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[j]+" : " +this.avgCookie[j];

        }

}
}



function randomValue(min, max) {

    for(let i=0 ; i<hours.length ;i++){

        this.customer.push(Math.floor((randomValue(min,max))))

        

    }

    
    return this;

     }
     
  
seatlle.render();
seatlle.avarge();






  




let TOkyo = {

    location:'Tokyo',
    
    minCust:3,
    maxCust:24,
    avgCookieSale:1.2,

    customer:[],
    avgCookie:[],
    total:0,
     
        avarge: function(){

        for(let x=0 ; x<hours.length ; x++){


        this.avgCookie.push(Math.floor((this.customer[x])*this.avgCookie))
     
        this.total+=Math.floor((this.customer[x])*this.avgCookie)
        


        }

        return this; 



    },

    

 render: function(){
    
    let body=document.getElementById('myBody');

    let header1 = document.createElement('h2');

    

        body.appendChild(header1);

        header1.textContent = this.Location;
    

    let ulEl = document.createElement('ul');
        body.appendChild(ulEl);


       
        for(let j = 0 ; j <hours.length ; j++)
        {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[j]+" : " +this.avgCookie[j];

        }

}
}



function randomValue(min, max) {

    for(let i=0 ; i<hours.length ;i++){

        this.customer.push(Math.floor((randomValue(min,max))))

        

    }

    
    return this;

     }
     
  
Tokyo.render();
Tokyo.avarge();


  




let Dubai = {

    location:'Dubai',
    
    minCust:11,
    maxCust:38,
    avgCookieSale:3.7,

    customer:[],
    avgCookie:[],
    total:0,
     
        avarge: function(){

        for(let x=0 ; x<hours.length ; x++){


        this.avgCookie.push(Math.floor((this.customer[x])*this.avgCookie))
     
        this.total+=Math.floor((this.customer[x])*this.avgCookie)
        


        }

        return this; 



    },

    

 render: function(){
    
    let body=document.getElementById('myBody');

    let header1 = document.createElement('h2');

    

        body.appendChild(header1);

        header1.textContent = this.Location;
    

    let ulEl = document.createElement('ul');
        body.appendChild(ulEl);


       
        for(let j = 0 ; j <hours.length ; j++)
        {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[j]+" : " +this.avgCookie[j];

        }

}
}



function randomValue(min, max) {

    for(let i=0 ; i<hours.length ;i++){

        this.customer.push(Math.floor((randomValue(min,max))))

        

    }

    
    return this;

     }
     
  
Dubai.render();
Dubai.avarge();


  




let Paris = {

    location:'Paris',
    
    minCust:20,
    maxCust:38,
    avgCookieSale:2.3,

    customer:[],
    avgCookie:[],
    total:0,
     
        avarge: function(){

        for(let x=0 ; x<hours.length ; x++){


        this.avgCookie.push(Math.floor((this.customer[x])*this.avgCookie))
     
        this.total+=Math.floor((this.customer[x])*this.avgCookie)
        


        }

        return this; 



    },

    

 render: function(){
    
    let body=document.getElementById('myBody');

    let header1 = document.createElement('h2');

    

        body.appendChild(header1);

        header1.textContent = this.Location;
    

    let ulEl = document.createElement('ul');
        body.appendChild(ulEl);


       
        for(let j = 0 ; j <hours.length ; j++)
        {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[j]+" : " +this.avgCookie[j];

        }

}
}



function randomValue(min, max) {

    for(let i=0 ; i<hours.length ;i++){

        this.customer.push(Math.floor((randomValue(min,max))))

        

    }

    
    return this;

     }
     
  
Paris.render();
Paris.avarge();




  




let Lima = {

    location:'Lima',
    
    minCust:2,
    maxCust:16,
    avgCookieSale:4.6,

    customer:[],
    avgCookie:[],
    total:0,
     
        avarge: function(){

        for(let x=0 ; x<hours.length ; x++){


        this.avgCookie.push(Math.floor((this.customer[x])*this.avgCookie))
     
        this.total+=Math.floor((this.customer[x])*this.avgCookie)
        


        }

        return this; 



    },

    

 render: function(){
    
    let body=document.getElementById('myBody');

    let header1 = document.createElement('h2');

    

        body.appendChild(header1);

        header1.textContent = this.Location;
    

    let ulEl = document.createElement('ul');
        body.appendChild(ulEl);


       
        for(let j = 0 ; j <hours.length ; j++)
        {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[j]+" : " +this.avgCookie[j];

        }

}
}



function randomValue(min, max) {

    for(let i=0 ; i<hours.length ;i++){

        this.customer.push(Math.floor((randomValue(min,max))))

        

    }

    
    return this;

     }
     
  
Lima.render();
Lima.avarge();

