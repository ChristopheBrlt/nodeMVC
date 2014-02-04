
/*
 * GET users listing.
 */

module.exports.controller = function(app){
    app.get('/user',function(req, res){
        res.render('index', { title: 'User' });
    });
    
    app.get('/list',function(req, res){
        res.render('index', { title: 'List' });
    });
};