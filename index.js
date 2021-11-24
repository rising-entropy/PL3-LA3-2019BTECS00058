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