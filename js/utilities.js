const playerArray = [];

function display(player) {
    const listBody = document.getElementById('player-list');
    listBody.innerHTML = '';
    for (let i = 0; i < player.length; i++) {
        if (i < 5) {
            const name = playerArray[i].playerName;
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th class="text-xl">${i + 1}</th> 
             <td class="pl-5 text-xl">${name}</td>
             `;
            listBody.appendChild(tr);


        }
        else {
            alert('number of selected players cannot be more than five');
        }

    }

}

function select(element) {

    const playerName = element.parentNode.children[1].innerText;

    const playerObj = {
        playerName: playerName
    }

    playerArray.push(playerObj);

    document.getElementById("select-list").innerText = playerArray.length;

    display(playerArray);

}


function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    //inputField.value = '';
    return inputFieldValue;
}
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    //textElement.innerText = '';
    return textElementValue;
}
function setTextElementvalueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}