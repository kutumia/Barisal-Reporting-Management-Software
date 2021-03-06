const db=require('../models');
const pd = db.pd;
const dd = db.dd;
const ad = db.ad;       
const upazilla = db.upazilla;
const saao = db.saao;
const trainedFarmer = db.trainedFarmer;
const initialTrial = db.initialTrial;
const trialProgress = db.trialProgress;
const finalTrial = db.finalTrial;
const breedExpansion = db.breedExpansion;
const technologyExpansion = db.technologyExpansion;
const cropExpansion = db.cropExpansion;
const abadiJomi = db.abadiJomi;
const demonstration = db.demonstration;
const fieldDay = db.fieldDay;
const farmerTraining = db.farmerTraining;
const agriFair = db.agriFair;
const farmerPrize = db.farmerPrize;
const llp = db.llp;
const solarLight = db.solarLight;
const selectedField = db.selectedField;
const cropNibirota = db.cropNibirota;
const producedCrop = db.producedCrop;
const cropList = db.cropList;
const technologyList = db.technologyList;

const multer = require("multer");
const path = require("path");

const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs'); 

const { request, response } = require('express');
const express = require('express');

//multer setup for demonstration image
var storageDemonstration = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/demonstration');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var upload = multer({
    storage: storageDemonstration,
 }).single("newsUp");
 exports.upload=upload;
 //multer setup for demonstration image ends

 //multer setup for fieldDay image
var storagefieldDay = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/fieldDay');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadfieldDay = multer({
    storage: storagefieldDay,
 }).single("newsUp");
 exports.uploadfieldDay=uploadfieldDay;
 //multer setup for fieldDay image ends

 //multer setup for farmerTraining image
var storagefarmerTraining = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/farmerTraining');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadfarmerTraining = multer({
    storage: storagefarmerTraining,
 }).single("newsUp");
 exports.uploadfarmerTraining=uploadfarmerTraining;
 //multer setup for farmerTraining image ends

 //multer setup for agriFair image
var storageagriFair = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/agriFair');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadagriFair = multer({
    storage: storageagriFair,
 }).single("newsUp");
 exports.uploadagriFair=uploadagriFair;
 //multer setup for agriFair image ends

 //multer setup for farmerPrize image
var storagefarmerPrize = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/farmerPrize');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadfarmerPrize = multer({
    storage: storagefarmerPrize,
 }).single("newsUp");
 exports.uploadfarmerPrize=uploadfarmerPrize;
 //multer setup for farmerPrize image ends

 //multer setup for llp image
var storagellp = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/llp');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadllp = multer({
    storage: storagellp,
 }).single("newsUp");
 exports.uploadllp=uploadllp;
 //multer setup for llp image ends

 //multer setup for solarLight image
var storagesolarLight = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/solarLight');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadsolarLight = multer({
    storage: storagesolarLight,
 }).single("newsUp");
 exports.uploadsolarLight=uploadsolarLight;
 //multer setup for solarLight image ends

module.exports.upazillatable=async(req,res)=>{
    res.json({ message: "hello upazilla" });
};

module.exports.allupazilla=async(req,res)=>{
    res.json({ message: "hello upazilla" });
};


module.exports.upazillalogin=async(req,res)=>{
    res.render('upazilla/login', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'' });
    res.send("log");
};

module.exports.upazillaloginpost=async(req,res)=>{
    try {
        const uname = req.body.uname;
        const password = req.body.password;
        upazilla.findAll({ where: {uname: uname} })
        .then(data => {
            if(data.length > 0){
                bcrypt.compare(password,data[0].password,function(err, result) {
                    if(result== true){
                        req.session.type = "upazilla";
                        req.session.user_id = data[0].id;
                        req.session.uname=data[0].uname;
                        const id=req.session.user_id;
                        // res.locals.type = req.session.type;
                        // res.locals.user_id = req.session.user_id;
                        console.log("session=", req.session.type,res.locals);
                        // const token=jwt.sign({id},process.env.JWT_SECRET,token{
                        //     expiresIn:process.env.JWT_EXPIRES_IN
                        // });
                        // console.log("the token is :"+)
                        res.redirect('/upazilla/dashboard');
                    }
                    else{
                        return res.status(200).render('upazilla/login', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'Please provide a username and password' });
                    }
                });
            }else{
                return res.status(200).render('upazilla/login', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'Please provide a username and password' });
            }
        })
        .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving tutorials."
              });
            });
        // upazilla.findAll({ where: {uname: uname} })
        // .then(data => {
        //     if(data.length > 0){
        //         bcrypt.compareSync(password , upazilla.password, function(err, result) {
        //             if(result== true){
        //                 res.redirect('/upazilla/dashboard');
        //             }
        //             else{
        //                 res.redirect('/upazilla/dashboard');
        //             }
        //         });
        //     }else{
        //         return res.status(200).render('upazilla/login', { title: 'Horticulture Wing Central Management Software',msg:'Please provide a username and password' });
        //     }
        // })
        // .catch(err => {
        //   res.status(500).send({
        //     message:
        //       err.message || "Some error occurred while retrieving tutorials."
        //   });
        // });

        
    }
    catch(error){
        console.log(error);
    } 
};

