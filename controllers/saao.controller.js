const db=require('../models');
const pd = db.pd;
const dd = db.dd;
const ad = db.ad;       
const upazilla = db.upazilla;
const saao = db.saao;
const selectedField = db.selectedField;
const cropNibirota = db.cropNibirota;
const producedCrop = db.producedCrop;

const multer = require("multer");
const path = require("path");

const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs'); 

const { request, response } = require('express');
const express = require('express');


module.exports.saaologin=async(req,res)=>{
    res.render('saao/login', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'' });
    res.send("log");
};
module.exports.saaologinpost=async(req,res)=>{
    try {
        const uname = req.body.uname;
        const password = req.body.password;
        saao.findAll({ where: {uname: uname} })
        .then(data => {
            if(data.length > 0){
                bcrypt.compare(password,data[0].password,function(err, result) {
                    if(result== true){
                        req.session.type = "saao";
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
                        res.redirect('/saao/dashboard');
                    }
                    else{
                        return res.status(200).render('saao/login', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'Please provide a username and password' });
                    }
                });
            }else{
                return res.status(200).render('saao/login', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'Please provide a username and password' });
            }
        })
        .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving tutorials."
              });
            });

        
    }
    catch(error){
        console.log(error);
    } 
};
module.exports.saaoDashboard = async(req,res) => {
    try{
    saaos=await saao.findAll({where: {id:req.session.user_id}})
    res.render('saao/dashboard', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',saao:saaos,msg:'Welcome' });
    }
    catch{
        console.log(err);
    }
};
//logIn controller end

//signUp controller
module.exports.saaosignup=async(req,res)=>{
    await dd.findAll()
    .then(data => {
        console.log("inside");
        res.render('saao/signup', { title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'',records: data });
    })
    .catch(err => {
        console.log(err);
    })
};
module.exports.saaosignuppost=async(req,res)=>{
    try {          
        const{district,upazilla,saaos,uname,password,confirmPassword}=req.body;
        const ddata=await dd.findAll();
        const data = await saao.findAll({ where: {uname: uname} });
        
        if(data.length > 0){
            res.render('saao/signup',{title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'ERROR: The saao is already enrolled!',records: ddata})
        }
        else if(password !== confirmPassword){
           res.render('saao/signup',{title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'ERROR: Passwords do not match!',records: ddata})
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log(hashedPassword);
            try{
                const createsaao = await saao.create({
                    saao:saaos,
                    uname: uname,
                    password:hashedPassword,
                    upazilla_id:upazilla,
                    dd_id:district,
                    pd_id:1
                    })
                res.render('saao/signup',{title: 'বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ',msg:'saao Registered Successfully!',records: ddata})
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
module.exports.districtFilter=async(req,res)=>{
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside",upazillass);
        res.send(upazillass)
};
//signUp controller end

//selectedField controller
module.exports.selectedField=async(req,res)=>{
    await selectedField.findAll({
        where: {saao_id: req.session.user_id}        
    })
    .then(data => {
        console.log("inside");
        res.render('saao/selectedField/selectedField', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log(err);
    })
     
    //  records:result

};
module.exports.selectedFieldYear=async(req,res)=>{
    await selectedField.findAll({
        where: {year: req.body.year,saao_id: req.session.user_id}
    })
    .then(data => {
        res.render('saao/selectedField/selectedFieldTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log(err);
    })

};
module.exports.selectedFieldForm=async(req,res)=>{
    res.render('saao/selectedField/selectedFieldForm', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.selectedFieldFormPost=async(req,res)=>{
    var name= req.body.name;
    var fname= req.body.fname;
    var mobile= req.body.mobile;
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

    await selectedField.create({
        name: name,
        fname:fname,
        mobile:mobile,
        nid:nid,
        mnum:mnum,
        ptype:ptype,
        pname:pname,
        date:date,
        block:block,
        saooname:saooname,
        pnum:pnum,
        year:year,
        saao_id:user_id
    })
        
        .then(data => {
            res.redirect('/saao/selectedField');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.selectedFieldEdit=async(req,res)=>{
    await selectedField.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('saao/selectedField/selectedFieldEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',msg:'' ,success:'',records:data,user_id: req.session.user_id});
    })
    .catch(err => {
        console.log("err");
    })
};
module.exports.selectedFieldEditPost=async(req,res)=>{
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

    await selectedField.update({
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
    })
        
        .then(data => {
            res.redirect('/saao/selectedField');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.selectedFieldDelete=async(req,res)=>{
    var selectedFieldDelete = await selectedField.findByPk(req.params.id);
    try {
        selectedFieldDelete.destroy();
        res.redirect("/saao/selectedField");
    }
    catch{
        res.render('errorpage',err);
    }
};                                                                                                                                                                                                                                                                                                                                                 
//selectedField controller end

//producedCrop controller
module.exports.producedCrop=async(req,res)=>{
    await producedCrop.findAll({
        where: {saao_id: req.session.user_id}        
    })
    .then(data => { 
        console.log("inside");
        res.render('saao/producedCrop/producedCrop', { title: 'মাঠে উৎপাদিত ফসলের তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log(err);
    })
     
    //  records:result

};

module.exports.producedCropYear=async(req,res)=>{
await producedCrop.findAll({
        where: {year: req.body.year,saao_id: req.session.user_id}
    })
    .then(data => {
        res.render('saao/producedCrop/producedCropTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log(err);
    })

};
module.exports.producedCropForm=async(req,res)=>{
    res.render('saao/producedCrop/producedCropForm', { title: 'মাঠে উৎপাদিত ফসলের তথ্য',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.producedCropFormPost=async(req,res)=>{
    var crop= req.body.crop;
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

    await producedCrop.create({
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
        saao_id:user_id
    })
        
        .then(data => {
            res.redirect('/saao/producedCrop');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.producedCropEdit=async(req,res)=>{
    await producedCrop.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('saao/producedCrop/producedCropEdit', { title: 'মাঠে উৎপাদিত ফসলের তথ্য',msg:'' ,success:'',records:data,user_id: req.session.user_id});
    })
    .catch(err => {
        console.log("err");
    })
};
module.exports.producedCropEditPost=async(req,res)=>{
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

    await producedCrop.update({
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
    })
        
        .then(data => {
            res.redirect('/saao/producedCrop');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.producedCropDelete=async(req,res)=>{
    var producedCropDelete = await producedCrop.findByPk(req.params.id);
    try {
        producedCropDelete.destroy();
        res.redirect("/saao/producedCrop");
    }
    catch{
        res.render('errorpage',err);
    }
};
//producedCrop controller end

//cropNibirota controller
module.exports.cropNibirota=async(req,res)=>{
    await cropNibirota.findAll({
        where: {saao_id: req.session.user_id}        
    })
    .then(data => {
        console.log("inside");
        res.render('saao/cropNibirota/cropNibirota', { title: 'শস্য নিবিড়তার অগ্রগতি',success:'', records: data });
    })
    .catch(err => {
        console.log(err);
    })
     
    //  records:result

};
module.exports.cropNibirotaYear=async(req,res)=>{
    await cropNibirota.findAll({
        where: {year: req.body.year,saao_id: req.session.user_id}
    })
    .then(data => {
        res.render('saao/cropNibirota/cropNibirotaTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log(err);
    })

};
module.exports.cropNibirotaForm=async(req,res)=>{
    res.render('saao/cropNibirota/cropNibirotaForm', { title: 'শস্য নিবিড়তার অগ্রগতি',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.cropNibirotaFormPost=async(req,res)=>{
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

    await cropNibirota.create({
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
        saao_id:user_id
    })
        
        .then(data => {
            res.redirect('/saao/cropNibirota');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.cropNibirotaEdit=async(req,res)=>{
    await cropNibirota.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('saao/cropNibirota/cropNibirotaEdit', { title: 'শস্য নিবিড়তার অগ্রগতি',msg:'' ,success:'',records:data,user_id: req.session.user_id});
    })
    .catch(err => {
        console.log("err");
    })
};
module.exports.cropNibirotaEditPost=async(req,res)=>{
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

    await cropNibirota.update({
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
    })
        
        .then(data => {
            res.redirect('/saao/cropNibirota');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.cropNibirotaDelete=async(req,res)=>{
    var cropNibirotaDelete = await cropNibirota.findByPk(req.params.id);
    try {
        cropNibirotaDelete.destroy();
        res.redirect("/saao/cropNibirota");
    }
    catch{
        res.render('errorpage',err);
    }
};
//cropNibirota controller end


