module.exports.profile = function(req, res){
    return res.end("<h1>User Profile</h1>");
}

module.exports.userName = function(req, res){
    return res.send("<h1>Render User Name</h1>")
}