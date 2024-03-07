import express from 'express'; 

const router = express.Router(); 

router.get('/', (req, res) => {
    res.render('inicio', {
        page: 'Inicio'
    }); 
});     
router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
        page: 'Nosotros'
    }) ;
});     
router.get('/viajes', (req, res) => {
    res.render('viajes', {
        page: 'Viajes'
    }) ;
});     
router.get('/testimoniales', (req, res) => {
    res.render('testimoniales', {
        page: 'Testimoniales'
    }) ;
});     

export default  router; 