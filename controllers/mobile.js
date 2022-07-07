const Mobile = require('../models/mobile');


function namekey(a,b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;

    return 0;
}

function brandkey(a,b) {
    if (a.brand.toLowerCase() < b.brand.toLowerCase()) return -1;

    if(a.brand.toLowerCase() > b.brand.toLowerCase()) return 1;

    return 0;
}

function quantitykey(a,b) {
    if (a.quantity < b.quantity) return -1;

    if(a.quantity > b.quantity) return 1;

    return 0;
}

exports.addMobile = async(req,res) => {

    let product = {name,description,quantity,brand,RAM,storage,screen,display} = req.body; 

    try {

        let mobile = await Mobile.findOne({name : req.body.name});

        if (mobile) return res.status(400).json({message : "This product is already in the inventory,if you want to add one more time try editing the quantity"});

        let result = await Mobile.create({...product});

        return res.status(201).json({result, message : "Product added to inventory successfully"})

    } catch (error) {
        return res.status(500).json({message : "Something went wrong"})
    }
}

exports.getMobiles = async(req,res) => {

    

    try {

        let mobiles = await Mobile.find({},{"name" : 1,"brand" : 1,"quantity" : 1});

        return res.status(201).json({mobiles});

    } catch (error) {
        return res.status(500).json({message : "Something went wrong"})
    }
}

exports.getAMobile = async(req,res) => {

    let {id} = req.params;

    try {

        let mobile = await Mobile.findById(id);

        if ( ! mobile) return res.status(404).json({message : "This product doesn't exist in inventory"});

        return res.status(201).json({mobile});

    } catch (error) {
        return res.status(500).json({message : "Something went wrong"})
    }
}

exports.editMobile = async(req,res) => {

    let {id} = req.params;

    let product = {name,description,quantity,brand,RAM,storage,screen,display} = req.body;

    try {

        let mobile = await Mobile.findById(id);

        if ( ! mobile) return res.status(404).json({message : "This product doesn't exist in inventory"});

        let result = await Mobile.findByIdAndUpdate(id,{...product},{new : true});

        return res.status(200).json({result , message : "Product updated successfully"})

    } catch (error) {
        return res.status(500).json({message : "Something went wrong"})
    }

    
};

exports.deleteMobile = async(req,res) => {

    let {id} = req.params;

    try {

        let mobile = await Mobile.findById(id);

        if ( ! mobile) return res.status(404).json({message : "This product doesn't exist in inventory"});

        await Mobile.findByIdAndRemove(id);

        return res.status(404).json({id,message : "This product is deleted successfully"});

    } catch (error) {
        return res.status(500).json({message : "Something went wrong"})
    }
}

exports.filterMobiles = async(req,res) => {

    let {brand} = req.params;

    try {

        
        let mobiles = await Mobile.find({},{"name" : 1,"brand" : 1,"quantity" : 1,"_id" : 0});

        mobiles = mobiles.filter((mobile) => mobile.brand === brand);

        return res.status(201).json({mobiles});

    } catch (error) {
        return res.status(500).json({message : "Something went wrong"});
    }
}


exports.sortMobiles = async(req,res) => {

    let {sort} = req.params;

    try {
        
        let mobiles = await Mobile.find({},{"name" : 1,"brand" : 1,"quantity" : 1,"_id" : 0});

        if(sort === 'name') {
            mobiles.sort(namekey);
        }

        else if(sort === 'brand') {
            mobiles.sort(brandkey);
        }

        else if (sort === 'quantity'){
            mobiles.sort(quantitykey);
        }


         return res.status(201).json({mobiles});



    } catch (error) {
        return res.status(500).json({message : "Something went wrong"});
    }
}