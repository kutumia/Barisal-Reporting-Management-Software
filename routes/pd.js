const express = require("express");
const router = express.Router();
// const { Router } = require("express");
const app=express();

const {demonstration,demonstrationFilter,fieldDay,fieldDayFilter,farmerTraining,farmerTrainingFilter,agriFair,agriFairFilter,farmerPrize,farmerPrizeFilter,
    llp,llpFilter,solarLight,solarLightFilter,dashboardMonitoring,pdsignup,pdsignuppost,pdlogin,pdloginpost,pdDashboard,cropExpansionAllFilter,cropExpansionAll,
    trainedFarmer,trainedFarmerFilter,initialTrial,initialTrialFilter,breedExpansionDistrictFilter,cropExpansionDistrictFilter,agriFairDistrictFilter,
    finalTrial,finalTrialFilter,trialProgress,trialProgressFilter,trainedFarmerDistrictFilter,abadiJomiDistrictFilter,farmerTrainingDistrictFilter,
    cropExpansion,cropExpansionFilter,breedExpansion,breedExpansionFilter,technologyExpansionDistrictFilter,fieldDayDistrictFilter,cumulative,abadiJomiAllFilter,abadiJomiAll,
    technologyExpansion,technologyExpansionFilter,trialProgressDistrictFilter,finalTrialDistrictFilter,initialTrialDistrictFilter,technologyExpansionAll,technologyExpansionAllFilter,
    abadiJomi,abadiJomiFilter,demonstrationDistrictFilter,farmerPrizeDistrictFilter,llpDistrictFilter,solarLightDistrictFilter} = require('../controllers/pd.controller');
router.get('/login',pdlogin);
router.post('/logins',pdloginpost);
router.get('/dashboard',pdDashboard);
router.get('/dashboardMonitoring',dashboardMonitoring);


router.get('/signup',pdsignup);
router.post('/signups',pdsignuppost);

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