const express = require('express');
const { getMobiles, getAMobile, addMobile, editMobile, deleteMobile, sortMobiles, filterMobiles } = require('../controllers/mobile');

const router = express.Router();


router.get('/mobiles',getMobiles);

router.get('/mobile/:id',getAMobile);

router.post('/mobile',addMobile);

router.put('/mobile/:id',editMobile);

router.delete('/mobile/:id',deleteMobile);

router.get('/mobiles/filter/:brand',filterMobiles); 

router.get('/mobiles/sort/:sort',sortMobiles);




module.exports = router;