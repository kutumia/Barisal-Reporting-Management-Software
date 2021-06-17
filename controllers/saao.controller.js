const db = require("../models");
const pd = db.pd;
const dd = db.dd;
const ad = db.ad;
const upazilla = db.upazilla;
const saao = db.saao;
const selectedField = db.selectedField;
const cropNibirota = db.cropNibirota;
const producedCrop = db.producedCrop;
const cropList = db.cropList;
const multer = require("multer");
const path = require("path");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { request, response } = require("express");
const express = require("express");

module.exports.saaologin = async (req, res) => {
  res.render("saao/login", {
    title:
      "বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ",
    msg: "",
  });
  res.send("log");
};
module.exports.saaologinpost = async (req, res) => {
  try {
    const uname = req.body.uname;
    const password = req.body.password;
    saao
      .findAll({ where: { uname: uname } })
      .then((data) => {
        if (data.length > 0) {
          bcrypt.compare(password, data[0].password, function (err, result) {
            if (result == true) {
              req.session.type = "saao";
              req.session.user_id = data[0].id;
              req.session.uname = data[0].uname;
              const id = req.session.user_id;
              // res.locals.type = req.session.type;
              // res.locals.user_id = req.session.user_id;
              // const token=jwt.sign({id},process.env.JWT_SECRET,token{
              //     expiresIn:process.env.JWT_EXPIRES_IN
              // });
              // console.log("the token is :"+)
              res.redirect("/saao/dashboard");
            } else {
              return res.status(200).render("saao/login", {
                title:
                  "বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ",
                msg: "Please provide a username and password",
              });
            }
          });
        } else {
          return res.status(200).render("saao/login", {
            title:
              "বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ",
            msg: "Please provide a username and password",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.saaoDashboard = async (req, res) => {
  try {
    saaos = await saao.findOne({ where: { id: req.session.user_id } });
    dds = await dd.findOne({ where: { id: saaos.dd_id } });
    upazillas = await upazilla.findOne({ where: { id: saaos.upazilla_id } });
    res.render("saao/dashboard", {
      title:
        "বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ",
      saao: saaos,
      msg: "Welcome",
      records: saaos,
      dds: dds,
      upazillas: upazillas,
    });
  } catch {
    console.log(err);
  }
};
module.exports.saaoEdit = async (req, res) => {
  await saao
    .findByPk(req.params.id)
    .then((data) => {
      res.render("saao/saaoEdit", {
        title: "প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য",
        msg: "",
        success: "",
        records: data,
        user_id: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log("err");
    });
};
module.exports.saaoEditPost = async (req, res) => {
  var village = req.body.village;
  var field = req.body.field;
  var block = req.body.block;
  var saaos = req.body.saao;
  var mobile = req.body.mobile;
  var date = req.body.date;
  var pname = req.body.pname;
  var date = req.body.date;
  var uname = req.body.uname;
  var user_id = req.body.user_id;

  await saao
    .update(
      {
        village: village,
        field: field,
        block: block,
        saao: saaos,
        mobile: mobile,
        date: date,
        pname: pname,
        date: date,
        uname: uname,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/saao/dashboard");
    })
    .catch((err) => {
      res.render("errorpage", err);
    });
};
module.exports.saaoPassword = async (req, res) => {
  await saao
    .findByPk(req.params.id)
    .then((data) => {
      res.render("saao/saaoPassword", {
        title: "পাসওয়ার্ড",
        msg: "",
        success: "",
        records: data,
        user_id: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log("err");
    });
};
module.exports.saaoPasswordEditPost = async (req, res) => {
  var password = req.body.password;
  var user_id = req.body.user_id;
  const hashedPassword = await bcrypt.hash(password, 10);
  await saao
    .update(
      {
        password: hashedPassword,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/saao/dashboard");
    })
    .catch((err) => {
      res.render("errorpage", err);
    });
};
//logIn controller end

//signUp controller
module.exports.saaosignup = async (req, res) => {
  await dd
    .findAll()
    .then((data) => {
      res.render("saao/signup", {
        title:
          "বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ",
        msg: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.saaosignuppost = async (req, res) => {
  try {
    const { district, upazilla, saaos, uname, password, confirmPassword } =
      req.body;
    const ddata = await dd.findAll();
    const data = await saao.findAll({ where: { uname: uname } });

    if (data.length > 0) {
      res.render("saao/signup", {
        title:
          "বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ",
        msg: "ERROR: The saao is already enrolled!",
        records: ddata,
      });
    } else if (password !== confirmPassword) {
      res.render("saao/signup", {
        title:
          "বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ",
        msg: "ERROR: Passwords do not match!",
        records: ddata,
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      try {
        const createsaao = await saao.create({
          saao: saaos,
          uname: uname,
          password: hashedPassword,
          upazilla_id: upazilla,
          dd_id: district,
          pd_id: 1,
        });
        res.render("saao/signup", {
          title:
            "বরিশাল, পটুয়াখালী, ভোলা, ঝালকাঠী, বরগুনা, মাদারীপুর ও শরিয়তপুর কৃষি উন্নয়ন প্রকল্প ",
          msg: "saao Registered Successfully!",
          records: ddata,
        });
      } catch (err) {
        console.log(err);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports.districtFilter = async (req, res) => {
  var upazillass = await upazilla.findAll({
    where: { dd_id: req.body.district },
  });
  res.send(upazillass);
};
//signUp controller end

//selectedField controller
module.exports.selectedField = async (req, res) => {
  await selectedField
    .findAll({
      where: { saao_id: req.session.user_id },
    })
    .then((data) => {
      console.log("data", data);
      res.render("saao/selectedField/selectedField", {
        title: "নির্বাচিত মাঠের কৃষকের তথ্য",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });

  //  records:result
};
module.exports.selectedFieldYear = async (req, res) => {
  await selectedField
    .findAll({
      where: { year: req.body.year, saao_id: req.session.user_id },
    })
    .then((data) => {
      console.log("data", data);
      res.render(
        "saao/selectedField/selectedFieldTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.selectedFieldForm = async (req, res) => {
  await selectedField
    .findAll({
      where: { saao_id: req.session.user_id },
    })
    .then((data) => {
      console.log("data", data);
      res.render("saao/selectedField/selectedFieldForm", {
        title: "নির্বাচিত মাঠের কৃষকের তথ্য ",
        msg: "",
        success: "",
        upazilla_id: data.upazilla_id,
        user_id: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.selectedFieldFormPost = async (req, res) => {
  var name = req.body.name;
  var fname = req.body.fname;
  var mobile = req.body.mobile;
  var total = req.body.total;
  var robi1 = req.body.robi1;
  var robi2 = req.body.robi2;
  var robi3 = req.body.robi3;
  var robi4 = req.body.robi4;
  var robi5 = req.body.robi5;
  var robi6 = req.body.robi6;
  var kharif1_1 = req.body.kharif1_1;
  var kharif1_2 = req.body.kharif1_2;
  var kharif1_3 = req.body.kharif1_3;
  var kharif2_1 = req.body.kharif2_1;
  var kharif2_2 = req.body.kharif2_2;
  var kharif2_3 = req.body.kharif2_3;
  var irrigation = req.body.irrigation;
  var groups = req.body.groups;
  var year = req.body.year;
  var user_id = req.body.user_id;
  var upazilla_id = req.body.upazilla_id;

  console.log({
    name: name,
    fname: fname,
    mobile: mobile,
    total: total,
    robi1: robi1,
    robi2: robi2,
    robi3: robi3,
    robi4: robi4,
    robi5: robi5,
    robi6: robi6,
    kharif1_1: kharif1_1,
    kharif1_2: kharif1_2,
    kharif1_3: kharif1_3,
    kharif2_1: kharif2_1,
    kharif2_2: kharif2_2,
    kharif2_3: kharif2_3,
    irrigation: irrigation,
    groups: groups,
    year: year,
    upazilla_id: upazilla_id,
    saao_id: user_id,
  });
  await selectedField
    .create({
      name: name,
      fname: fname,
      mobile: mobile,
      total: total,
      robi1: robi1,
      robi2: robi2,
      robi3: robi3,
      robi4: robi4,
      robi5: robi5,
      robi6: robi6,
      kharif1_1: kharif1_1,
      kharif1_2: kharif1_2,
      kharif1_3: kharif1_3,
      kharif2_1: kharif2_1,
      kharif2_2: kharif2_2,
      kharif2_3: kharif2_3,
      irrigation: irrigation,
      groups: groups,
      year: year,
      upazilla_id: upazilla_id,
      saao_id: user_id,
    })
    .then((data) => {
      res.redirect("/saao/selectedField");
    })
    .catch((err) => {
      console.log(err);
      res.render("errorpage", err);
    });
};
module.exports.selectedFieldEdit = async (req, res) => {
  await selectedField
    .findByPk(req.params.id)
    .then((data) => {
      res.render("saao/selectedField/selectedFieldEdit", {
        title: "প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য",
        msg: "",
        success: "",
        records: data,
        user_id: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log("err");
    });
};
module.exports.selectedFieldEditPost = async (req, res) => {
  var name = req.body.name;
  var fname = req.body.fname;
  var mobile = req.body.mobile;
  var total = req.body.total;
  var robi1 = req.body.robi1;
  var robi2 = req.body.robi2;
  var robi3 = req.body.robi3;
  var robi4 = req.body.robi4;
  var robi5 = req.body.robi5;
  var robi6 = req.body.robi6;
  var kharif1_1 = req.body.kharif1_1;
  var kharif1_2 = req.body.kharif1_2;
  var kharif1_3 = req.body.kharif1_3;
  var kharif2_1 = req.body.kharif2_1;
  var kharif2_2 = req.body.kharif2_2;
  var kharif2_3 = req.body.kharif2_3;
  var irrigation = req.body.irrigation;
  var groups = req.body.groups;
  var user_id = req.body.user_id;

  await selectedField
    .update(
      {
        name: name,
        fname: fname,
        mobile: mobile,
        total: total,
        robi1: robi1,
        robi2: robi2,
        robi3: robi3,
        robi4: robi4,
        robi5: robi5,
        robi6: robi6,
        kharif1_1: kharif1_1,
        kharif1_2: kharif1_2,
        kharif1_3: kharif1_3,
        kharif2_1: kharif2_1,
        kharif2_2: kharif2_2,
        kharif2_3: kharif2_3,
        irrigation: irrigation,
        groups: groups,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/saao/selectedField");
    })
    .catch((err) => {
      res.render("errorpage", err);
    });
};
module.exports.selectedFieldDelete = async (req, res) => {
  var selectedFieldDelete = await selectedField.findByPk(req.params.id);
  try {
    selectedFieldDelete.destroy();
    res.redirect("/saao/selectedField");
  } catch {
    res.render("errorpage", err);
  }
};
//selectedField controller end

//producedCrop controller
module.exports.producedCrop = async (req, res) => {
  try {
    var seventeen = await producedCrop.findAll({
      where: { year: "2017", saao_id: req.session.user_id },
    });
    var eighteen = await producedCrop.findAll({
      where: { year: "2018", saao_id: req.session.user_id },
    });
    var nineteen = await producedCrop.findAll({
      where: { year: "2019", saao_id: req.session.user_id },
    });
    var twenty = await producedCrop.findAll({
      where: { year: "2020", saao_id: req.session.user_id },
    });
    var twentyOne = await producedCrop.findAll({
      where: { year: "2021", saao_id: req.session.user_id },
    });
    var twentyTwo = await producedCrop.findAll({
      where: { year: "2022", saao_id: req.session.user_id },
    });
    var cropLists = await cropList.findAll({ where: { type: "crop" } });
    res.render("saao/producedCrop/producedCrop", {
      title: "মাঠে উৎপাদিত ফসলের তথ্য",
      success: "",
      cropList: cropLists,
      seventeen: seventeen,
      eighteen: eighteen,
      nineteen: nineteen,
      twenty: twenty,
      twentyOne: twentyOne,
      twentyTwo: twentyTwo,
    });
    // var men=seventeen.purush;
    // console.log("seventeen,",req.typeof(men));
  } catch (err) {
    console.log(err);
  }
};

module.exports.producedCropYear = async (req, res) => {
  await producedCrop
    .findAll({
      where: { year: req.body.year, saao_id: req.session.user_id },
    })
    .then((data) => {
      res.render(
        "saao/producedCrop/producedCropTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.producedCropForm = async (req, res) => {
  var saaos = await await saao.findOne({
    where: { id: req.session.user_id },
  });
  var data = await cropList.findAll({ where: { type: "crop" } });
  try {
    res.render("saao/producedCrop/producedCropForm", {
      title: "মাঠে উৎপাদিত ফসলের তথ্য ফর্ম",
      msg: "",
      success: "",
      upazilla_id: saaos.upazilla_id,
      user_id: req.session.user_id,
      data: data,
    });
  } catch {
    console.log(err);
  }
};
module.exports.producedCropFormPost = async (req, res) => {
  var name = req.body.name;
  var k21 = req.body.k21;
  var k22 = req.body.k22;
  var r1 = req.body.r1;
  var r2 = req.body.r2;
  var k11 = req.body.k11;
  var k12 = req.body.k12;
  var production = req.body.production;
  var year = req.body.year;
  var user_id = req.body.user_id;
  var upazilla_id = req.body.upazilla_id;

  await producedCrop
    .create({
      crop: name,
      k21: k21,
      k22: k22,
      r1: r1,
      r2: r2,
      k11: k11,
      k12: k12,
      production: production,

      year: year,
      upazilla_id: upazilla_id,
      saao_id: user_id,
    })
    .then((data) => {
      res.redirect(`/saao/producedCropToNibirota/${year}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.producedCropToNibirota = async (req, res) => {
  var producedCrops = await producedCrop.findAll({
    where: { saao_id: req.session.user_id, year: req.params.year },
  });
  var cropNibirotas = await cropNibirota.findOne({
    where: { saao_id: req.session.user_id, year: req.params.year },
  });
  console.log("inside", cropNibirotas);
  if (cropNibirotas == null) {
    var saaos = await await saao.findOne({
      where: { id: req.session.user_id },
    });
    var year = req.params.year;
    var sumk21 = 0;
    var sumk22 = 0;
    var sumr1 = 0;
    var sumr2 = 0;
    var sumk11 = 0;
    var sumk12 = 0;
    var sumTotal = 0;
    producedCrops.forEach(function (row) {
      sumk21 = sumk21 + row.k21;
      sumk22 = sumk22 + row.k22;
      sumr1 = sumr1 + row.r1;
      sumr2 = sumr2 + row.r2;
      sumk11 = sumk11 + row.k11;
      sumk12 = sumk12 + row.k12;
    });
    sumTotal = sumk21 + sumk22 + sumr1 + sumr2 + sumk11 + sumk12;
    var arr = [];
    arr.push(sumk21, sumk22, sumr1, sumr2, sumk11, sumk12);
    for (i = 0; i < arr.length; ++i) {
      for (j = i + 1; j < arr.length; ++j) {
        if (arr[i] < arr[j]) {
          a = arr[i];
          arr[i] = arr[j];
          arr[j] = a;
        }
      }
    }
    number1 = arr[0];
    number2 = arr[1];
    number3 = arr[2];
    number4 = arr[3];
    number5 = arr[4];
    number6 = arr[5];

    var one = number1 - number2;
    var two = number2 - number3;
    var three = number3 - number4;
    var four = number4 - number5;
    var five = number5 - number6;
    var six = number6;

    await cropNibirota.create({
      k21: sumk21,
      k22: sumk22,
      r1: sumr1,
      r2: sumr2,
      k11: sumk11,
      k12: sumk12,
      year: year,
      upazilla_id: saaos.upazilla_id,
      saao_id: req.session.user_id,
    });

    try {
      res.redirect("/saao/producedCrop");
    } catch {
      res.render("errorpage", err);
    }
  } else {
    var saaos = await saao.findOne({
      where: { id: req.session.user_id },
    });
    var year = req.params.year;
    var sumk21 = 0;
    var sumk22 = 0;
    var sumr1 = 0;
    var sumr2 = 0;
    var sumk11 = 0;
    var sumk12 = 0;
    var sumTotal = 0;
    producedCrops.forEach(function (row) {
      sumk21 = sumk21 + row.k21;
      sumk22 = sumk22 + row.k22;
      sumr1 = sumr1 + row.r1;
      sumr2 = sumr2 + row.r2;
      sumk11 = sumk11 + row.k11;
      sumk12 = sumk12 + row.k12;
    });
    sumTotal = sumk21 + sumk22 + sumr1 + sumr2 + sumk11 + sumk12;
    var arr = [];
    arr.push(sumk21, sumk22, sumr1, sumr2, sumk11, sumk12);
    for (i = 0; i < arr.length; ++i) {
      for (j = i + 1; j < arr.length; ++j) {
        if (arr[i] < arr[j]) {
          a = arr[i];
          arr[i] = arr[j];
          arr[j] = a;
        }
      }
    }
    number1 = arr[0];
    number2 = arr[1];
    number3 = arr[2];
    number4 = arr[3];
    number5 = arr[4];
    number6 = arr[5];

    var one = number1 - number2;
    var two = number2 - number3;
    var three = number3 - number4;
    var four = number4 - number5;
    var five = number5 - number6;
    var six = number6;

    await cropNibirota.update(
      {
        k21: sumk21,
        k22: sumk22,
        r1: sumr1,
        r2: sumr2,
        k11: sumk11,
        k12: sumk12,
        year: year,
        upazilla_id: saaos.upazilla_id,
        saao_id: req.session.user_id,
      },
      {
        where: { year: req.params.year, saao_id: req.session.user_id },
      }
    );

    try {
      res.redirect("/saao/producedCrop");
    } catch {
      res.render("errorpage", err);
    }
  }
};
module.exports.producedCropEdit = async (req, res) => {
  await producedCrop
    .findByPk(req.params.id)
    .then((data) => {
      res.render("saao/producedCrop/producedCropEdit", {
        title: "মাঠে উৎপাদিত ফসলের তথ্য",
        msg: "",
        success: "",
        records: data,
        user_id: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log("err");
    });
};
module.exports.producedCropEditPost = async (req, res) => {
  var crop = req.body.crop;
  var areaShotero = req.body.areaShotero;
  var productionShotero = req.body.productionShotero;
  var areaAtharo = req.body.areaAtharo;
  var productionAtharo = req.body.productionAtharo;
  var areaUnish = req.body.areaUnish;
  var productionUnish = req.body.productionUnish;
  var areaBish = req.body.areaBish;
  var productionBish = req.body.productionBish;
  var areaEkush = req.body.areaEkush;
  var productionEkush = req.body.productionEkush;
  var areaBaish = req.body.areaBaish;
  var productionBaish = req.body.productionBaish;
  var user_id = req.body.user_id;

  await producedCrop
    .update(
      {
        crop: crop,
        areaShotero: areaShotero,
        productionShotero: productionShotero,
        areaAtharo: areaAtharo,
        productionAtharo: productionAtharo,
        areaUnish: areaUnish,
        productionUnish: productionUnish,
        areaBish: areaBish,
        productionBish: productionBish,
        areaEkush: areaEkush,
        productionEkush: productionEkush,
        areaBaish: areaBaish,
        productionBaish: productionBaish,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/saao/producedCrop");
    })
    .catch((err) => {
      res.render("errorpage", err);
    });
};
module.exports.producedCropDelete = async (req, res) => {
  var producedCropDelete = await producedCrop.findByPk(req.params.id);
  try {
    producedCropDelete.destroy();
    res.redirect("/saao/producedCrop");
  } catch {
    res.render("errorpage", err);
  }
};
//producedCrop controller end

//seasonProduction controller
module.exports.seasonProduction = async (req, res) => {
  res.render("saao/seasonProduction/seasonProduction", {
    title: "মৌসুমওয়ারী আবাদকৃত ফসলের তথ্য",
    success: "",
  });
};

module.exports.seasonProductionYear = async (req, res) => {
  await producedCrop
    .findAll({
      where: { year: req.body.year, saao_id: req.session.user_id },
    })
    .then((data) => {
      res.render(
        "saao/seasonProduction/seasonProductionTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log("outside");
    });
};

//cropNibirota controller
module.exports.cropNibirota = async (req, res) => {
  try {
    var seventeen = await cropNibirota.findOne({
      where: { year: "2017", saao_id: req.session.user_id },
    });
    var eighteen = await cropNibirota.findOne({
      where: { year: "2018", saao_id: req.session.user_id },
    });
    var nineteen = await cropNibirota.findOne({
      where: { year: "2019", saao_id: req.session.user_id },
    });
    var twenty = await cropNibirota.findOne({
      where: { year: "2020", saao_id: req.session.user_id },
    });
    var twentyOne = await cropNibirota.findOne({
      where: { year: "2021", saao_id: req.session.user_id },
    });
    var twentyTwo = await cropNibirota.findOne({
      where: { year: "2022", saao_id: req.session.user_id },
    });
    console.log("eighteen", eighteen);

    res.render("saao/cropNibirota/cropNibirota", {
      title: "শস্য নিবিড়তার অগ্রগতির তথ্য",
      success: "",
      seventeen: seventeen,
      eighteen: eighteen,
      nineteen: nineteen,
      twenty: twenty,
      twentyOne: twentyOne,
      twentyTwo: twentyTwo,
    });
    // var men=seventeen.purush;
    // console.log("seventeen,",req.typeof(men));
  } catch (err) {
    console.log(err);
  }

  //  records:result
};
module.exports.cropNibirotaYear = async (req, res) => {
  await cropNibirota
    .findAll({
      where: { year: req.body.year, saao_id: req.session.user_id },
    })
    .then((data) => {
      res.render(
        "saao/cropNibirota/cropNibirotaTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.cropNibirotaForm = async (req, res) => {
  await saao
    .findOne({
      where: { id: req.session.user_id },
    })
    .then((data) => {
      res.render("saao/cropNibirota/cropNibirotaForm", {
        title: "শস্য নিবিড়তার অগ্রগতির তথ্য",
        msg: "",
        success: "",
        upazilla_id: data.upazilla_id,
        user_id: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.cropNibirotaFormPost = async (req, res) => {
  var fosholi = req.body.fosholi;
  var abadjoggo = req.body.abadjoggo;
  var abadi = req.body.abadi;
  var ek = req.body.ek;
  var dui = req.body.dui;
  var tin = req.body.tin;
  var kharif2 = req.body.kharif2;
  var robi = req.body.robi;
  var kharif1 = req.body.kharif1;
  var irrigation = req.body.irrigation;
  var year = req.body.year;
  var user_id = req.body.user_id;
  var upazilla_id = req.body.upazilla_id;

  await cropNibirota
    .create({
      fosholi: fosholi,
      abadjoggo: abadjoggo,
      abadi: abadi,
      ek: ek,
      dui: dui,
      tin: tin,
      kharif2: kharif2,
      robi: robi,
      kharif1: kharif1,
      irrigation: irrigation,
      year: year,
      upazilla_id: upazilla_id,
      saao_id: user_id,
    })

    .then((data) => {
      res.redirect("/saao/cropNibirota");
    })
    .catch((err) => {
      res.render("errorpage", err);
    });
};
module.exports.cropNibirotaEdit = async (req, res) => {
  await cropNibirota
    .findByPk(req.params.id)
    .then((data) => {
      res.render("saao/cropNibirota/cropNibirotaEdit", {
        title: "শস্য নিবিড়তার অগ্রগতি",
        msg: "",
        success: "",
        records: data,
        user_id: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log("err");
    });
};
module.exports.cropNibirotaEditPost = async (req, res) => {
  var name = req.body.name;
  var fname = req.body.fname;
  var vname = req.body.vname;
  var nid = req.body.nid;
  var mnum = req.body.mnum;
  var ptype = req.body.ptype;
  var pname = req.body.pname;
  var date = req.body.date;
  var block = req.body.block;
  var saooname = req.body.saooname;
  var pnum = req.body.pnum;
  var year = req.body.year;
  var user_id = req.body.user_id;

  await cropNibirota
    .update(
      {
        name: name,
        fname: fname,
        vname: vname,
        nid: nid,
        mnum: mnum,
        ptype: ptype,
        pname: pname,
        date: date,
        block: block,
        saooname: saooname,
        pnum: pnum,
        year: year,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/saao/cropNibirota");
    })
    .catch((err) => {
      res.render("errorpage", err);
    });
};
module.exports.cropNibirotaDelete = async (req, res) => {
  var cropNibirotaDelete = await cropNibirota.findByPk(req.params.id);
  try {
    cropNibirotaDelete.destroy();
    res.redirect("/saao/cropNibirota");
  } catch {
    res.render("errorpage", err);
  }
};
//cropNibirota controller end
