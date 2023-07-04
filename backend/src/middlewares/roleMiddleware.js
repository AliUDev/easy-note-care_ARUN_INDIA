
const protectRole = (...roles) => {
    (req, res, next)=>{
        if(!roles.includes("sudoAdmin" || "superAdmin")){
            return res.sendStatus(403);
        }

        next();
    }
  };
module.exports = { protectRole };