module.exports.upazillaDashboard = async(req,res) => {
    try{
    upazillas=await upazilla.findAll({where: {id:req.session.user_id}})
    res.render('upazilla/dashboard', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',upazilla:upazillas,msg:'Welcome' });
    }
    catch{
        console.log(err);
    }
};
//logIn controller end

//signUp controller
module.exports.upazillasignup=async(req,res)=>{
    await dd.findAll()
    .then(data => {
        console.log("inside");
        res.render('upazilla/signup', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'',records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/signup', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'',records: err });
    })
};
module.exports.upazillasignuppost=async(req,res)=>{
    try {
        const{dds,name,uname,password,confirmPassword}=req.body;
        const ddata=await dd.findAll();
        const data = await upazilla.findAll({ where: {uname: uname} });
        
        if(data.length > 0){
            res.render('upazilla/signup',{title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'ERROR: The upazilla is already enrolled!',records: ddata})
        }
        else if(password !== confirmPassword){
           res.render('upazilla/signup',{title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'ERROR: Passwords do not match!',records: ddata})
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log(hashedPassword);
            try{
                const createupazilla = await upazilla.create({
                    name:name,
                    uname: uname,
                    password:hashedPassword,
                    dd_id:dds,
                    pd_id:1
                    })
                res.render('upazilla/signup',{title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'upazilla Registered Successfully!',records: ddata})
            }
            catch (err) {
                console.log(err);
            }
            
        }
    }
    catch(error){
        console.log(error);
    } 
};
//signUp controller end

//cropNibirota controller
module.exports.cropNibirota=async(req,res)=>{ 
    try{
        var saaos =await saao.findAll({ where: {upazilla_id: req.session.user_id}})
        console.log("inside");
        res.render('upazilla/cropNibirota/cropNibirota', { title: 'শস্য নিবিড়তার অগ্রগতির তথ্য',success:'',saaos:saaos});
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};

module.exports.cropNibirotaFilter=async(req,res)=>{
    try{
        var seventeen=await cropNibirota.findOne({where: {year:"2017",saao_id: req.body.saao}});
        var eighteen=await cropNibirota.findOne({where: {year:"2018",saao_id: req.body.saao}});
        var nineteen=await cropNibirota.findOne({where: {year:"2019",saao_id: req.body.saao}});
        var twenty=await cropNibirota.findOne({where: {year:"2020",saao_id: req.body.saao}});
        var twentyOne=await cropNibirota.findOne({where: {year:"2021",saao_id: req.body.saao}});
        var twentyTwo=await cropNibirota.findOne({where: {year:"2022" ,saao_id: req.body.saao}});
        res.render('upazilla/cropNibirota/cropNibirotaTable', { title: 'শস্য নিবিড়তার অগ্রগতির তথ্য',success:'',seventeen: seventeen,eighteen: eighteen,nineteen: nineteen,twenty: twenty,twentyOne: twentyOne,twentyTwo: twentyTwo });
    }
    catch(err){
        console.log("outside",err);
    }
};
//producedCrop controller
module.exports.producedCrop=async(req,res)=>{ 
    try{
        var saaos =await saao.findAll({ where: {upazilla_id: req.session.user_id}})
        console.log("inside");
        res.render('upazilla/producedCrop/producedCrop', { title: 'মাঠে উৎপাদিত ফসলের তথ্য',success:'',saaos:saaos});
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};

module.exports.producedCropFilter=async(req,res)=>{
    try{
        var seventeen=await producedCrop.findAll({where: {year:"2017",saao_id: req.body.saao}});
            var eighteen=await producedCrop.findAll({where: {year:"2018",saao_id: req.body.saao}});
            var nineteen=await producedCrop.findAll({where: {year:"2019",saao_id: req.body.saao}});
            var twenty=await producedCrop.findAll({where: {year:"2020",saao_id: req.body.saao}});
            var twentyOne=await producedCrop.findAll({where: {year:"2021",saao_id: req.body.saao}});
            var twentyTwo=await producedCrop.findAll({where: {year:"2022" ,saao_id: req.body.saao}});
            var cropLists=await cropList.findAll({where: {type: "crop"}});
            res.render('upazilla/producedCrop/producedCropTable', { title: 'মাঠে উৎপাদিত ফসলের তথ্য',success:'',cropList:cropLists, seventeen: seventeen,eighteen: eighteen,nineteen: nineteen,twenty: twenty,twentyOne: twentyOne,twentyTwo: twentyTwo });
            // var men=seventeen.purush;
            // console.log("seventeen,",req.typeof(men));
        }
        catch(err){
            console.log(err);
        }

};
//producedCrop controller end
//selectedField controller
module.exports.selectedField=async(req,res)=>{ 
    try{
        var saaos =await saao.findAll({ where: {upazilla_id: req.session.user_id}})
        console.log("inside");
        res.render('upazilla/selectedField/selectedField', { title: 'নির্বাচিত মাঠের কৃষকের তথ্য',success:'',saaos:saaos});
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};

module.exports.selectedFieldFilter=async(req,res)=>{
    await selectedField.findAll({ 
        where: {year: req.body.year,saao_id: req.body.saao}
    })
    
    .then(data => {
        res.render('upazilla/selectedField/selectedFieldTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
//selectedField controller end
//seasonProduction controller
module.exports.seasonProduction=async(req,res)=>{ 
    try{
        var saaos =await saao.findAll({ where: {upazilla_id: req.session.user_id}})
        console.log("inside");
        res.render('upazilla/seasonProduction/seasonProduction', { title: 'মৌসুমওয়ারী আবাদকৃত ফসলের তথ্য',success:'',saaos:saaos});
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};

module.exports.seasonProductionFilter=async(req,res)=>{
    await producedCrop.findAll({
        where: {year: req.body.year,saao_id: req.body.saao}
    })
    
    .then(data => {
        res.render('upazilla/seasonProduction/seasonProductionTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
//seasonProduction controller end

//trainedFarmer controller
module.exports.trainedFarmer=async(req,res)=>{
    await trainedFarmer.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/trainedFarmer/trainedFarmer', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/trainedFarmer/trainedFarmer', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'', records: err });
    })
     
    //  records:result

};

module.exports.trainedFarmerYear=async(req,res)=>{
    await trainedFarmer.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/trainedFarmer/trainedFarmerTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/trainedFarmer/trainedFarmerYear', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'', records: err });
    })

};

module.exports.trainedFarmerForm=async(req,res)=>{
    res.render('upazilla/trainedFarmer/trainedFarmerForm', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',msg:'' ,success:'',user_id: req.session.user_id});
};

module.exports.trainedFarmerFormPost=async(req,res)=>{
    var name= req.body.name;
    var fname= req.body.fname;
    var vname= req.body.vname;
    var nid= req.body.nid;
    var mnum= req.body.mnum;
    var ptype= req.body.ptype;
    var pname= req.body.pname;
    var date= req.body.date;
    var block= req.body.block;
    var saooname= req.body.saooname;
    var pnum= req.body.pnum;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await trainedFarmer.create({
        name: name,
        fname:fname,
        vname:vname,
        nid:nid,
        mnum:mnum,
        ptype:ptype,
        pname:pname,
        date:date,
        block:block,
        saooname:saooname,
        pnum:pnum,
        year:year,
        upazilla_id:user_id
    });
    await initialTrial.create({
        name: name,
        fname:fname,
        vname:vname,
        nid:nid,
        mnum:mnum,
        ptype:ptype,
        pname:pname,
        block:block,
        saooname:saooname,
        pnum:pnum,
        year:year,
        upazilla_id:user_id
    });
    await finalTrial.create({
        name: name,
        fname:fname,
        vname:vname,
        nid:nid,
        mnum:mnum,
        ptype:ptype,
        pname:pname,
        year:year,
        upazilla_id:user_id
    })
    
        
        .then(data => {
            res.redirect('/upazilla/trainedFarmer');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.trainedFarmerEdit=async(req,res)=>{
    await trainedFarmer.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/trainedFarmer/trainedFarmerEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',msg:'' ,success:'',records:data,user_id: req.session.user_id});
    })
    .catch(err => {
        console.log("err");
    })
};
module.exports.trainedFarmerEditPost=async(req,res)=>{
    var name= req.body.name;
    var fname= req.body.fname;
    var vname= req.body.vname;
    var nid= req.body.nid;
    var mnum= req.body.mnum;
    var ptype= req.body.ptype;
    var pname= req.body.pname;
    var date= req.body.date;
    var block= req.body.block;
    var saooname= req.body.saooname;
    var pnum= req.body.pnum;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await trainedFarmer.update({
        name: name,
        fname:fname,
        vname:vname,
        nid:nid,
        mnum:mnum,
        ptype:ptype,
        pname:pname,
        date:date,
        block:block,
        saooname:saooname,
        pnum:pnum,
        year:year,
    },
    {
        where: {id: req.params.id}
    }),
    await initialTrial.update({
        name: name,
        fname:fname,
        vname:vname,
        nid:nid,
        mnum:mnum,
        ptype:ptype,
        pname:pname,
        block:block,
        saooname:saooname,
        pnum:pnum,
        year:year
    },
    {
        where: {id: req.params.id}
    });
    await finalTrial.update({
        name: name,
        fname:fname,
        vname:vname,
        nid:nid,
        mnum:mnum,
        ptype:ptype,
        pname:pname,
        year:year
    },
    {
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/upazilla/trainedFarmer');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.trainedFarmerDelete=async(req,res)=>{
    var trainedFarmerDelete = await trainedFarmer.findByPk(req.params.id);
    var initialTrialDelete = await initialTrial.findByPk(req.params.id);
    var finalTrialDelete = await finalTrial.findByPk(req.params.id);
    try {
        trainedFarmerDelete.destroy();
        initialTrialDelete.destroy();
        finalTrialDelete.destroy();
        res.redirect("/upazilla/trainedFarmer");
    }
    catch{
        res.render('errorpage',err);
    }
  
};
//trainedFarmer controller end

//initialTrial controller
module.exports.initialTrial=async(req,res)=>{
    await initialTrial.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/initialTrial/initialTrial', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/initialTrial/initialTrial', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',success:'', records: err });
    })
     
    //  records:result

};

module.exports.initialTrialYear=async(req,res)=>{
    await initialTrial.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/initialTrial/initialTrialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/initialTrial/initialTrialYear', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',success:'', records: err });
    })

};

module.exports.initialTrialForm=async(req,res)=>{
    res.render('upazilla/initialTrial/initialTrialForm', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',msg:'' ,success:'',user_id: req.session.user_id});
};

module.exports.initialTrialFormPost=async(req,res)=>{
    var cdistribution= req.body.cdistribution;
    var pdistribution= req.body.pdistribution;
    var breedname= req.body.breedname;
    var source= req.body.source;
    var trialsize= req.body.trialsize;
    var trialdate= req.body.trialdate;

    await initialTrial.update(
        {
            cdistribution: cdistribution,
            pdistribution:pdistribution,
            breedname:breedname,
            source:source,
            trialsize:trialsize,
            trialdate:trialdate,
        },
        {
            where: {id: req.params.id}
        }
    );
    await finalTrial.update(
        {
            cdistribution: cdistribution,
            pdistribution:pdistribution,
            breedname:breedname,
            source:source,
            trialsize:trialsize,
            trialdate:trialdate,
        },
        {
            where: {id: req.params.id}
        }
    )
    
        
        .then(data => {
            res.redirect('/upazilla/initialTrial');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.initialTrialEdit=async(req,res)=>{
    await initialTrial.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/initialTrial/initialTrialForm', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/initialTrial/initialTrialForm', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',msg:'' ,success:'', records: err });
    })
    
};
module.exports.initialTrialUpdate=async(req,res)=>{
    res.render('upazilla/initialTrial/initialTrialForm', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',msg:'' ,success:'',user_id: req.session.user_id});
};

module.exports.initialTrialDelete=async(req,res)=>{
    var cdistribution= req.body.cdistribution;
    var pdistribution= req.body.pdistribution;
    var breedname= req.body.breedname;
    var source= req.body.source;
    var trialsize= req.body.trialsize;
    var trialdate= req.body.trialdate;

    await initialTrial.create({
        cdistribution: cdistribution,
        pdistribution:pdistribution,
        breedname:breedname,
        source:source,
        trialsize:trialsize,
        trialdate:trialdate,
    });
    await finalTrial.create({
        cdistribution: cdistribution,
        pdistribution:pdistribution,
        breedname:breedname,
        source:source,
        trialsize:trialsize,
        trialdate:trialdate,
    })
    
        
        .then(data => {
            res.redirect('/upazilla/initialTrial');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
//initialTrial controller end

//finalTrial controller
module.exports.finalTrial=async(req,res)=>{
    await finalTrial.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/finalTrial/finalTrial', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/finalTrial/finalTrial', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:'', records: err });
    })
     
    //  records:result

};

module.exports.finalTrialYear=async(req,res)=>{
    await finalTrial.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/finalTrial/finalTrialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/finalTrial/finalTrialYear', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:'', records: err });
    })

};

module.exports.finalTrialForm=async(req,res)=>{
    res.render('upazilla/finalTrial/finalTrialForm', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',msg:'' ,success:'',user_id: req.session.user_id});
};

module.exports.finalTrialFormPost=async(req,res)=>{
    var cdate= req.body.cdate;
    var production= req.body.production;
    var folon= req.body.folon;
    var bij= req.body.bij;
    var comment= req.body.comment;

    await finalTrial.update({
        cdate: cdate,
        production:production,
        folon:folon,
        bij:bij,
        comment:comment,
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/upazilla/finalTrial');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.finalTrialEdit=async(req,res)=>{
    await finalTrial.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/finalTrial/finalTrialForm', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/finalTrial/finalTrialForm', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',msg:'' ,success:'', records: err });
    })
};

module.exports.finalTrialDelete=async(req,res)=>{
    var cdate= req.body.cdate;
    var production= req.body.production;
    var folon= req.body.folon;
    var bij= req.body.bij;
    var comment= req.body.comment;

    await finalTrial.create({
        cdate: cdate,
        production:production,
        folon:folon,
        bij:bij,
        comment:comment,
    })
    
        
        .then(data => {
            res.redirect('/upazilla/finalTrial');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
//finalTrial controller end

//trialProgress controller
module.exports.trialProgress=async(req,res)=>{
    await trialProgress.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside",data);
        res.render('upazilla/trialProgress/trialProgress', { title: 'প্রদর্শনীর অগ্রগতির প্রতিবেদন',success:'', records: data });
    })
    .catch(err => {
        console.log("outsidesss");
        res.render('upazilla/trialProgress/trialProgress', { title: 'প্রদর্শনীর অগ্রগতির প্রতিবেদন',success:'', records: err });
    })
     
    //  records:result

};

module.exports.trialProgressYear=async(req,res)=>{
    await trialProgress.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/trialProgress/trialProgressTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/trialProgress/trialProgressYear', { title: 'প্রদর্শনীর অগ্রগতির প্রতিবেদন',success:'', records: err });
    })

};

module.exports.trialProgressForm=async(req,res)=>{
    res.render('upazilla/trialProgress/trialProgressForm', { title: 'প্রদর্শনীর অগ্রগতির প্রতিবেদন',msg:'' ,success:'',user_id: req.session.user_id});
};

module.exports.trialProgressFormPost=async(req,res)=>{
    var name= req.body.name;
    var boraddo= req.body.boraddo;
    var done= req.body.done;
    var breed= req.body.breed;
    var source= req.body.source;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await trialProgress.create({
        name: name,
        boraddo:boraddo,
        done:done,
        breed:breed,
        source:source,
        year:year,
        upazilla_id:user_id,
    })
    
        
        .then(data => {
            res.redirect('/upazilla/trialProgress');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.trialProgressEdit=async(req,res)=>{
    await trialProgress.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/trialProgress/trialProgressEdit', { title: 'প্রদর্শনীর অগ্রগতির প্রতিবেদন',msg:'' ,success:'',records:data,user_id: req.session.user_id});
    })
    .catch(err => {
        console.log("err");
    })
};
module.exports.trialProgressEditPost=async(req,res)=>{
    var name= req.body.name;
    var boraddo= req.body.boraddo;
    var done= req.body.done;
    var breed= req.body.breed;
    var source= req.body.source;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await trialProgress.update({
        name: name,
        boraddo:boraddo,
        done:done,
        breed:breed,
        source:source,
        year:year,
    },
    {
        where: {id: req.params.id}
    }) 
      .then(data => {
            res.redirect('/upazilla/trialProgress');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};

module.exports.trialProgressDelete=async(req,res)=>{
    var trialProgressDelete = await trialProgress.findByPk(req.params.id);
    try {
        trialProgressDelete.destroy();
        res.redirect("/upazilla/trialProgress");
    }
    catch{
        res.render('errorpage',err);
    }
};
//trialProgress controller end

//cropExpansion controller
module.exports.cropExpansion=async(req,res)=>{

        res.render('upazilla/cropExpansion/cropExpansion', { title: 'প্রকল্প এলাকার ফসল আবাদ অগ্রগতি',success:''});


};
module.exports.cropExpansionYear=async(req,res)=>{
    await cropExpansion.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/cropExpansion/cropExpansionTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("err",err)
    })

};
module.exports.cropExpansionForm=async(req,res)=>{
    var upazillas= await upazilla.findOne({where: {id: req.session.user_id}});
    var dds=upazillas.dd_id;
    var data=await cropList.findAll({where: {type: "crop"}})
      try {
        res.render('upazilla/cropExpansion/cropExpansionForm', { title: 'প্রকল্প এলাকার ফসল আবাদ অগ্রগতি',msg:'' ,success:'',dd:dds,user_id: req.session.user_id,data:data});
      }
      catch{
        console.log(err);
      };
};
module.exports.cropExpansionFormPost=async(req,res)=>{
    var crop= req.body.name;
    var areaShotero= req.body.areaShotero;
    var productionShotero= req.body.productionShotero;
    var areaAtharo= req.body.areaAtharo;
    var productionAtharo= req.body.productionAtharo;
    var areaUnish= req.body.areaUnish;
    var productionUnish= req.body.productionUnish;
    var areaBish= req.body.areaBish;
    var productionBish= req.body.productionBish;
    var areaEkush= req.body.areaEkush;
    var productionEkush= req.body.productionEkush;
    var areaBaish= req.body.areaBaish;
    var productionBaish= req.body.productionBaish;
    var user_id =req.body.user_id;
    var dd_id =req.body.dd;

    await cropExpansion.create({
        crop: crop,
        areaShotero:areaShotero,
        productionShotero:productionShotero,
        areaAtharo:areaAtharo,
        productionAtharo:productionAtharo,
        areaUnish:areaUnish,
        productionUnish:productionUnish,
        areaBish:areaBish,
        productionBish:productionBish,
        areaEkush:areaEkush,
        productionEkush:productionEkush,
        areaBaish:areaBaish,
        productionBaish:productionBaish,
        upazilla_id:user_id,
        dd_id:dd_id
    })
    
    
        
        .then(data => {
            res.redirect('/upazilla/cropExpansion');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.cropExpansionEdit=async(req,res)=>{
    res.render('upazilla/cropExpansion/cropExpansionForm', { title: 'প্রকল্প এলাকার ফসল আবাদ অগ্রগতি',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.cropExpansionDelete=async(req,res)=>{
    var technology= req.body.technology;
    var areaShotero= req.body.areaShotero;
    var productionShotero= req.body.productionShotero;
    var areaAtharo= req.body.areaAtharo;
    var productionAtharo= req.body.productionAtharo;
    var areaUnish= req.body.areaUnish;
    var productionUnish= req.body.productionUnish;
    var areaBish= req.body.areaBish;
    var productionBish= req.body.productionBish;
    var areaEkush= req.body.areaEkush;
    var productionEkush= req.body.productionEkush;
    var areaBaish= req.body.areaBaish;
    var productionBaish= req.body.productionBaish;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await technologyExpansion.create({
        technology: technology,
        areaShotero:areaShotero,
        productionShotero:productionShotero,
        areaAtharo:areaAtharo,
        productionAtharo:productionAtharo,
        areaUnish:areaUnish,
        productionUnish:productionUnish,
        areaBish:areaBish,
        productionBish:productionBish,
        areaEkush:areaEkush,
        productionEkush:productionEkush,
        areaBaish:areaBaish,
        productionBaish:productionBaish,
        year:year,
        upazilla_id:user_id
    })
    
    
        
        .then(data => {
            res.redirect('/upazilla/technologyExpansion');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
//technologyExpansion controller end

//breedExpansion controller
module.exports.breedExpansion=async(req,res)=>{
    await breedExpansion.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/breedExpansion/breedExpansion', { title: 'প্রকল্প এলাকার ফসলের জাত সম্প্রসারণ',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })
     
    //  records:result

};

module.exports.breedExpansionYear=async(req,res)=>{
    await breedExpansion.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/breedExpansion/breedExpansionTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log(err);
    })

};

module.exports.breedExpansionForm=async(req,res)=>{
    var upazillas= await upazilla.findOne({where: {id: req.session.user_id}});
    var dds=upazillas.dd_id;
    var data=await cropList.findAll({where: {type: "crop"}})
    try {
        res.render('upazilla/breedExpansion/breedExpansionForm', { title: 'প্রকল্প এলাকার জাত সম্প্রসারণ',msg:'' ,success:'',dd:dds,user_id: req.session.user_id,data:data});
      }
      catch{
        console.log(err);
      };
};

module.exports.breedExpansionFormPost=async(req,res)=>{
    var name= req.body.name;
    var breed= req.body.breed;
    var areaShotero= req.body.areaShotero;
    var productionShotero= req.body.productionShotero;
    var areaAtharo= req.body.areaAtharo;
    var productionAtharo= req.body.productionAtharo;
    var areaUnish= req.body.areaUnish;
    var productionUnish= req.body.productionUnish;
    var areaBish= req.body.areaBish;
    var productionBish= req.body.productionBish;
    var areaEkush= req.body.areaEkush;
    var productionEkush= req.body.productionEkush;
    var areaBaish= req.body.areaBaish;
    var productionBaish= req.body.productionBaish;
    var user_id =req.body.user_id;
    var dd_id =req.body.dd;

    await breedExpansion.create({
        name: name,
        bname:breed,
        areaShotero:areaShotero,
        productionShotero:productionShotero,
        areaAtharo:areaAtharo,
        productionAtharo:productionAtharo,
        areaUnish:areaUnish,
        productionUnish:productionUnish,
        areaBish:areaBish,
        productionBish:productionBish,
        areaEkush:areaEkush,
        productionEkush:productionEkush,
        areaBaish:areaBaish,
        productionBaish:productionBaish,
        upazilla_id:user_id,
        dd_id:dd_id
    })
    
        
        .then(data => {
            res.redirect('/upazilla/breedExpansion');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.breedExpansionEdit=async(req,res)=>{
    res.render('upazilla/breedExpansion/breedExpansionForm', { title: 'প্রকল্প এলাকার ফসলের জাত সম্প্রসারণ',msg:'' ,success:'',user_id: req.session.user_id});
};

module.exports.breedExpansionDelete=async(req,res)=>{
    var name= req.body.name;
    var bname= req.body.bname;
    var areaShotero= req.body.areaShotero;
    var productionShotero= req.body.productionShotero;
    var areaAtharo= req.body.areaAtharo;
    var productionAtharo= req.body.productionAtharo;
    var areaUnish= req.body.areaUnish;
    var productionUnish= req.body.productionUnish;
    var areaBish= req.body.areaBish;
    var productionBish= req.body.productionBish;
    var areaEkush= req.body.areaEkush;
    var productionEkush= req.body.productionEkush;
    var areaBaish= req.body.areaBaish;
    var productionBaish= req.body.productionBaish;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await breedExpansion.create({
        name: name,
        bname: bname,
        areaShotero:areaShotero,
        productionShotero:productionShotero,
        areaAtharo:areaAtharo,
        productionAtharo:productionAtharo,
        areaUnish:areaUnish,
        productionUnish:productionUnish,
        areaBish:areaBish,
        productionBish:productionBish,
        areaEkush:areaEkush,
        productionEkush:productionEkush,
        areaBaish:areaBaish,
        productionBaish:productionBaish,
        year:year,
        upazilla_id:user_id
    })
    
        
        .then(data => {
            res.redirect('/upazilla/breedExpansion');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.fetchBreed = async (req, res) => {
    var crop=await cropList.findOne({where: {name:req.body.name}});
    var cropId=crop.id;
    await cropList.findAll({where: {type: "breed",parent_id:cropId}})
      .then((breed) => {
        res.send(breed);
      })
      .catch((err) => {
        console.log(err);
      });
  };
//breedExpansion controller end

//technologyExpansion controller
module.exports.technologyExpansion=async(req,res)=>{
    
        res.render('upazilla/technologyExpansion/technologyExpansion', { title: 'প্রকল্প এলাকার প্রযুক্তি সম্প্রসারণ',success:'' });


     
    //  records:result

};
module.exports.technologyExpansionYear=async(req,res)=>{
    await technologyExpansion.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/technologyExpansion/technologyExpansionTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("err",err)
    })

};
module.exports.technologyExpansionForm=async(req,res)=>{
    var upazillas= await upazilla.findOne({where: {id: req.session.user_id}});
    var dds=upazillas.dd_id;
    var data=await technologyList.findAll()
      try {
        res.render('upazilla/technologyExpansion/technologyExpansionForm', { title: 'প্রকল্প এলাকার প্রযুক্তি সম্প্রসারণ',msg:'' ,success:'',dd:dds,user_id: req.session.user_id,data:data});
      }
      catch{
        console.log(err);
      };
};
module.exports.technologyExpansionFormPost=async(req,res)=>{
    var technology= req.body.technology;
    var areaShotero= req.body.areaShotero;
    var userShotero= req.body.userShotero;
    var areaAtharo= req.body.areaAtharo;
    var userAtharo= req.body.userAtharo;
    var areaUnish= req.body.areaUnish;
    var userUnish= req.body.userUnish;
    var areaBish= req.body.areaBish;
    var userBish= req.body.userBish;
    var areaEkush= req.body.areaEkush;
    var userEkush= req.body.userEkush;
    var areaBaish= req.body.areaBaish;
    var userBaish= req.body.userBaish;
    var user_id =req.body.user_id;
    var dd_id =req.body.dd;

    await technologyExpansion.create({
        technology: technology,
        areaShotero:areaShotero,
        userShotero:userShotero,
        areaAtharo:areaAtharo,
        userAtharo:userAtharo,
        areaUnish:areaUnish,
        userUnish:userUnish,
        areaBish:areaBish,
        userBish:userBish,
        areaEkush:areaEkush,
        userEkush:userEkush,
        areaBaish:areaBaish,
        userBaish:userBaish,
        upazilla_id:user_id,
        dd_id:dd_id
    })
    
    
        
        .then(data => {
            res.redirect('/upazilla/technologyExpansion');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.technologyExpansionEdit=async(req,res)=>{
    res.render('upazilla/technologyExpansion/technologyExpansionForm', { title: 'প্রকল্প এলাকার প্রযুক্তি সম্প্রসারণ',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.technologyExpansionDelete=async(req,res)=>{
    var technology= req.body.technology;
    var areaShotero= req.body.areaShotero;
    var productionShotero= req.body.productionShotero;
    var areaAtharo= req.body.areaAtharo;
    var productionAtharo= req.body.productionAtharo;
    var areaUnish= req.body.areaUnish;
    var productionUnish= req.body.productionUnish;
    var areaBish= req.body.areaBish;
    var productionBish= req.body.productionBish;
    var areaEkush= req.body.areaEkush;
    var productionEkush= req.body.productionEkush;
    var areaBaish= req.body.areaBaish;
    var productionBaish= req.body.productionBaish;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await technologyExpansion.create({
        technology: technology,
        areaShotero:areaShotero,
        productionShotero:productionShotero,
        areaAtharo:areaAtharo,
        productionAtharo:productionAtharo,
        areaUnish:areaUnish,
        productionUnish:productionUnish,
        areaBish:areaBish,
        productionBish:productionBish,
        areaEkush:areaEkush,
        productionEkush:productionEkush,
        areaBaish:areaBaish,
        productionBaish:productionBaish,
        year:year,
        upazilla_id:user_id
    })
    
    
        
        .then(data => {
            res.redirect('/upazilla/technologyExpansion');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
//technologyExpansion controller end

//abadiJomi controller
module.exports.abadiJomi=async(req,res)=>{
    try{
        var seventeen=await abadiJomi.findOne({where: {year:"2017",upazilla_id: req.session.user_id}});
        var eighteen=await abadiJomi.findOne({where: {year:"2018",upazilla_id: req.session.user_id}});
        var nineteen=await abadiJomi.findOne({where: {year:"2019",upazilla_id: req.session.user_id}});
        var twenty=await abadiJomi.findOne({where: {year:"2020",upazilla_id: req.session.user_id}});
        var twentyOne=await abadiJomi.findOne({where: {year:"2021",upazilla_id: req.session.user_id}});
        var twentyTwo=await abadiJomi.findOne({where: {year:"2022" ,upazilla_id: req.session.user_id}});
        
        res.render('upazilla/abadiJomi/abadiJomi', { title: 'আবাদী জমি ও ফসল উৎপাদন',success:'', seventeen: seventeen,eighteen: eighteen,nineteen: nineteen,twenty: twenty,twentyOne: twentyOne,twentyTwo: twentyTwo });
        // var men=seventeen.purush;
        // console.log("seventeen,",req.typeof(men));
    }
    catch(err){
        res.render('upazilla/abadiJomi/abadiJomi', { title: 'আবাদী জমি ও ফসল উৎপাদন',success:'', records: err });
    }
   

     
    //  records:result

};

module.exports.abadiJomiYear=async(req,res)=>{
    var seventeen=await abadiJomi.findAll({
        where: {year:2017,upazilla_id: req.session.user_id}
    });
    var eighteen=await abadiJomi.findAll({
        where: {year:2018,upazilla_id: req.session.user_id}
    });
    var nineteen=await abadiJomi.findAll({
        where: {year:2019,upazilla_id: req.session.user_id}
    });
    var twenty=await abadiJomi.findAll({
        where: {year:2020,upazilla_id: req.session.user_id}
    });
    var twentyOne=await abadiJomi.findAll({
        where: {year:2021,upazilla_id: req.session.user_id}
    });
    var twentyTwo=await abadiJomi.findAll({
        where: {year:2022,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/abadiJomi', {seventeen: seventeen,eighteen: eighteen,seventeen: seventeen,nineteen: nineteen,twenty: twenty,twentyOne: twentyOne,twentyTwo: twentyTwo} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log(err);
    })

};

module.exports.abadiJomiForm=async(req,res)=>{
    var upazillas= await upazilla.findOne({where: {id: req.session.user_id}});
    var dds=upazillas.dd_id;
    res.render('upazilla/abadiJomi/abadiJomiForm', { title: 'আবাদী জমি ও ফসল উৎপাদন',msg:'' ,success:'',dd:dds,user_id: req.session.user_id});
};

module.exports.abadiJomiFormPost=async(req,res)=>{
    var ayoton= parseInt(req.body.ayoton);
    var purush= parseInt(req.body.purush);
    var mohila= parseInt(req.body.mohila);
    var total= purush+mohila;
    var poribar= parseInt(req.body.poribar);
    var block= parseInt(req.body.block);
    var abadjoggo= parseInt(req.body.abadjoggo);
    var abadi= parseInt(req.body.abadi);
    var ek= parseInt(req.body.ek);
    var dui= parseInt(req.body.dui);
    var tin= parseInt(req.body.tin);
    var mot= ek+dui+tin;
    var nibirota=((ek+dui*2+tin*3)*100)/abadi ;
    var potito=abadjoggo- abadi;
    var cholti= parseInt(req.body.cholti);
    var year =req.body.year;
    var user_id =req.body.user_id;
    var dd_id =req.body.dd;

    await abadiJomi.create({
        ayoton: ayoton,
        purush:purush,
        mohila:mohila,
        total:total,
        poribar:poribar,
        block:block,
        abadjoggo:abadjoggo,
        abadi:abadi,
        ek:ek,
        dui:dui,
        tin:tin,
        mot:mot,
        nibirota:nibirota,
        potito:potito,
        cholti:cholti,
        year:year,
        upazilla_id:user_id,
        dd_id:dd_id
    })
    
    
        
        .then(data => {
            res.redirect('/upazilla/abadiJomi');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.abadiJomiEdit=async(req,res)=>{
    res.render('upazilla/abadiJomi/abadiJomiForm', { title: 'আবাদী জমি ও ফসল উৎপাদন',msg:'' ,success:'',user_id: req.session.user_id});
};

module.exports.abadiJomiDelete=async(req,res)=>{
    var name= req.body.name;
    var areaShotero= req.body.areaShotero;
    var productionShotero= req.body.productionShotero;
    var areaAtharo= req.body.areaAtharo;
    var productionAtharo= req.body.productionAtharo;
    var areaUnish= req.body.areaUnish;
    var productionUnish= req.body.productionUnish;
    var areaBish= req.body.areaBish;
    var productionBish= req.body.productionBish;
    var areaEkush= req.body.areaEkush;
    var productionEkush= req.body.productionEkush;
    var areaBaish= req.body.areaBaish;
    var productionBaish= req.body.productionBaish;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await abadiJomi.create({
        name: name,
        areaShotero:areaShotero,
        productionShotero:productionShotero,
        areaAtharo:areaAtharo,
        productionAtharo:productionAtharo,
        areaUnish:areaUnish,
        productionUnish:productionUnish,
        areaBish:areaBish,
        productionBish:productionBish,
        areaEkush:areaEkush,
        productionEkush:productionEkush,
        areaBaish:areaBaish,
        productionBaish:productionBaish,
        year:year,
        upazilla_id:user_id
    })
    
    
        
        .then(data => {
            res.redirect('/upazilla/abadiJomi');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
//abadiJomi controller end


////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
///////////////////////////////////////////
///////////////////Monitoring?????????????????????/////////
///////////////////////////////////////////////////////////////

//dashboard controller
module.exports.dashboardMonitoring = async(req,res) => {
    console.log("dashboardMonitoring",res.locals.type);
    res.render('upazilla/monitoring/dashboardMonitoring', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'Welcome' });
};
//dashboard controller

//demonstration controller
module.exports.demonstration=async(req,res)=>{
    await demonstration.findAll({
        where: {upazilla: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/monitoring/demonstration/demonstration', { title: 'প্রদর্শনীর তথ্য ',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/monitoring/demonstration/demonstration', { title: 'প্রদর্শনীর তথ্য ',success:'', records: err });
    })
     
    //  records:result

};
module.exports.demonstrationYear=async(req,res)=>{
    await demonstration.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("data", data,req.body.year,req.session.user_id)
        res.render('upazilla/monitoring/demonstration/demonstrationTable', {records: data} ,function(err, html) {
         res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/monitoring/demonstration/demonstrationYear', { title: 'প্রদর্শনীর তথ্য ',success:'', records: err });
    })

};
module.exports.demonstrationForm=async(req,res)=>{
    res.render('upazilla/monitoring/demonstration/demonstrationForm', { title: 'প্রদর্শনীর তথ্য ',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.demonstrationFormPost=async(req,res)=>{
    const path = req.file ;
        console.log("path",path);
    if(path){
        let imageArray = [];
    path.map((image) => {
      const imagePathName = "/demonstration/" + image.filename;
      imageArray.push(imagePathName)
    })
    var imagePath = JSON.stringify(imageArray);
    const{batch,description,date,year,user_id} = req.body
    var name = `প্রদর্শনী - ${req.body.batch}`;
    console.log("sdgd",name,batch,description,date,imagePath,user_id)
        await demonstration.create({
                name: name,
                batch:batch,
                description:description,
                date:date,
                year:year,
                image: imagePath,
                upazilla_id:user_id
            })
            .then(data => {
            res.redirect('/upazilla/demonstration');
            }).catch(err => {
            console.log("file not uploaded successfully unfortunately");
            });
        }
        else{
        
            console.log("file not uploaded successfully");
        };
    
  
};
module.exports.demonstrationCardOpen = async (req, res) => {
    const ddata=await demonstration.findByPk(req.params.id)
    var batchNum = ddata.batch;
    var year=ddata.year;
    await demonstration
      .findOne({
        where: { upazilla_id: req.session.user_id, batch:batchNum, year:year },
      })
      .then((data) => {
        res.render("upazilla/monitoring/demonstration/demonstrationGallery", {
          title: "মাঠ দিবস",
          success: "",
          records: data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  module.exports.demonstrationFormEdit=async(req,res)=>{
    await demonstration.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/monitoring/demonstration/demonstrationEdit', { title: 'প্রদর্শনীর অগ্রগতির প্রতিবেদন',msg:'' ,success:'',records:data,user_id: req.session.user_id});
    })
    .catch(err => {
        console.log("err");
    })
};
module.exports.demonstrationFormUpdatePost = async (req, res) => {
    const updateddemonstration = await demonstration.findByPk(req.params.id)
    const path = req.files ;
    if (path) {
      let imagePath = JSON.parse(updateddemonstration.image);
  
      path.map((image) => {
        imagePath.push ( `/upload/demonstration/${image.filename}` );
      })
  
      const {batch,description,date,year,user_id} = req.body;
      const name = `মাঠ দিবস - ${req.body.batch}`;
        try{
          await demonstration
          .update({
              name: name,
              batch:batch,
              description: description,
              date: date,
              year: year,
              image: JSON.stringify(imagePath),
              upazilla_id: user_id
          },
          { 
            where: {id : req.params.id},
          });
  
          res.redirect("/upazilla/demonstration");
        } catch(err) {
          console.log(err);
        }
    } else {
      const {batch,description,date,year,upazillaId} = req.body;
      const name = `মাঠ দিবস - ${req.body.batch}`;
      try{
        await demonstration
            .update({
                  name: name,
                  batch:batch,
                  description: description,
                  date: date,
                  year: year,
                  upazillaId: upazillaId,
                },
                {
                  where: {id : req.params.id},
                });
  
        res.redirect("/upazilla/demonstration");
      } catch(err) {
        console.log("activity is not updated", err);
      }
    }
  
  };
  module.exports.demonstrationCardDelete = async (req, res) => {
    try{
      const deleteData = await demonstration.findByPk(req.params.id);
      deleteData.destroy();
      res.redirect("/upazilla/demonstration");
    } catch(err){
      console.log(err);
    }
  };
  module.exports.demonstrationImageDelete = async (req,res) => {
    try{
      const data = await demonstration.findByPk(req.params.demonstrationId);
      let images = JSON.parse(data.image);
      fs.unlink("public/"+images[req.params.imageId], function (err) {
        if (err) console.log(err);
        // if no error, file has been deleted successfully
        console.log('File deleted!');
      });
  
      images.splice(req.params.imageId,1)
  
      await demonstration.update(
          {
            image : JSON.stringify(images)
          },
          {
            where: {id : req.params.demonstrationId},
          }
      );
      res.redirect("/upazilla/demonstration");
    } catch(err){
      console.log(err);
    }
  }
//demonstration controller ends

//fieldDay controller
module.exports.fieldDay=async(req,res)=>{
    await fieldDay.findAll({
        where: {upazilla: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/monitoring/fieldDay/fieldDay', { title: 'মাঠ দিবস ',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/monitoring/fieldDay/fieldDay', { title: 'মাঠ দিবস ',success:'', records: err });
    })
     
    //  records:result

};
module.exports.fieldDayYear=async(req,res)=>{
    await fieldDay.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/monitoring/fieldDay/fieldDayTable', {records: data} ,function(err, html) {
         res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/monitoring/fieldDay/fieldDayYear', { title: 'মাঠ দিবস ',success:'', records: err });
    })

};
module.exports.fieldDayForm=async(req,res)=>{
    res.render('upazilla/monitoring/fieldDay/fieldDayForm', { title: 'মাঠ দিবস ',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.fieldDayFormPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/fieldDay/" + req.file.filename;
        var name= req.body.name;
        var description= req.body.description;
        var date= req.body.date;
        var year =req.body.year;
        var user_id =req.body.user_id;
        await fieldDay.create({
                name: name,
                description:description,
                date:date,
                year:year,
                image: imagePath,
                upazilla_id:user_id
            })
            .then(data => {
            res.redirect('/upazilla/fieldDay');
            }).catch(err => {
            console.log("file not uploaded successfully");
            });
        }
        else{
        
            console.log("file not uploaded successfully");
        };
    
  
};
//fieldDay controller ends

//farmerTraining controller
module.exports.farmerTraining=async(req,res)=>{
    await farmerTraining.findAll({
        where: {upazilla: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/monitoring/farmerTraining/farmerTraining', { title: 'কৃষক প্রশিক্ষণ তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/monitoring/farmerTraining/farmerTraining', { title: 'কৃষক প্রশিক্ষণ তথ্য',success:'', records: err });
    })
     
    //  records:result

};
module.exports.farmerTrainingYear=async(req,res)=>{
    await farmerTraining.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/monitoring/farmerTraining/farmerTrainingTable', {records: data} ,function(err, html) {
         res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/monitoring/farmerTraining/farmerTrainingYear', { title: 'কৃষক প্রশিক্ষণ তথ্য',success:'', records: err });
    })

};
module.exports.farmerTrainingForm=async(req,res)=>{
    res.render('upazilla/monitoring/farmerTraining/farmerTrainingForm', { title: 'কৃষক প্রশিক্ষণ',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.farmerTrainingFormPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/farmerTraining/" + req.file.filename;
        var name= req.body.name;
        var description= req.body.description;
        var date= req.body.date;
        var year =req.body.year;
        var user_id =req.body.user_id;
        await farmerTraining.create({
                name: name,
                description:description,
                date:date,
                year:year,
                image: imagePath,
                upazilla_id:user_id
            })
            .then(data => {
            res.redirect('/upazilla/farmerTraining');
            }).catch(err => {
            console.log("file not uploaded successfully");
            });
        }
        else{
        
            console.log("file not uploaded successfully");
        };
    
  
};
//farmerTraining controller ends

//agriFair controller
module.exports.agriFair=async(req,res)=>{
    await agriFair.findAll({
        where: {upazilla: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/monitoring/agriFair/agriFair', { title: 'কৃষি মেলার তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/monitoring/agriFair/agriFair', { title: 'কৃষি মেলার তথ্য',success:'', records: err });
    })
     
    //  records:result

};
module.exports.agriFairYear=async(req,res)=>{
    await agriFair.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/monitoring/agriFair/agriFairTable', {records: data} ,function(err, html) {
         res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/monitoring/agriFair/agriFairYear', { title: 'কৃষি মেলার তথ্য',success:'', records: err });
    })

};
module.exports.agriFairForm=async(req,res)=>{
    res.render('upazilla/monitoring/agriFair/agriFairForm', { title: 'কৃষি মেলার তথ্য',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.agriFairFormPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/agriFair/" + req.file.filename;
        var name= req.body.name;
        var description= req.body.description;
        var date= req.body.date;
        var year =req.body.year;
        var user_id =req.body.user_id;
        await agriFair.create({
                name: name,
                description:description,
                date:date,
                year:year,
                image: imagePath,
                upazilla_id:user_id
            })
            .then(data => {
            res.redirect('/upazilla/agriFair');
            }).catch(err => {
            console.log("file not uploaded successfully");
            });
        }
        else{
        
            console.log("file not uploaded successfully");
        };
    
  
};
module.exports.agriFairFormEdit=async(req,res)=>{
    await agriFair.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/monitoring/agriFair/agriFairEdit', { title: 'কৃষি মেলার তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/monitoring/agriFair/agriFairForm', { title: 'কৃষি মেলার তথ্য',success:'', records: err });
    })
};
module.exports.agriFairFormUpdate=async(req,res)=>{
    const path = req.file && req.file.path;
    var ids= req.params.id;
    if(path){
        var imagePath = "/agriFair/" + req.file.filename;
        var name= req.body.name;
        var description= req.body.description;
        var date= req.body.date;
        var year =req.body.year;
        var user_id =req.body.user_id;
        await agriFair.update(
            
            {   
                name: name,
                description:description,
                date:date,
                year:year,
                image: imagePath,
                upazilla_id:user_id
            },{where:{id:ids}}
            )
            .then(data => {
            res.redirect('/upazilla/agriFair');
            }).catch(err => {
            console.log("file not uploaded successfully");
            });
        }
        else{
            var name= req.body.name;
            var description= req.body.description;
            var date= req.body.date;
            var year =req.body.year;
            var user_id =req.body.user_id;
            console.log("defines",name,description,date,year,user_id,ids);
            await agriFair.update(
                {
                    name: name,
                    description:description,
                    date:date,
                    year:year,
                    upazilla_id:user_id
                },
                {
                    where:{id:ids}
                }
            )
            .then(data => {
                console.log("sedgsdagfvsedgseg",data);
                res.redirect('/upazilla/agriFair');
            }).catch(err => {
                console.log("file not uploaded successfully",err);
            });
        };
    
  
};
//agriFair controller ends

//farmerPrize controller
module.exports.farmerPrize=async(req,res)=>{
    await farmerPrize.findAll({
        where: {upazilla: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/monitoring/farmerPrize/farmerPrize', { title: 'কৃষক পুরষ্কার তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/monitoring/farmerPrize/farmerPrize', { title: 'কৃষক পুরষ্কার তথ্য',success:'', records: err });
    })
     
    //  records:result

};
module.exports.farmerPrizeYear=async(req,res)=>{
    await farmerPrize.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/monitoring/farmerPrize/farmerPrizeTable', {records: data} ,function(err, html) {
         res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/monitoring/farmerPrize/farmerPrizeYear', { title: 'কৃষক পুরষ্কার তথ্য',success:'', records: err });
    })

};
module.exports.farmerPrizeForm=async(req,res)=>{
    res.render('upazilla/monitoring/farmerPrize/farmerPrizeForm', { title: 'কৃষক পুরষ্কার তথ্য',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.farmerPrizeFormPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/farmerPrize/" + req.file.filename;
        var name= req.body.name;
        var description= req.body.description;
        var date= req.body.date;
        var year =req.body.year;
        var user_id =req.body.user_id;
        await farmerPrize.create({
                name: name,
                description:description,
                date:date,
                year:year,
                image: imagePath,
                upazilla_id:user_id
            })
            .then(data => {
            res.redirect('/upazilla/farmerPrize');
            }).catch(err => {
            console.log("file not uploaded successfully");
            });
        }
        else{
        
            console.log("file not uploaded successfully");
        };
    
  
};
//farmerPrize controller ends

//llp controller
module.exports.llp=async(req,res)=>{
    await llp.findAll({
        where: {upazilla: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/monitoring/llp/llp', { title: 'এলএলপি বিতরণ তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/monitoring/llp/llp', { title: 'এলএলপি বিতরণ তথ্য',success:'', records: err });
    })
     
    //  records:result

};
module.exports.llpYear=async(req,res)=>{
    await llp.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/monitoring/llp/llpTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/monitoring/llp/llpYear', { title: 'এলএলপি বিতরণ তথ্য',success:'', records: err });
    })

};
module.exports.llpForm=async(req,res)=>{
    res.render('upazilla/monitoring/llp/llpForm', { title: 'এলএলপি বিতরণ তথ্য',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.llpFormPost=async(req,res)=>{  
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/llp/" + req.file.filename;
        var name= req.body.name;
        var description= req.body.description;
        var date= req.body.date;
        var year =req.body.year;
        var user_id =req.body.user_id;
        await llp.create({
                name: name,
                description:description,
                date:date,
                year:year,
                image: imagePath,
                upazilla_id:user_id
            })
            .then(data => {
            res.redirect('/upazilla/llp');
            }).catch(err => {
            console.log("file not uploaded successfully");
            });
        }
        else{
        
            console.log("file not uploaded successfully");
        };
    
  
};
//llp controller ends

//solarLight controller
module.exports.solarLight=async(req,res)=>{
    await solarLight.findAll({
        where: {upazilla: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/monitoring/solarLight/solarLight', { title: 'সৌর আলো ফাঁদ বিতরণ তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/monitoring/solarLight/solarLight', { title: 'সৌর আলো ফাঁদ বিতরণ তথ্য',success:'', records: err });
    })
     
    //  records:result

};
module.exports.solarLightYear=async(req,res)=>{
    await solarLight.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/monitoring/solarLight/solarLightTable', {records: data} ,function(err, html) {
         res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/monitoring/solarLight/solarLightYear', { title: 'সৌর আলো ফাঁদ বিতরণ তথ্য',success:'', records: err });
    })

};
module.exports.solarLightForm=async(req,res)=>{
    res.render('upazilla/monitoring/solarLight/solarLightForm', { title: 'সৌর আলো ফাঁদ বিতরণ তথ্য',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.solarLightFormPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/solarLight/" + req.file.filename;
        var name= req.body.name;
        var description= req.body.description;
        var date= req.body.date;
        var year =req.body.year;
        var user_id =req.body.user_id;
        await solarLight.create({
                name: name,
                description:description,
                date:date,
                year:year,
                image: imagePath,
                upazilla_id:user_id
            })
            .then(data => {
            res.redirect('/upazilla/solarLight');
            }).catch(err => {
            console.log("file not uploaded successfully");
            });
        }
        else{
        
            console.log("file not uploaded successfully");
        };
    
  
};
//solarLight controller ends

