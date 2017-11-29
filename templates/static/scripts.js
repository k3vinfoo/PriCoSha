//REDEFINE DOCUMENT AS LOCAL DOC
var doc = document;
function addFields(){
    var number = doc.getElementById("member").value;
    var container = doc.getElementById("addMembersContainer");
    var mainContainer = doc.getElementById("mainContainer");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Member " + (i+1)));
        var input = doc.createElement("input");
        input.className = "form-control";
        input.name = "member" + i;
        input.type = "text";
        container.appendChild(input);
        container.appendChild(doc.createElement("br"));
    }
    var submitButton = doc.createElement("input");
    submitButton.type = "submit";
    submitButton.className = "btn btn-primary btn-block";
    submitButton.value = "Create";
    mainContainer.append(submitButton);
}
