import express from 'express'; 
import CtrlPages from '../controllers/CtrlPages.js';
import CtrlTestimonials from '../controllers/CtrlTestimonials.js';

const router = express.Router(); 

router.get('/', CtrlPages.index);     
router.get('/nosotros', CtrlPages.aboutUs);     
router.get('/viajes', CtrlPages.travels);
router.get('/viajes/:slug', CtrlPages.travelDetail);
router.get('/testimoniales', CtrlPages.testimonials);     
router.post('/testimoniales', CtrlTestimonials.saveTestimonial);     

export default  router; 