const db=require('../models');
const pd = db.pd;
const dd = db.dd;
const ad = db.ad;
const upazilla = db.upazilla;
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

const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs'); 

const { request, response } = require('express');
const express = require('express');

module.exports.upazillatable=async(req,res)=>{
    res.json({ message: "hello upazilla" });
};

module.exports.allupazilla=async(req,res)=>{
    res.json({ message: "hello upazilla" });
};


module.exports.adlogin=async(req,res)=>{
    res.render('ad/login', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'' });
    res.send("log");
};

module.exports.adloginpost=async(req,res)=>{
    try {
        const uname = req.body.uname;
        const password = req.body.password;
        ad.findAll({ where: {uname: uname} })
        .then(data => {
            if(data.length > 0){
                bcrypt.compare(password,data[0].password,function(err, result) {
                    if(result== true){
                        req.session.type = "ad";
                        req.session.user_id = data[0].id;
                        const id=req.session.user_id;
                        // res.locals.type = req.session.type;
                        // res.locals.user_id = req.session.user_id;
                        console.log("session=", req.session.type,res.locals);
                        // const token=jwt.sign({id},process.env.JWT_SECRET,token{
                        //     expiresIn:process.env.JWT_EXPIRES_IN
                        // });
                        // console.log("the token is :"+)
                        res.redirect('/ad/dashboard');
                    }
                    else{
                        return res.status(200).render('ad/login', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'Please provide a username and password' });
                    }
                });
            }else{
                return res.status(200).render('ad/login', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'Please provide a username and password' });
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

module.exports.adDashboard = async(req,res) => {
    console.log("addashboard",res.locals.type);
    res.render('ad/dashboard', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'Welcome' });
};
//logIn controller end

//signUp controller
module.exports.adsignup=async(req,res)=>{
    res.render('ad/signup', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'' });
    res.send("log");
};
module.exports.adsignuppost=async(req,res)=>{
    try {
        const{uname,password,confirmPassword}=req.body;

        const data = await ad.findAll({ where: {uname: uname} })
        if(data.length > 0){
            res.render('ad/signup',{title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'ERROR: The ad is already enrolled!'})
        }
        else if(password !== confirmPassword){
            return res.render('ad/signup',{title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'ERROR: Passwords do not match!'})
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log(hashedPassword);
            try{
                const createad = await ad.create({
                    uname: uname,
                    password:hashedPassword,
                    pd_id:1
                    })
                res.render('ad/signup',{title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'ad Registered Successfully!'})
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

//trainedFarmer controller
module.exports.trainedFarmer=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/trainedFarmer/trainedFarmer', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/trainedFarmer/trainedFarmer', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:''});
    }
     
    //  records:result

};

module.exports.trainedFarmerFilter=async(req,res)=>{
    await trainedFarmer.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('dd/trainedFarmer/trainedFarmerTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/trainedFarmer/trainedFarmerYear', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'', records: err });
    })

};

module.exports.trainedFarmerDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/trainedFarmer/trainedFarmer', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'', upazillas:err });
    }
     

};
//trainedFarmer controller end

//initialTrial controller
module.exports.initialTrial=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/initialTrial/initialTrial', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/initialTrial/initialTrial', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',success:''});
    }
     
    //  records:result

};

module.exports.initialTrialFilter=async(req,res)=>{
    await initialTrial.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('ad/initialTrial/initialTrialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/initialTrial/initialTrialYear', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',success:'', records: err });
    })

};
module.exports.initialTrialDistrictFilter=async(req,res)=>{
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/initialTrial/initialTrial', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',success:'', upazillas:err });
    }
     

};
//initialTrial controller end

//finalTrial controller
module.exports.finalTrial=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/finalTrial/finalTrial', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/finalTrial/finalTrial', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:''});
    }
    //  records:result

};

module.exports.finalTrialFilter=async(req,res)=>{
    await finalTrial.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('ad/finalTrial/finalTrialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/finalTrial/finalTrialYear', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:'', records: err });
    })

};
module.exports.finalTrialDistrictFilter=async(req,res)=>{
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/finalTrial/finalTrial', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:'', upazillas:err });
    }
     

};
//finalTrial controller end

//trialProgress controller
module.exports.trialProgress=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/trialProgress/trialProgress', { title: 'প্রদর্শনীর অগ্রগতির প্রতিবেদন',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/trialProgress/trialProgress', { title: 'প্রদর্শনীর অগ্রগতির প্রতিবেদন',success:''});
    }
    //  records:result

};

module.exports.trialProgressFilter=async(req,res)=>{
    await trialProgress.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('ad/trialProgress/trialProgressTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/trialProgress/trialProgressYear', { title: 'প্রদর্শনীর অগ্রগতির প্রতিবেদন',success:'', records: err });
    })

};

module.exports.trialProgressDistrictFilter=async(req,res)=>{
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/trialProgress/trialProgress', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:'', upazillas:err });
    }
     

};
//trialProgress controller end

