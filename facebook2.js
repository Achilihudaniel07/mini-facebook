    //LOOPING THROUGH THE FACEBOOK DATABASE 
    // To create the database
    var database =[
        {
        username: "Achilihu Christopher",
        password: "christopher11"
        },
    
        {
        username: "Achilihu Angela",
        password: "angela11"
        },
        
        {
        username: "Achilihu Beryl",
        password:"beryl11"    
        },
    
        {
        username: "Achilihu Victoria",
        password: "vicky11"
        },
    
        {
        username: "Achilihu Daniel",
        password:"danny11"    
        },
                
        {
        username: "Achilihu Anita",
        password: "anita11"
        }
    
        ]
    
        // To create the newsfeed
        var newsFeed=[         
        {
        username: "Achilihu Christopher",
        timeline:function(){
          location=("facebookHP.html")
        }
      },

        {
        username: "Achilihu Angela",
        timeline:function(){
          location=("facebookHP.html")
        }
      },

        {
        username: "Achilihu Beryl",
        timeline:function(){
          location=("facebookHP.html")
        }
      },

        {
        username: "Achilihu Victoria",
        timeline:function(){
          location=("facebookHP.html")
        }
      },

        {
        username: "Achilihu Daniel",
         timeline:function(){
          location=("facebookHP.html")
        }
      }, 

        {
        username: "Achilihu Anita",
        timeline:function(){
          location=("facebookHP.html")
        }
      },

        ];

    // THE MAIN DATABASE

    var usernam = document.getElementById("usern")
    usernam.addEventListener("keypress",function(event){
    if (event.key==="Enter"){  
    if(usernam.value !==""){
    }
    }
    });


    var passwod = document.getElementById("passw")
    passwod.addEventListener("keypress",function(event){
    
    if (event.key==="Enter"){
    if(passwod.value !==""){
    }
    }
    });


    var button = document.getElementById("login")
    button.addEventListener("click",signIn)
    
    function validUser(username,password){ 

    for (var i =0; i < database.length;  i++){
    if(usernam.value === database[i].username  &&
    passwod.value === database[i].password){
    return true;
    }
    }
    return false;
  }

    function signIn(username,password){
   if (validUser(username,password)=== true){
    for (var i =0; i <= newsFeed.length;  i++){
      if (usernam.value===newsFeed[i].username)
        {alert("Login Sucessful, You will be directed to your newsfeed soon")
      break;
    }
    }
    newsFeed[i].timeline()
  }
    else {alert("User not found")}
    }

    signIn(username,password)

    // To toggle show password
  function myFunction() {
  var x = document.getElementById("passw");
  if (x.type === "password") {
  x.type = "text";
  } else {
  x.type = "password";
  }
  }