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
