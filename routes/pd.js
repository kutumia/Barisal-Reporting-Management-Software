const express = require("express");
const router = express.Router();
// const { Router } = require("express");
const app=express();

const {demonstration,demonstrationFilter,fieldDay,fieldDayFilter,farmerTraining,farmerTrainingFilter,agriFair,agriFairFilter,farmerPrize,farmerPrizeFilter,cropNibirota,cropNibirotaFilter,cropNibirotaUpazillaFilter,cropNibirotaDistrictFilter,
    llp,llpFilter,solarLight,solarLightFilter,dashboardMonitoring,pdsignup,pdsignuppost,pdlogin,pdloginpost,pdDashboard,cropExpansionAllFilter,cropExpansionAll,selectedField,selectedFieldFilter,selectedFieldUpazillaFilter,selectedFieldDistrictFilter,
    trainedFarmer,trainedFarmerFilter,initialTrial,initialTrialFilter,breedExpansionDistrictFilter,cropExpansionDistrictFilter,agriFairDistrictFilter,producedCrop,producedCropFilter,producedCropUpazillaFilter,producedCropDistrictFilter,
    finalTrial,finalTrialFilter,trialProgress,trialProgressFilter,trainedFarmerDistrictFilter,abadiJomiDistrictFilter,farmerTrainingDistrictFilter,addCrop,addBreed,addTechnology,techList,
    cropExpansion,cropExpansionFilter,breedExpansion,breedExpansionFilter,technologyExpansionDistrictFilter,fieldDayDistrictFilter,cumulative,abadiJomiAllFilter,abadiJomiAll,cropList,
    technologyExpansion,technologyExpansionFilter,trialProgressDistrictFilter,finalTrialDistrictFilter,initialTrialDistrictFilter,technologyExpansionAll,technologyExpansionAllFilter,
    abadiJomi,abadiJomiFilter,demonstrationDistrictFilter,farmerPrizeDistrictFilter,llpDistrictFilter,solarLightDistrictFilter} = require('../controllers/pd.controller');

router.get('/login',pdlogin);
router.post('/logins',pdloginpost);
router.get('/dashboard',pdDashboard);
router.get('/dashboardMonitoring',dashboardMonitoring);


router.get('/signup',pdsignup);
router.post('/signups',pdsignuppost);

router.post('/add/crop',addCrop);
router.post('/add/breed',addBreed);
router.post('/add/technology',addTechnology);

router.get('/cropList',cropList);
router.get('/techList',techList);

router.get('/cropNibirota',cropNibirota);
router.post('/cropNibirotaFilter',cropNibirotaFilter);
router.post('/cropNibirotaUpazillaFilter',cropNibirotaUpazillaFilter);
router.post('/cropNibirotaDistrictFilter',cropNibirotaDistrictFilter);

router.get('/selectedField',selectedField);
router.post('/selectedFieldFilter',selectedFieldFilter);
router.post('/selectedFieldUpazillaFilter',selectedFieldUpazillaFilter);
router.post('/selectedFieldDistrictFilter',selectedFieldDistrictFilter);

router.get('/producedCrop',producedCrop);
router.post('/producedCropFilter',producedCropFilter);
router.post('/producedCropUpazillaFilter',producedCropUpazillaFilter);
router.post('/producedCropDistrictFilter',producedCropDistrictFilter);

router.get('/trainedFarmer',trainedFarmer);
router.post('/trainedFarmerFilter',trainedFarmerFilter);
router.post('/trainedFarmerDistrictFilter',trainedFarmerDistrictFilter);


router.get('/initialTrial',initialTrial);
router.post('/initialTrialFilter',initialTrialFilter);
router.post('/initialTrialDistrictFilter',initialTrialDistrictFilter);

router.get('/finalTrial',finalTrial);
router.post('/finalTrialFilter',finalTrialFilter);
router.post('/finalTrialDistrictFilter',finalTrialDistrictFilter);

router.get('/trialProgress',trialProgress);
router.post('/trialProgressFilter',trialProgressFilter);
router.post('/trialProgressDistrictFilter',trialProgressDistrictFilter);

router.get('/technologyExpansionAll',technologyExpansionAll);
router.post('/technologyExpansionAllFilter',technologyExpansionAllFilter);

router.get('/cropExpansion',cropExpansion);
router.post('/cropExpansionFilter',cropExpansionFilter);
router.post('/cropExpansionDistrictFilter',cropExpansionDistrictFilter);

router.get('/cropExpansionAll',cropExpansionAll);
router.post('/cropExpansionAllFilter',cropExpansionAllFilter);

router.get('/breedExpansion',breedExpansion);
router.post('/breedExpansionFilter',breedExpansionFilter);
router.post('/breedExpansionDistrictFilter',breedExpansionDistrictFilter);

router.get('/technologyExpansion',technologyExpansion);
router.post('/technologyExpansionFilter',technologyExpansionFilter);
router.post('/technologyExpansionDistrictFilter',technologyExpansionDistrictFilter);

router.get('/abadiJomi',abadiJomi);
router.post('/abadiJomiFilter',abadiJomiFilter);
router.post('/abadiJomiDistrictFilter',abadiJomiDistrictFilter);

router.get('/abadiJomiAll',abadiJomiAll);
router.post('/abadiJomiAllFilter',abadiJomiAllFilter);

router.get('/cumulative',cumulative);

router.get('/demonstration',demonstration);
router.post('/demonstrationFilter',demonstrationFilter);
router.post('/demonstrationDistrictFilter',demonstrationDistrictFilter);


router.get('/fieldDay',fieldDay);
router.post('/fieldDayFilter',fieldDayFilter);
router.post('/fieldDayDistrictFilter',fieldDayDistrictFilter);

router.get('/farmerTraining',farmerTraining);
router.post('/farmerTrainingFilter',farmerTrainingFilter);
router.post('/farmerTrainingDistrictFilter',farmerTrainingDistrictFilter);

router.get('/agriFair',agriFair);
router.post('/agriFairFilter',agriFairFilter);
router.post('/agriFairDistrictFilter',agriFairDistrictFilter);



router.get('/farmerPrize',farmerPrize);
router.post('/farmerPrizeFilter',farmerPrizeFilter);
router.post('/farmerPrizeDistrictFilter',farmerPrizeDistrictFilter);

router.get('/llp',llp);
router.post('/llpFilter',llpFilter);
router.post('/llpDistrictFilter',llpDistrictFilter);

router.get('/solarLight',solarLight);
router.post('/solarLightFilter',solarLightFilter);
router.post('/solarLightDistrictFilter',solarLightDistrictFilter);


module.exports = router;