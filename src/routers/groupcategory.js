var groupcategory=require('./../../models/groupCatelogy');

exports.FindGroupByID = async (req, res) => {
    var id = req.params.id;
    await groupcategory.find({ id : id }, function (err, docs) {
        res.json(docs);
    });
}
exports.FindGroupByStore = async (req, res) => {
    var id = req.params.id;
    await product.find({ storeID : id }, function (err, docs) {
        res.json(docs);
    });
}
exports.AddGroup = async (req, res) => {
    const {storeID,name}=req.body;
    const groupCate=new GroupCate({storeID,name});
    await groupCate.save().then(result=>{
        res.send("Added");
    }).catch(err=>{
        res.send("Error");
    })
}
exports.UpdateGroup = async (req, res) => {
    const {storeID,name}=req.body;
    const newGroupCate={storeID,name};
    await GroupCate.findByIdAndUpdate(req.params.id,newGroupCate).then(result=>{
        res.send("Updated");
    }).catch(err=>{
        res.send("Error");
    })
}
exports.DeleteGroup = async (req, res) => {
    console.log(req.params.id);
    await GroupCate.findByIdAndRemove(req.params.id).then(result=>{
        res.send("Deleted");
    }).catch(err=>{
        res.send("Error");
    });
}