//cropExpansion controller
module.exports.cropExpansion=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/cropExpansion/cropExpansion', { title: 'প্রকল্প এলাকার ফসল আবাদ অগ্রগতি',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/cropExpansion/cropExpansion', { title: 'প্রকল্প এলাকার ফসল আবাদ অগ্রগতি',success:''});
    }
    //  records:result

};

module.exports.cropExpansionFilter=async(req,res)=>{
    await cropExpansion.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('ad/cropExpansion/cropExpansionTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/cropExpansion/cropExpansionYear', { title: 'প্রকল্প এলাকার ফসল আবাদ অগ্রগতি',success:'', records: err });
    })

};

module.exports.cropExpansionDistrictFilter=async(req,res)=>{
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/cropExpansion/cropExpansion', { title: 'প্রকল্প এলাকার ফসল আবাদ অগ্রগতি',success:'', upazillas:err });
    }
     

};
//cropExpansion controller end

//breedExpansion controller
module.exports.breedExpansion=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/breedExpansion/breedExpansion', { title: 'প্রকল্প এলাকার ফসলের জাত সম্প্রসারণ',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/breedExpansion/breedExpansion', { title: 'প্রকল্প এলাকার ফসলের জাত সম্প্রসারণ',success:''});
    }
    //  records:result

};

module.exports.breedExpansionFilter=async(req,res)=>{
    await breedExpansion.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('ad/breedExpansion/breedExpansionTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/breedExpansion/breedExpansionYear', { title: 'প্রকল্প এলাকার ফসলের জাত সম্প্রসারণ',success:'', records: err });
    })

};

module.exports.breedExpansionDistrictFilter=async(req,res)=>{
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/breedExpansion/breedExpansion', { title: 'প্রকল্প এলাকার ফসল জাত সম্প্রসারণ',success:'', upazillas:err });
    }
     

};
//breedExpansion controller end

//technologyExpansion controller
module.exports.technologyExpansion=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/technologyExpansion/technologyExpansion', { title: 'প্রকল্প এলাকার প্রযুক্তি সম্প্রসারণ',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/technologyExpansion/technologyExpansion', { title: 'প্রকল্প এলাকার প্রযুক্তি সম্প্রসারণ',success:''});
    }
    //  records:result

};

module.exports.technologyExpansionFilter=async(req,res)=>{
    await technologyExpansion.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('ad/technologyExpansion/technologyExpansionTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/technologyExpansion/technologyExpansionYear', { title: 'প্রকল্প এলাকার প্রযুক্তি সম্প্রসারণ',success:'', records: err });
    })

};

module.exports.technologyExpansionDistrictFilter=async(req,res)=>{
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/technologyExpansion/technologyExpansion', { title: 'প্রকল্প এলাকার প্রযুক্তি সম্প্রসারণ',success:'', upazillas:err });
    }
     

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
        
        res.render('ad/abadiJomi/abadiJomi', { title: 'আবাদী জমি ও ফসল উৎপাদন',success:'', seventeen: seventeen,eighteen: eighteen,nineteen: nineteen,twenty: twenty,twentyOne: twentyOne,twentyTwo: twentyTwo });
        // var men=seventeen.purush;
        // console.log("seventeen,",req.typeof(men));
    }
    catch(err){
        res.render('ad/abadiJomi/abadiJomi', { title: 'আবাদী জমি ও ফসল উৎপাদন',success:'', records: err });
    }
   

     
    //  records:result

};

module.exports.abadiJomiFilter=async(req,res)=>{
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
        res.render('ad/abadiJomi', {seventeen: seventeen,eighteen: eighteen,seventeen: seventeen,nineteen: nineteen,twenty: twenty,twentyOne: twentyOne,twentyTwo: twentyTwo} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/abadiJomi/abadiJomiYear', { title: 'আবাদী জমি ও ফসল উৎপাদন',success:'', records: err });
    })

};

module.exports.abadiJomiDistrictFilter=async(req,res)=>{
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/abadiJomi/abadiJomi', { title: 'আবাদী জমি ও ফসল উৎপাদন',success:'', upazillas:err });
    }
     

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
    res.render('ad/monitoring/dashboardMonitoring', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'Welcome' });
};
//dashboard controller

//demonstration controller
module.exports.demonstration=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/monitoring/demonstration/demonstration', { title: 'প্রদর্শনীর তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/demonstration/demonstration', { title: 'প্রদর্শনীর তথ্য',success:''});
    }
     
    //  records:result

};
module.exports.demonstrationFilter=async(req,res)=>{
    await demonstration.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('ad/monitoring/demonstration/demonstrationTable', {records: data} ,function(err, html) {
         res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/monitoring/demonstration/demonstrationYear', { title: 'প্রদর্শনীর তথ্য ',success:'', records: err });
    })

};
module.exports.demonstrationDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/demonstration/demonstration', { title: 'প্রদর্শনীর তথ্য',success:'', upazillas:err });
    }
     

};
//demonstration controller ends

