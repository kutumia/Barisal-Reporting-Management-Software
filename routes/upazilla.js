const express = require("express");
const router = express.Router();
// const { Router } = require("express");
const app=express();

const {agriFairFormEdit,agriFairFormUpdate,llpYear,fieldDayYear,demonstrationYear,farmerTrainingYear,agriFairYear,farmerPrizeYear,solarLightYear,upload,uploadfieldDay,uploadagriFair,uploadfarmerPrize,uploadfarmerTraining,uploadllp,uploadsolarLight,solarLightForm,solarLightFormPost,llpForm,llpFormPost,farmerPrizeForm,farmerPrizeFormPost,agriFairForm,agriFairFormPost,fieldDayForm,fieldDayFormPost,farmerTrainingForm,farmerTrainingFormPost,dashboardMonitoring,demonstrationForm,demonstrationFormPost,upazillasignup,upazillasignuppost,allupazilla,upazillalogin,upazillaloginpost,upazillaDashboard,
    trainedFarmer,trainedFarmerYear,trainedFarmerForm,trainedFarmerFormPost,initialTrial,initialTrialYear,initialTrialForm,initialTrialFormPost,selectedField,selectedFieldFilter,
    finalTrial,finalTrialYear,finalTrialForm,finalTrialFormPost,trialProgress,trialProgressYear,trialProgressForm,trialProgressFormPost,producedCrop,producedCropFilter,
    cropExpansion,cropExpansionYear,cropExpansionForm,cropExpansionFormPost,breedExpansion,breedExpansionYear,breedExpansionForm,breedExpansionFormPost,trainedFarmerEdit,fetchBreed,
    technologyExpansion,technologyExpansionYear,technologyExpansionForm,technologyExpansionFormPost,initialTrialEdit,initialTrialDelete,finalTrialEdit,finalTrialDelete,
    trialProgressEdit,trialProgressDelete,cropExpansionEdit,cropExpansionDelete,breedExpansionEdit,breedExpansionDelete,technologyExpansionEdit,technologyExpansionDelete,
    abadiJomi,abadiJomiYear,abadiJomiForm,abadiJomiFormPost,abadiJomiEdit,abadiJomiDelete,trialProgressEditPost,cropNibirota,cropNibirotaFilter,trainedFarmerEditPost,trainedFarmerDelete,
    demonstration,fieldDay,farmerTraining,agriFair,farmerPrize,llp,solarLight,seasonProduction,seasonProductionFilter} = require('../controllers/upazilla.controller');
router.get('/',allupazilla);
router.get('/login',upazillalogin);
router.post('/logins',upazillaloginpost);
router.get('/dashboard',upazillaDashboard);
router.get('/dashboardMonitoring',dashboardMonitoring);

router.get('/signup',upazillasignup);
router.post('/signups',upazillasignuppost);

router.get('/cropNibirota',cropNibirota);
router.post('/cropNibirotaFilter',cropNibirotaFilter);
// producedCrop,producedCropFilter,selectedField,selectedFieldYear,selectedFieldFilter,
router.get('/producedCrop',producedCrop);
router.post('/producedCropFilter',producedCropFilter);

router.get('/selectedField',selectedField);
router.post('/selectedFieldFilter',selectedFieldFilter);
// router.post('/selectedFieldFilter',selectedFieldFilter);
router.get('/seasonProduction',seasonProduction);
router.post('/seasonProductionFilter',seasonProductionFilter);

router.get('/trainedFarmer',trainedFarmer);
router.post('/trainedFarmerYear',trainedFarmerYear);
router.get('/trainedFarmerForm',trainedFarmerForm);
router.post('/trainedFarmerFormPost',trainedFarmerFormPost);
router.get('/trainedFarmerEdit/:id',trainedFarmerEdit);
router.post('/trainedFarmerEditPost/:id',trainedFarmerEditPost);
router.get('/trainedFarmerDelete/:id',trainedFarmerDelete);

//               fetchBreed                                      

router.get('/initialTrial',initialTrial);
router.post('/initialTrialYear',initialTrialYear);
router.get('/initialTrialForm',initialTrialForm);
router.post('/initialTrialFormPost/:id',initialTrialFormPost);
router.get('/initialTrialEdit/:id',initialTrialEdit);
router.post('/initialTrialDelete/:id',initialTrialDelete);

