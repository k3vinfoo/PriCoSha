function getId(element) {
    //alert(element.id);
    var form = document.getElementById('formCont');
    var hiddenContentIDInput = document.createElement("input");
    hiddenContentIDInput.type = "hidden";
    hiddenContentIDInput.name = 'idClicked';
    hiddenContentIDInput.value = element.id;
    form.appendChild(hiddenContentIDInput);
}

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

function newModal() {
    console.log('clicked');
    // window.location.reload();

    // var comment = document.getElementById('#parentCommentCont');
    // var tag = document.getElementById('#parentTagCont');
    // var btns = document.getElementById('#modalBtnCont');
    // if (comment.style.display == "block") {
    //     comment.style.display = "none";
    // }
    // if (tag.style.display == "block") {
    //     tag.style.display = "none";
    // }
    // if (btns.style.display == "none") {
    //     btns.style.display = "block";
    // }


}
$('input[name="pubPriv"]').change(function() {
    if ($(this).is(':checked') && $(this).val() == 'False') {
        $('#myModal').modal('show');
    }
});

$("#shareFriendGroupTable tr").click(function() {
    $(this).toggleClass('selected');
    var value = $(this).find('td:first').html();
    console.log(value);
});
$('#addTo').on('click', function(e) {
    var selected = [];
    $("#shareFriendGroupTable tr.selected").each(function() {
        selected.push($('td:first', this).html());
    });
    var form = document.getElementById('formContainer');
    var hiddenContentIDInput = document.createElement("input");
    hiddenContentIDInput.type = "hidden";
    hiddenContentIDInput.name = 'groupNames';
    hiddenContentIDInput.value = selected;
    form.appendChild(hiddenContentIDInput);
    console.log(selected);
});
$('#shareTo').on('click', function(e) {
    var selected = [];
    $("#shareFriendGroupTable tr.selected").each(function() {
        selected.push($('td:first', this).html());
    });
    var form = document.getElementById('postForm');
    var hiddenContentIDInput = document.createElement("input");
    hiddenContentIDInput.type = "hidden";
    hiddenContentIDInput.name = 'groupNames';
    hiddenContentIDInput.value = selected;
    form.appendChild(hiddenContentIDInput);
    console.log(selected);
});

$('#postBtn').on('click', function() {
    filepath = $('#filepath')
    line = ` <img class="viewImg" src="` + filepath + `">`
    console.log(line)
});

$('#tagBtn').click(function() {
    if ($('#modalBtnCont').css('display') == 'none')
        $('#modalBtnCont').css('display', 'block');

    $('#modalBtnCont').css('display', 'none');
    $('#parentTagCont').css('display', 'block');
});
$('#commentBtn').click(function() {
    if ($('#modalBtnCont').css('display') == 'none')
        $('#modalBtnCont').css('display', 'block');
    $('#modalBtnCont').css('display', 'none');
    $('#parentCommentCont').css('display', 'block');
});