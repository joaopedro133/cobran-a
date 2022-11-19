const optionsDiv = document.querySelector(".options");
const infoDiv = document.querySelector(".info");
const dateDiv = document.querySelector(".date");
const typeDiv = document.querySelector(".type");
const receiptDiv = document.querySelector(".receipt");

const icons = [
    {
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-border-all" viewBox="0 0 16 16">
        <path d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z"/>
        </svg>
        `,
        name: "General"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
      </svg>`,
        name: "Password",
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
      </svg>`,
        name: "Invitations"
    },
    {
        selected: true,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-stack" viewBox="0 0 16 16">
        <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
        <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10ZM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Zm1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3Zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h12Z"/>
      </svg>`,
        name: "Billing",
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
      </svg>`,
        name: "Apps"
    }
];

const info = [
    {
        date: "Oct. 21, 2021",
        type: "Pro Annual",
        receipt: "Download",
    },
    {
        date: "Aug. 21, 2021",
        type: "Pro Portfolio",
        receipt: "Download",
    },
    {
        date: "July. 21, 2021",
        type: "Sponsored Post",
        receipt: "Download",
    },
    {
        date: "Jun. 21, 2021",
        type: "Sponsored Post",
        receipt: "Download",
    },
];

optionsDiv.innerHTML = icons.map((icon) => {
    return `<li>
        ${icon.selected ? `<div class="selected"></div>` : `<div></div>`
        }
        ${icon.icon}
        <p>${icon.name}</p>
    </li>
    `
}).join("");



info.map(info => {
    const date = document.createElement("p");
    const type = document.createElement("p");
    const receipt = document.createElement("button");

    date.textContent = info.date;
    type.textContent = info.type;
    receipt.textContent = info.receipt;

    dateDiv.appendChild(date);
    typeDiv.appendChild(type);
    receiptDiv.appendChild(receipt);
}).join("");



// =====================================================================
// infoDiv.innerHTML = info.map((info) => {
//     return `<li>
//         <p>${info.date}</p>
//         <p>${info.type}</p>
//         <button>${info.receipt}</button>
//     </li>
//     `
// }).join("");