const express = require("express");
const router = express.Router();
// const { Router } = require("express");
const app=express();

const {saaosignup,saaosignuppost,saaologin,saaologinpost,saaoDashboard,districtFilter,saaoEdit,saaoEditPost,producedCropEditPost,
    cropNibirota,cropNibirotaYear,cropNibirotaForm,cropNibirotaFormPost,producedCrop,producedCropYear,producedCropForm,producedCropFormPost,
    selectedField,selectedFieldYear,selectedFieldForm,selectedFieldFormPost,cropNibirotaEditPost,saaoPasswordEditPost,saaoPassword,selectedFieldEditPost,
    cropNibirotaEdit,cropNibirotaDelete,producedCropEdit,producedCropDelete,selectedFieldEdit,selectedFieldDelete,} = require('../controllers/saao.controller');

router.get('/login',saaologin);
router.post('/logins',saaologinpost);
router.get('/dashboard',saaoDashboard);
router.post('/saaoEditPost/:id',saaoEditPost);
router.get('/saaoEdit/:id',saaoEdit);
router.get('/saaoPassword/:id',saaoPassword);
router.post('/saaoPasswordEditPost/:id',saaoPasswordEditPost);

router.get('/signup',saaosignup);
router.post('/signups',saaosignuppost);
router.post('/districtFilter',districtFilter);

router.get('/cropNibirota',cropNibirota);
router.post('/cropNibirotaYear',cropNibirotaYear);
router.get('/cropNibirotaForm',cropNibirotaForm);
router.post('/cropNibirotaFormPost',cropNibirotaFormPost);
router.get('/cropNibirotaEdit/:id',cropNibirotaEdit);
router.post('/cropNibirotaEditPost',cropNibirotaEditPost);
router.get('/cropNibirotaDelete/:id',cropNibirotaDelete);

router.get('/producedCrop',producedCrop);
router.get('/producedCropForm',producedCropForm);
router.post('/producedCropFormPost',producedCropFormPost);
router.get('/producedCropEdit/:id',producedCropEdit);
router.post('/producedCropEditPost/:id',producedCropEditPost);
router.get('/producedCropDelete/:id',producedCropDelete);

router.get('/selectedField',selectedField);
router.post('/selectedFieldYear',selectedFieldYear);
router.get('/selectedFieldForm',selectedFieldForm);
router.post('/selectedFieldFormPost',selectedFieldFormPost);
router.get('/selectedFieldEdit/:id',selectedFieldEdit);
router.post('/selectedFieldEditPost/:id',selectedFieldEditPost);
router.get('/selectedFieldDelete/:id',selectedFieldDelete);


module.exports = router;