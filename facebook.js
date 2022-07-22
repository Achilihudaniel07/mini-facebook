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
        timeline:"HELLO CHRISTOPHER, your will be directed to your timeline shortly"
        },
        
        {
        username: "Achilihu Angela",
        timeline:"HELLO ANGELA, your will be directed to your timeline shortly"
        },
    
        {
        username: "Achilihu Beryl",
        timeline:"HELLO BERYL, your will be directed to your timeline shortly"
        },
    
        {
        username: "Achilihu Victoria",
        timeline: "HELLO VICTORIA, your will be directed to your timeline shortly"
        },             
    
        {
        username: "Achilihu Daniel",
        timeline: "HELLO DANIEL, your will be directed to your timeline shortly"
        },
                
        {
        username: "Achilihu Anita",
        timeline:"HELLO ANITA, your will be directed to your timeline shortly"
        }
    
        ];


        
    // THE MAIN DATABASE

    // To get the input 

    let username = document.getElementById('usern')
    let password = document.getElementById('passw')
    let btn = document.getElementById('login')

    // To target the button
    btn.addEventListener('click',handleSubmit)
    function handleSubmit(event){

    let person = {
        found: false,
        username :'',
        timeline: ''
    }
    
    // To loop through the database and find if the user input and password user is thesame in the database
    for(let i = 0; i < database.length; i++){
        if(username.value === database[i].username && password.value === database[i].password){
            person.found = true
            person.username = username.value
            break
        }else{
            person.found = false
        }
    }

     // To loop through the newsfeed and find if the user input is thesame in the newsfeed
    if(person.found === true){
        for(let i = 0; i < newsFeed.length; i++){
            if(person.username === newsFeed[i].username){
                person.timeline = newsFeed[i].timeline
                break
            }
        }
        confirm("Login Successful, Click OK to proceed")
        alert(person.timeline)
        location=("facebookHP.html")

    }
    else{
        notfound()
    }
    
    // To display the error message if the userinput and password is not found in the database
    function notfound(){
        let parent = document.getElementById('form')
        let before = document.getElementById('signIn')
        let para = document.createElement('p')
        para.textContent = "Username or password not found" 
        para.style.color = 'red'
        para.style.fontSize = '1.4rem'
        para.style.fontWeight="bold"
        para.style.textAlign = 'center'
        parent.insertBefore(para,before)
       
    // To set time duration for the error message
        setTimeout(()=>{
            para.remove()
        },5000)
    
    }

    event.preventDefault()
}


    // To toggle show password
    function myFunction() {
        var x = document.getElementById("passw");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
