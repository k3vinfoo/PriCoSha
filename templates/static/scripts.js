// dont need this yet... for later
function deleteLastForm() {
    console.log('deleting form');
    var tagUsersForm = document.getElementById('tagUsersForm');
    tagUsersForm.removeChild(tagUsersForm.lastChild);

    var deleteButton = document.createElement("button")
    deleteButton.value = "Remove Last Tag"
    deleteButton.type = "button";
    deleteButton.type = "btn btn-danger";
    deleteButton.onclick = deleteLastForm();
    document.getElementById('formCont').appendChild(deleteButton);

};

function addForms() {
    var userForm = document.getElementById('tagUsersForm');
    var form_input = document.createElement("input");
    form_input.className = "form-control";
    form_input.type = "text";
    form_input.name = "tags";
    form_input.style.marginBottom = "5px";
    form_input.placeholder = "Tag a user";
    userForm.appendChild(form_input);
};
//REDEFINE DOCUMENT AS LOCAL DOC
var doc = document;

function addFields() {
    var number = doc.getElementById("members").value;
    var container = doc.getElementById("addMembersContainer");
    var mainContainer = doc.getElementById("formContainer");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i = 0; i < number; i++) {
        container.appendChild(document.createTextNode("Member " + (i + 1)));
        var input = doc.createElement("input");
        input.className = "form-control";
        input.name = "Member " + i;
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