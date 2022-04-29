members = ['Simon','Samko']

NumberOfTeams = 0
let teamNumber


rrArray =[]


members.forEach(element => {
    let nameNode = document.createElement('li');
    nameNode.innerText = element ;
    let membersList = document.getElementById('members-list');
    membersList.appendChild(nameNode)
    
});
let addMember = function() {

    let nameNode = document.createElement('li');
    nameNode.innerText = document.querySelector('input').value ;
    let membersList = document.getElementById('members-list');
    membersList.appendChild(nameNode)
    members.push(nameNode.innerText)

}

let buttonToAddMember = document.querySelector('#add-button')
buttonToAddMember.addEventListener('click', function(){
   addMember()
   let inputNode =document.querySelector('input');
   inputNode.value =''

});

let increaseNumberOfTeams = function (){
    NumberOfTeams += 1;
    let NumberOfTeamsParagraph =document.getElementById('number-of-teams-p')
    NumberOfTeamsParagraph.innerText = NumberOfTeams
    
}

let decreaseNumberOfTeams = function() {
    if(NumberOfTeams > 0){
        NumberOfTeams -= 1;
    document.getElementById('number-of-teams-p').innerText = NumberOfTeams
    let teamDivsNode =document.querySelectorAll('.teams-section div')
    let teamDivsNodeLength = teamDivsNode.length
    document.querySelectorAll('.teams-section div')[teamDivsNodeLength-1].remove()
    }
    else {
        alert('You can not have negative number of teams')
    }
    
}



let plusBtnNode = document.getElementById('plus-btn')
let teamsSectionNode = document.querySelector('.teams-section')
    plusBtnNode.addEventListener('click',function(){
    increaseNumberOfTeams()
    let NumberOfTeamsParagraph = document.getElementById('number-of-teams-p');
    NumberOfTeamsParagraph.innerText = NumberOfTeams
    let team = document.createElement('div')
    team.style.width= '100px';
    team.style.height= '100px';
    team.style.backgroundColor='#a8e0e0';
    teamsSectionNode.appendChild(team)

});

let minusBtnNode = document.getElementById('minus-btn')
minusBtnNode.addEventListener('click',function(){
    decreaseNumberOfTeams()
    let NumberOfTeamsParagraph = document.getElementById('number-of-teams-p');
    NumberOfTeamsParagraph.innerText = NumberOfTeams
   



});
let generateRandomNumber = function() {
    let a = Math.floor(Math.random() * (members.length)) ;
    return a
    

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
let count = 1

 let assignBtn = document.querySelector('.btns-bottom > button')
 assignBtn.addEventListener('click', function() {
    teamNumber = document.querySelectorAll('.teams-section div').length
     if(count < 2){
        rrArray = members
        shuffleArray(rrArray)
     }
     if(count%teamNumber=== 0){
        currentArray = document.querySelector(`.teams-section div:nth-child(${(count)})`)
        let newParagraph = document.createElement('p')
        newParagraph.innerText = rrArray[count-1]
        currentArray.appendChild(newParagraph)
        count += 1
        return
    }
    if(count > members.length)
    { alert('You have assigned all the members')
       return}

   
     

    currentArray = document.querySelector(`.teams-section div:nth-child(${(count)%(teamNumber)})`)
    let newParagraph = document.createElement('p')
    newParagraph.innerText = rrArray[count-1]
    currentArray.appendChild(newParagraph)
    count += 1

 });

 let ResetButton = document.querySelector('.btns-bottom >button ~button')
 ResetButton.addEventListener('click',function(){
     let allNames = document.querySelectorAll('ol li')
     allNames.remove()
 })




 
 




