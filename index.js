const loginSubmit = (e) =>{
    e.preventDefault();
    let userID = $(".loginUserID").val();
    let password = $(".loginPassword").val();

    if(userID.length < 7)
    {
        $(".loginUserID").addClass("is-invalid");
        return;
    }
    else
    {
        $(".loginUserID").removeClass("is-invalid");
    }
    if(password.length < 7)
    {
        $(".loginPassword").addClass("is-invalid");
        return;
    }
    else
    {
        $(".loginPassword").removeClass("is-invalid");
    }
    alert("Logged In Successfully!");
    window.location = "/login.html";

};

const registerSubmit = e =>{
    e.preventDefault();
    let name = $(".regName").val();
    let userID = $(".regUserID").val();
    let contact = $(".regContact").val();
    let address = $(".regAddress").val();
    let password = $(".regPassword").val();
    let confPassword = $(".regConfPassword").val();


    if(name.length < 1)
    {
        $(".regName").addClass("is-invalid");
        return;
    }
    else
    {
        $(".regName").removeClass("is-invalid");
    }

    if(userID.length < 7)
    {
        $(".regUserID").addClass("is-invalid");
        return;
    }
    else
    {
        $(".regUserID").removeClass("is-invalid");
    }

    let isnum = /^\d+$/.test(contact);

    if( !isnum || contact.length != 10)
    {
        $(".regContact").addClass("is-invalid");
        return;
    }
    else
    {
        $(".regContact").removeClass("is-invalid");
    }

    if(address.length < 1)
    {
        $(".regAddress").addClass("is-invalid");
        return;
    }
    else
    {
        $(".regAddress").removeClass("is-invalid");
    }

    if(password.length < 7)
    {
        $(".regPassword").addClass("is-invalid");
        return;
    }
    else
    {
        $(".regPassword").removeClass("is-invalid");
    }

    if(confPassword !== password)
    {
        $(".regConfPassword").addClass("is-invalid");
        return;
    }
    else
    {
        $(".regConfPassword").removeClass("is-invalid");
    }

    alert("Registered Successfully!");
    window.location = "/registration.html";

    
};

const leaveSubmit = (e) => {
    e.preventDefault();

    let date = $(".repDate").val();
    let reason = $(".repReason").val();
    let replacement = $(".repFac").val();

    if(date.length < 1)
    {
        $(".repDate").addClass("is-invalid");
        return;
    }
    else
    {
        $(".repDate").removeClass("is-invalid");
    }

    if(reason.length < 1)
    {
        $(".repReason").addClass("is-invalid");
        return;
    }
    else
    {
        $(".repReason").removeClass("is-invalid");
    }

    if(replacement.length < 1)
    {
        $(".repFac").addClass("is-invalid");
        return;
    }
    else
    {
        $(".repFac").removeClass("is-invalid");
    }

    alert("Applied Successfully!");
    window.location = "/leaveForm.html";

}