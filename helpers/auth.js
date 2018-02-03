module.exports = {
    ensureAuthenicated : function(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg', 'No Authorized');
        res.redirect('/users/login');
    }
}