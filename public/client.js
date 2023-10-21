const socket = io()

let name;

let textarea = document.querySelector("#textarea");

let message = document.querySelector(".message__area")

do {
    name = prompt("Enter your name: ");
} while (!name);

textarea.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter'){
        sendMessage(e.target.value);
    }
})

function sendMessage(msg){
    let msg = {
        user: name,
        message: msg
    }

    //append

    appendMessage(msg, 'outgoing')
}

function appendMessage(msg, type) {
     let mainDiv = document.createElement('div');
     let className = type
     mainDiv.classList.add(className, 'message');

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    main 

}

