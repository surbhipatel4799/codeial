module.exports.home = function(req, res){
    return res.send('<h1>Express is up for codeial</h1>')
}

module.exports.contact = function(req, res){
    return res.send("<h1>Contact Section</h1>");
}