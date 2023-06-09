const signinButton = document.getElementById("signin-button");
const signupButton = document.getElementById("signup-button");

signinButton.addEventListener("click", function (event) {
  const username = document.querySelector("#popup1 input[name='uname']").value;
  const password = document.querySelector("#popup1 input[name='psw']").value;

  if (!username || !password) {
    event.preventDefault();
    alert("Please enter both username and password");
  } else {
    alert("Welcome " + username + "!");
    document.querySelector("#popup1 .close").click(); // close the modal
  }
});

signupButton.addEventListener("click", function (event) {
  const username = document.querySelector("#popup2 input[name='uname']").value;
  const email = document.querySelector("#popup2 input[name='email']").value;
  const password = document.querySelector("#popup2 input[name='psw']").value;

  if (!username || !email || !password) {
    event.preventDefault();
    alert("Please enter all required fields");
  } else {
    alert("Welcome " + username + "!");
    document.querySelector("#popup2 .close").click(); // close the modal
  }
});




// annoying stuff

// dragElement(document.getElementById("mydiv"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

// end of annoying stuff


// CHAT

const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "Thank you for reaching out. I apologize for any inconvenience, but our chatbot assist feature is currently unavailable."
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://media.discordapp.net/attachments/1098128333960642711/1098128418622689332/abstract-creative-circles-lines-geometric-art-background-day-night-concept-can-be-used-as-icon-logo-tattoo-272073384.png?width=595&height=595";
const PERSON_IMG = "https://freesvg.org/img/abstract-user-flat-1.png";
const BOT_NAME = "CurioVibe";
const PERSON_NAME = "You";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



// popup ng chat

document.querySelector('.chathead').addEventListener('click', () => {
  document.querySelector('.msger').classList.toggle("active")
})