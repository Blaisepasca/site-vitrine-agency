const express =require('express')
const router =express.Router()

router.get('/',(req,res,next)=>{
    const data ={
        litle:'Bienvenu sur Digital Agency',
        description:'Site vitrine de Digital Agency'
    }
    res.render('index',data)
})

router.get('/services',(req,res,next)=>{
    res.render('services')
})
router.get('/contact',(req,res,next)=>{
    res.render('contact')
})
router.get('/project',(req,res,next)=>{
    res.render('project')
})
router.get('/pricing',(req,res,next)=>{
    res.render('pricing')
})
router.get('/about',(req,res,next)=>{
    res.render('about')
})
router.get('/blog-grid',(req,res,next)=>{
    res.render('blog-grid')
})
router.get('/blog-sidebar',(req,res,next)=>{
    res.render('blog-sidebar')
})
router.get('/blog-single',(req,res,next)=>{
    res.render('blog-single')
})



module.exports = router