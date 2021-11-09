module.exports.profile = function(req, res){
    // return res.end("<h1>User Profile</h1>");
    return res.render('users',{
        title : "Users",
        user : "Surbhi"
    });
}

module.exports.userName = function(req, res){
    return res.send("<h1>Render User Name</h1>");
}

// render sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    });
}

// render sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    });
}

// get signup data
module.exports.create = function(req, res){
    // ToDo later
}

// sign in and create a session for user
module.exports.createSession = function(req, res){
    // TODO later
}