router.get('/finalTrial',finalTrial);
router.post('/finalTrialYear',finalTrialYear);
router.get('/finalTrialForm',finalTrialForm);
router.post('/finalTrialFormPost/:id',finalTrialFormPost);
router.get('/finalTrialEdit/:id',finalTrialEdit);
router.post('/finalTrialDelete/:id',finalTrialDelete);

router.get('/trialProgress',trialProgress);
router.post('/trialProgressYear',trialProgressYear);
router.get('/trialProgressForm',trialProgressForm);
router.post('/trialProgressFormPost',trialProgressFormPost);
router.get('/trialProgressEdit/:id',trialProgressEdit);
router.post('/trialProgressEditPost/:id',trialProgressEditPost);
router.get('/trialProgressDelete/:id',trialProgressDelete);

router.get('/cropExpansion',cropExpansion);
router.post('/cropExpansionYear',cropExpansionYear);
router.get('/cropExpansionForm',cropExpansionForm);
router.post('/cropExpansionFormPost',cropExpansionFormPost);
router.get('/cropExpansionEdit/:id',cropExpansionEdit);
router.post('/cropExpansionDelete/:id',cropExpansionDelete);


router.get('/breedExpansion',breedExpansion);
router.post('/breedExpansionYear',breedExpansionYear);
router.get('/breedExpansionForm',breedExpansionForm);
router.post('/breedExpansionFormPost',breedExpansionFormPost);
router.get('/breedExpansionEdit/:id',breedExpansionEdit);
router.post('/breedExpansionDelete/:id',breedExpansionDelete);
router.post('/fetchBreed',fetchBreed);

router.get('/technologyExpansion',technologyExpansion);
router.post('/technologyExpansionYear',technologyExpansionYear);
router.get('/technologyExpansionForm',technologyExpansionForm);
router.post('/technologyExpansionFormPost',technologyExpansionFormPost);
router.get('/technologyExpansionEdit/:id',technologyExpansionEdit);
router.post('/technologyExpansionDelete/:id',technologyExpansionDelete);

router.get('/abadiJomi',abadiJomi);
router.post('/abadiJomiYear',abadiJomiYear);
router.get('/abadiJomiForm',abadiJomiForm);
router.post('/abadiJomiFormPost',abadiJomiFormPost);
router.get('/abadiJomiEdit/:id',abadiJomiEdit);
router.post('/abadiJomiDelete/:id',abadiJomiDelete);

router.get('/demonstration',demonstration);
router.post('/demonstrationYear',demonstrationYear);
router.get('/demonstrationForm',demonstrationForm);
router.post('/demonstrationFormPost',upload,demonstrationFormPost);


router.get('/fieldDay',fieldDay);
router.post('/fieldDayYear',fieldDayYear);
router.get('/fieldDayForm',fieldDayForm);
router.post('/fieldDayFormPost',uploadfieldDay,fieldDayFormPost);

router.get('/farmerTraining',farmerTraining);
router.post('/farmerTrainingYear',farmerTrainingYear);
router.get('/farmerTrainingForm',farmerTrainingForm);
router.post('/farmerTrainingFormPost',uploadfarmerTraining,farmerTrainingFormPost);

router.get('/agriFair',agriFair);
router.post('/agriFairYear',agriFairYear);
router.get('/agriFairForm',agriFairForm);
router.post('/agriFairFormPost',uploadagriFair,agriFairFormPost);
router.get('/agriFairFormEdit/:id',agriFairFormEdit);
router.post('/agriFairFormUpdate/:id',agriFairFormUpdate);



router.get('/farmerPrize',farmerPrize);
router.post('/farmerPrizeYear',farmerPrizeYear);
router.get('/farmerPrizeForm',farmerPrizeForm);
router.post('/farmerPrizeFormPost',uploadfarmerPrize,farmerPrizeFormPost);
router.get('/farmerPrizeForm/:id',farmerPrizeForm);

router.get('/llp',llp);
router.post('/llpYear',llpYear);
router.get('/llpForm',llpForm);
router.post('/llpFormPost',uploadllp,llpFormPost);

router.get('/solarLight',solarLight);
router.post('/solarLightYear',solarLightYear);
router.get('/solarLightForm',solarLightForm);
router.post('/solarLightFormPost',uploadsolarLight,solarLightFormPost);

module.exports = router;