//fieldDay controller
module.exports.fieldDay=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/monitoring/fieldDay/fieldDay', { title: 'মাঠ দিবস',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/fieldDay/fieldDay', { title: 'মাঠ দিবস',success:''});
    }
     
    //  records:result

};
module.exports.fieldDayFilter=async(req,res)=>{
    await fieldDay.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('ad/monitoring/fieldDay/fieldDayTable', {records: data} ,function(err, html) {
         res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/monitoring/fieldDay/fieldDayYear', { title: 'মাঠ দিবস ',success:'', records: err });
    })

};
module.exports.fieldDayDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/fieldDay/fieldDay', { title: 'মাঠ দিবস',success:'', upazillas:err });
    }
     

};
//fieldDay controller ends

//farmerTraining controller
module.exports.farmerTraining=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/monitoring/farmerTraining/farmerTraining', { title: 'কৃষক প্রশিক্ষণ তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/farmerTraining/farmerTraining', { title: 'কৃষক প্রশিক্ষণ তথ্য',success:''});
    }
     
    //  records:result

};
module.exports.farmerTrainingFilter=async(req,res)=>{
    await farmerTraining.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('ad/monitoring/farmerTraining/farmerTrainingTable', {records: data} ,function(err, html) {
         res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/monitoring/farmerTraining/farmerTrainingYear', { title: 'কৃষক প্রশিক্ষণ তথ্য',success:'', records: err });
    })

};
module.exports.farmerTrainingDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/demonstration/demonstration', { title: 'কৃষক প্রশিক্ষণ তথ্য',success:'', upazillas:err });
    }
     

};
//farmerTraining controller ends

//agriFair controller
module.exports.agriFair=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/monitoring/agriFair/agriFair', { title: 'কৃষি মেলার তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/agriFair/agriFair', { title: 'কৃষি মেলার তথ্য',success:''});
    }
     
    //  records:result

};
module.exports.agriFairFilter=async(req,res)=>{
    await agriFair.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('ad/monitoring/agriFair/agriFairTable', {records: data} ,function(err, html) {
         res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/monitoring/agriFair/agriFairYear', { title: 'কৃষি মেলার তথ্য',success:'', records: err });
    })

};
module.exports.agriFairDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/agriFair/agriFair', { title: 'কৃষি মেলার তথ্য',success:'', upazillas:err });
    }
     

};
//agriFair controller ends

//farmerPrize controller
module.exports.farmerPrize=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/monitoring/farmerPrize/farmerPrize', { title: 'কৃষক পুরষ্কার তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/farmerPrize/farmerPrize', { title: 'কৃষক পুরষ্কার তথ্য',success:''});
    }
     
     
    //  records:result

};
module.exports.farmerPrizeFilter=async(req,res)=>{
    await farmerPrize.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('ad/monitoring/farmerPrize/farmerPrizeTable', {records: data} ,function(err, html) {
         res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/monitoring/farmerPrize/farmerPrizeYear', { title: 'কৃষক পুরষ্কার তথ্য',success:'', records: err });
    })

};
module.exports.farmerPrizeDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/farmerPrize/farmerPrize', { title: 'কৃষক পুরষ্কার তথ্য',success:'', upazillas:err });
    }
     

};
//farmerPrize controller ends

//llp controller
module.exports.llp=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/monitoring/llp/llp', { title: 'এলএলপি বিতরণ তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/llp/llp', { title: 'এলএলপি বিতরণ তথ্য',success:''});
    }
     
     
    //  records:result

};
module.exports.llpFilter=async(req,res)=>{
    await llp.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('ad/monitoring/llp/llpTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/monitoring/llp/llpYear', { title: 'এলএলপি বিতরণ তথ্য',success:'', records: err });
    })

};
module.exports.llpDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/llp/llp', { title: 'এলএলপি বিতরণ তথ্য',success:'', upazillas:err });
    }
     

};
//llp controller ends

//solarLight controller
module.exports.solarLight=async(req,res)=>{
    try{
        var districts=await dd.findAll({where: {ad_id: req.session.user_id}});
        console.log("inside");
        res.render('ad/monitoring/solarLight/solarLight', { title: 'সৌর আলো ফাঁদ বিতরণ তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/solarLight/solarLight', { title: 'সৌর আলো ফাঁদ বিতরণ তথ্য',success:''});
    }
     
     
    //  records:result

};
module.exports.solarLightFilter=async(req,res)=>{
    await solarLight.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('ad/monitoring/solarLight/solarLightTable', {records: data} ,function(err, html) {
         res.send(html);
        });
    })
    .catch(err => {
        res.render('ad/monitoring/solarLight/solarLightYear', { title: 'সৌর আলো ফাঁদ বিতরণ তথ্য',success:'', records: err });
    })

};
module.exports.solarLightDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('ad/monitoring/solarLight/solarLight', { title: 'সৌর আলো ফাঁদ বিতরণ তথ্য',success:'', upazillas:err });
    }
     

};
//solarLight controller ends


