const router = require('express').Router();

const authCheck = (req, res, next)=>{
    console.log("*********** Performing AuthCheck **************");
    console.log(req.user);
    if(!req.user){
        // If user is not logged in then
        res.redirect('/auth/login');
    }
    else{
        // If user is logged in then
        next();
    }
}
router.get('/', authCheck, (req,res)=>{
    const user = req.user;    
    res.send('you are logged in, this is your profile - ' + user._name);
});

module.exports = router;