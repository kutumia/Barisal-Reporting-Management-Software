const express = require("express");
const router = express.Router();
// const { Router } = require("express");
const app=express();
const {demonstration,demonstrationFilter,fieldDay,fieldDayFilter,farmerTraining,farmerTrainingFilter,agriFair,agriFairFilter,farmerPrize,farmerPrizeFilter,
    llp,llpFilter,solarLight,solarLightFilter,dashboardMonitoring,ddsignup,ddsignuppost,allupazilla,ddlogin,ddloginpost,ddDashboard,
    trainedFarmer,trainedFarmerFilter,initialTrial,initialTrialFilter,cropNibirota,cropNibirotaFilter,cropNibirotaUpazillaFilter,producedCrop,producedCropFilter,producedCropUpazillaFilter,
    finalTrial,finalTrialFilter,trialProgress,trialProgressFilter,selectedField,selectedFieldFilter,selectedFieldUpazillaFilter,
    cropExpansion,cropExpansionFilter,breedExpansion,breedExpansionFilter,
    technologyExpansion,technologyExpansionFilter,
    abadiJomi,abadiJomiFilter} = require('../controllers/dd.controller');
router.get('/',allupazilla);
router.get('/login',ddlogin);
router.post('/logins',ddloginpost);
router.get('/dashboard',ddDashboard);
router.get('/dashboardMonitoring',dashboardMonitoring);


router.get('/signup',ddsignup);
router.post('/signups',ddsignuppost);

router.get('/selectedField',selectedField);
router.post('/selectedFieldFilter',selectedFieldFilter);
router.post('/selectedFieldUpazillaFilter',selectedFieldUpazillaFilter);

router.get('/cropNibirota',cropNibirota);
router.post('/cropNibirotaFilter',cropNibirotaFilter);
router.post('/cropNibirotaUpazillaFilter',cropNibirotaUpazillaFilter);

router.get('/producedCrop',producedCrop);
router.post('/producedCropFilter',producedCropFilter);
router.post('/producedCropUpazillaFilter',producedCropUpazillaFilter);

router.get('/trainedFarmer',trainedFarmer);
router.post('/trainedFarmerFilter',trainedFarmerFilter);

router.get('/initialTrial',initialTrial);
router.post('/initialTrialFilter',initialTrialFilter);

router.get('/finalTrial',finalTrial);
router.post('/finalTrialFilter',finalTrialFilter);

router.get('/trialProgress',trialProgress);
router.post('/trialProgressFilter',trialProgressFilter);

router.get('/cropExpansion',cropExpansion);
router.post('/cropExpansionFilter',cropExpansionFilter);

router.get('/breedExpansion',breedExpansion);
router.post('/breedExpansionFilter',breedExpansionFilter);

router.get('/technologyExpansion',technologyExpansion);
router.post('/technologyExpansionFilter',technologyExpansionFilter);

router.get('/abadiJomi',abadiJomi);
router.post('/abadiJomiFilter',abadiJomiFilter);

router.get('/demonstration',demonstration);
router.post('/demonstrationFilter',demonstrationFilter);


router.get('/fieldDay',fieldDay);
router.post('/fieldDayFilter',fieldDayFilter);

router.get('/farmerTraining',farmerTraining);
router.post('/farmerTrainingFilter',farmerTrainingFilter);

router.get('/agriFair',agriFair);
router.post('/agriFairFilter',agriFairFilter);



router.get('/farmerPrize',farmerPrize);
router.post('/farmerPrizeFilter',farmerPrizeFilter);

router.get('/llp',llp);
router.post('/llpFilter',llpFilter);

router.get('/solarLight',solarLight);
router.post('/solarLightFilter',solarLightFilter);


module.exports = router;