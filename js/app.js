'use strict';


let hours=['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM',
'5PM','6PM','7PM','8PM'];


let div =document.getElementById('mydiv');
let tableEl=document.createElement('tableEl');
div.appendChild(tableEl);



  function tableHeader(){
      let headerEl= document.createElement('tr');
      tableEl.appendChild(headerEl);
      

      let td1=document.createElement('td');
      headerEl.appendChild(td1);
      td1.textContent="     ";

      for (let y=0 ; y<hours.length ; y++){
          let th1=document.createElement('th');
          headerEl.appendChild(th1);
          th1.textContent=hours[y];
      }
      let tdTotal=document.createElement('td');
      headerEl.appendChild(tdTotal);
      tdTotal.textContent='Daliy Location Total';
  }

tableHeader();



function tableFooter(){
    let footerEl= document.createElement('tr');
    tableEl.appendChild(footerEl);

    let footer1=document.createElement('th');
    footerEl.appendChild(footer1);
    footer1.textContent='Total';


     let th;
     let sum;
     let megaTotal=0;

    for (let f=0 ; f<hours.length ; f++){
        sum=0;
        for( let m=0; m<arrObjects.length ; m++ ){
        
            sum = sum +arrObjects[m].avgCookie[f];
    }

    megaTotal=megaTotal+sum;
    
   let  thFooter=document.createElement('th');

    footerEl.appendChild(thFooter);
    thFooter.textContent=sum;


}

    let finalTotal=document.createElement('th');
    footerEl.appendChild(finalTotal);
    finalTotal.textContent=megaTotal;
}





  

function resturent( location,minCust,maxCust,avgCookieSale){

    this.location=location;
    this.minCust=minCust;
    this.maxCust=maxCust;
    this.avgCookieSale=avgCookieSale;
    this.avgCookie=[];
    this.customer=[];
    this.total=0;
    this.globalArrTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
}
    resturent.prototype.randomValue=function(min, max) {

        for(let i=0 ; i<hours.length ;i++){
    
        this.customer.push(Math.floor((Math.floor(Math.random() * (max - min + 1) + min))))
                    
                
                    
    
         }
        }

    resturent.prototype.avarge=function(){

        for(let x=0 ; x<hours.length ; x++){


            this.avgCookie.push(Math.floor((this.customer[x])*this.avgCookieSale))
             
            this.total += this.avgCookie[x];
            this.globalArrTotals[x]=this.globalArrTotals[x] +this.avgCookie[x];

    }
}

    resturent.prototype.render=function(){



    
            
        let row= document.createElement('tr');
        tableEl.appendChild(row);
        
    
        let td2=document.createElement('td');
        row.appendChild(td2);
        td2.textContent=this.location;

        
        
          
            for(let j = 0 ; j <hours.length ; j++)
            {
                let tdEl = document.createElement('td');
                row.appendChild(tdEl);
                tdEl.textContent =this.avgCookie[j];
    
            }
            let pranchTotal=0;
            for( let s=0 ;s<this.avgCookie.length ;s++){

                pranchTotal=pranchTotal+this.avgCookie[s];

            }
        
        
            
           let totalTd =document.createElement('th');
           row.appendChild(totalTd);
           totalTd.textContent=pranchTotal;
            
        
    }

         


        let seatlle=new resturent('seatlle',23,65,3.6);
        seatlle.randomValue(23,65);
        seatlle.avarge();
        seatlle.render();

         let Tokyo=new resturent('Tokyo',3,65,1.2);
        Tokyo.randomValue(23,65);
        Tokyo.avarge();
        Tokyo.render();

         let Dubai=new resturent('Dubai',11,38,3.7);
        Dubai.randomValue(23,65);
        Dubai.avarge();
        Dubai.render();

        let Paris=new resturent('Paris',20,38,2.3);
        Paris.randomValue(23,65);
        Paris.avarge();
        Paris.render();

         let Lima=new resturent('Lima',2,16,2.6);
         Lima.randomValue(23,65);
         Lima.avarge();
         Lima.render();
         

         
        let arrObjects=[seatlle,Tokyo,Dubai,Paris,Lima];
        
        tableFooter();
         
         
        





         

         const form =document.getElementById('resturentForm');

         form.addEventListener('submit',resturentCreator);

         function resturentCreator (event){

              
            event.preventDefault();
            // console.log(event)
            let locationName=event.target.nameField.value;
            
            let minValue=event.target.boxMinimum.value;
               minValue = parseInt(minValue);

            let maxValue=event.target.boxMaximum.value;
               maxValue = parseInt(maxValue);

            let cookiesPerHoure=event.target.boxCookie.value;
               cookiesPerHoure = parseFloat(cookiesPerHoure);

            console.log(locationName, minValue, maxValue, cookiesPerHoure)
               
            

            let newResturen= new resturent(locationName,minValue,maxValue,cookiesPerHoure);
            tableEl.deletRow(tableEl.rows.length-1);
            newResturen.randomValue(minValue, maxValue);
            newResturen.avarge();
            newResturen.render();
            tableFooter();




         }
