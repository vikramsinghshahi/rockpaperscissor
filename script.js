 
let userRoot = document.querySelector(".user");



let computerRoot = document.querySelector(".computer");


 let result = document.querySelector(".result");


 let refresh = document.querySelector(".refresh");

 console.log(refresh);


let dataSet = [
    {
        name:"rock",
        beats:"scissors",
    },
    {
        name:"paper",
        beats:"rock",
    },

    {
        name:"scissors",
        beats:"paper",
    },
   
];

let userSelected= {} , computerSelected = {};

function getWinner(user ,computer){
//tie
     if( user.name === computer.name){
         result.innerText = "It' s a tie";
     } else if(user.beats ===computer.name){
         result.innerText = "You won" 

     } else{
         result.innerText = "You lost"
     }

}

function getRandomNumber(max = 3){
    return Math.floor(Math.random() * max);
}


function createUserLayout(){
    userRoot.innerHTML = ""

    dataSet.forEach((icon) =>{
        let li = document.createElement("li");

        let i = document.createElement("i");
        i.className = `far fa-hand-${icon.name}`;

        if(userSelected.name === icon.name){
         li.classList.add("selected")
        }

        li.addEventListener("click" , () =>{
            userSelected = icon;

            computerSelected = dataSet[getRandomNumber()];

            getWinner(userSelected , computerSelected);

            rerender();
            

            console.log(userSelected , computerSelected);
        })

        li.append(i);
     

        userRoot.append(li);

        

    })
   
}

createUserLayout();


function createComputerLayout(){
    computerRoot.innerHTML ="";

    dataSet.forEach((icon) =>{
        let li = document.createElement("li");

        let i = document.createElement("i");
        i.className = `far fa-hand-${icon.name}`;

        if(computerSelected.name === icon.name){
            li.classList.add("selected")
           }

        li.append(i);
     

        computerRoot.append(li);
    })
  
}

createComputerLayout();


refresh.addEventListener("click" , ()=>{
    userSelected = {};
    computerSelected = {};
    rerender();
})


function rerender(){
    createUserLayout();
    createComputerLayout();
}