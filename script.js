$(document).ready(function () {
        example =  $("#example").DataTable({

            "ajax":{
                "url":"https://my-json-server.typicode.com/ekinonal/proje/data",
                "dataType":"json",
                "type":"GET",
                "dataSrc": ""
               
            },
            "columns" : [
            {"data" : "id"},
            {"data" : "name"},
            {"data" : "username"},
            {"data" : "email"},
            {"data" : "address"}
]



          });
          $('#uyelik').submit(function(e){  
              
            
    e.preventDefault(); 

       name = $('#name').val(); 
    username = $('#username').val();  
    email = $('#email').val(); 
    address = $('#address').val();  
 
                         
        $.ajax({
          url: "https://my-json-server.typicode.com/ekinonal/proje/data",
          type: "POST",
          datatype:"json",
          data:JSON.stringify({name,username,email,address}),
          contentType: "application/json",
          dataType: 'json',
          
            
          success: function(data) {
              
            example.row.add({
                "id":"12",
            "name":name,
            "username":username,
            "email":email,
            "address":address

        }).draw();
           },
           error: function(){

            alert("hata");
           }
        });			        
   											     			
});


     

        });
  