const { Hall, User, Admin } = require('./schema');
module.exports.insertUser = async (req,res) => {
    const user = new User({
        name: req.body.name,
        rollno:req.body.rollno,
        email: req.body.email,
        mobno:req.body.mobno,
        password:req.body.password,
        department:req.body.department,
        hallnum:req.body.hallnum,
        
    })
    await user.save();
    res.send({msg:"User Added Sucessfully !"});
}
module.exports.insertAdmin = async (req,res) => {
    const admin = new Admin({
        facultyid:req.body.facultyid,
        name: req.body.name,
        mobno:req.body.mobno,
        password:req.body.password,
    })
    await admin.save();
    res.send({msg:"Admin Added Sucessfully !"});
}
module.exports.insertHall = async (req,res) => {
    const hall = new Hall({
        hallnum: req.body.hallnum,
        loaction:req.body.loaction,
        capacity:req.body.capacity,
        facultyid:req.body.facultyid,
    })
    await hall.save();
    res.send({msg:"Hall Added Sucessfully !"});
}