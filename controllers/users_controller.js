const User = require('../models/user');

module.exports.profile = function(req, res){
    // check if there is a session formed for request
    console.log(req.cookies);
    if(req.cookies.user_id){
        // if id present
        User.findById(req.cookies.user_id, function(err, user){
            if(user){
                return res.render('user_profile',{
                    title: "User Profile",
                    user: user
                });
            }else{
                // if user not found
                return res.redirect('/users/sign-in');
            }
            
        });
    }else{
        return res.redirect('/users/sign-in');
    }
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
    // check if password and confirmpassword match
    if(req.body.password != req.body.confirm_password){
        // if doesn't match redirect back 
        return res.redirect('back');
    }else{
        // check if user with same email address exists
        User.findOne({email: req.body.email}, function(err, user){
            if(err){
                console.log("Error in finding User in signing up");
                return;
            }
            // check if user doesn't exist
            if(!user){
                // create user in DB if user doesn't exists
                User.create(req.body, function(err, user){
                    if(err){
                        console.log('Error in creating user while siging up');
                        return;
                    }
                    
                    return res.redirect('/users/sign-in');
                });
            }else{
                return res.redirect('back');
            }
        })
    }
}

// sign in and create a session for user
module.exports.createSession = function(req, res){
    console.log("Sign In Page")
    // steps for manual authentication
    // find the user
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log("Error in finding user while signing in");
            return;
        }
        // handle user found
        if(user){
            // handle password doesn't match
            if(req.body.password != user.password){
                return res.redirect('back');
            }
            // handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');
        }else{
            // handle  user not found
            return res.redirect('back');
        }
    });
}