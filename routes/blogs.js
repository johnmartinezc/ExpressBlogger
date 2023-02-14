const express = require('express');
const router = express.Router();

var { validateblogData } = require("../validation/blogs");
const { db } = require("../mongo");



router.get("/", async (req, res, next) => {
  const blogs = await db()
    .collection("sample_blogs")
    .find()
    .limit()
    .toArray();

  res.json({ success: true, blogs: blogs });
});


// assignment 
router.get("/all", async function (req, res, next){
  const blogs = await db()
    .collection('sample_blogs')
    .find()
    .toArray(function(err, result){
    if(err){
      res.status(400).send('error fetching blogs')
    }else{
      res.json(result)
    }
    })
  
    res.json({
    success:true,
    blogs: blogs,
    })
  
  });
router.get("/get-one", async function (req, res, next){
  const blogs = await db()
    .collection('sample_blogs')
    .find()
    .limit(1)
    .toArray(function(err, result){
    if(err){
      res.status(400).send('error fetching blogs')
    }else{
      res.json(result)
    }
    })
  
    res.json({
    success:true,
    blogs: blogs,
    })
  
  });


router.get("/get-one/:id", async (req, res, next)=>{
  const blogPosts = await db()
  .collection("sample_blogs")
  .findOne({
    id: req.params.id  
  })
  
  res.json({
    success: true,
    singleBlog: blogPosts
  })
})







// router.get('/all',function(req,res,next){
//     res.json({
//         success:true,
//         blogs: sampleBlogs
//     })
// })








// router.get('/single/:title', function(req,res,next){
//     const singleBlog = sampleBlogs.find((blog)=>{
//         return blog.title === req.params.title
//     })
// res.json({
//     success:true,
//     blog: singleBlog
// })
// })
// router.delete('/delete/:title', function(req,res,next){
//     const blogTitleDelete = req.params.title

//     const blogIndex = sampleBlogs.findIndex((blog)=>{
//         return blog.title === blogTitleDelete
//     })
//     sampleBlogs.splice(blogIndex, 1)
//     res.json({
//         success:true
//     })
// })



// router.get('/', function(req, res, next) {
//     res.json({sucess: true, 
//       route: "blogs", 
//       message:"welcome to the blogs page"});
//   });

//   router.post("/create-one", (req, res) => {
//     try{  
//       const title = req.body.title;
//       const text = req.body.text;
//       const author = req.body.author;
//       const category = req.body.category;
         
//       const blogData = {
//         title: title,
//         text: text,
//         author: author,
//         category: category,
//         createdAt: new Date(),
//         lastModified: new Date(),
//       };
         
//       const blogDataCheck = validateBlogs(blogData);
  
//       if(blogDataCheck.isValid === false) {
//         throw Error(blogDataCheck.message)
       
//       }
  
//       blogs.push(blogData);
  
//       console.log("blogs ", blogList);
  
//       res.json({
//         success: true,
//       });
//     } catch (e) {
//       console.log(e);
//       res.json({
//         success: false,
//         error: String(e)
//       });
//     }
//   });

//   router.get("/get-one", async (req,res,next)=>{
//     const blogID = req.params.id 
//     const blogPosts = await Db()
//     .collection("blogs")
//     .find({
//       id: blogID
//     })
//     res.json({
//       success: true,
//       singleBlog: blogPosts
//     })
//   })





//   router.put('/update-one/:blogTitle', (req, res)=>{

//     const blogToFind = req.params.blogTitle
    
    
//     const originalBlog = blogs.find((blog)=>{

//       return blog.title === blogToFind
//     })

//     const blogIndex = blogs.findIndex((blog)=>{

//       return blog.title === blogToFind
//     })
  
//     if (!originalBlog) {
//       res.json({
//         success: false,
//         message: "Could not find blog"
//       })
//       return
//     }
  
//     const updatedBlog = {}

//     if(req.body.title !== undefined){
//         updatedBlog.title = req.body.title
//       }else {
//         updatedBlog.title = originalBlog.title
//       }
    
//       if(req.body.text !== undefined){
//         updatedBlog.text = req.body.text
//       }else {
//         updatedBlog.text = originalBlog.text
//       }
    
//       if(req.body.author !== undefined){
//         updatedBlog.author = req.body.author
//       }else {
//         updatedBlog.author = originalBlog.author
//       }
//       if(req.body.category !== undefined){
//         updatedBlog.category = req.body.category
//       }else {
//         updatedBlog.category = originalBlog.category
//       }
  
//       updatedBlog.createdAt = new Date
//       updatedBlog.lastModified = new Date

//   try{

//     const blogDataCheck = validateBlogs(updatedBlog);
  
//     if(blogDataCheck.isValid === false) {
//     throw Error(blogDataCheck.message)
      
//   }

// }catch (e) {
//   console.log(e);
//   res.json({
//     success: false,
//     error: String(e)
//   });
// }
//     blogs[blogIndex] = updatedBlog

//     console.log(blogs)
//     res.json({
//       success: true,
//       updatedBlog: updatedBlog,
//       blogs: blogs
      
//     })
//   })

  module.exports = router;

