const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("./models/user");
const postModel = require("./models/post");

require("dotenv").config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});



app.get("/profile", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ username: req.user.username });
  await user.populate("posts")
  console.log(user);
  res.render("profile", { user });

});


app.get('/likes/:id',isLoggedIn , async(req,res)=>{
  let post = await postModel.findOne({_id : req.params.id}).populate('user') ;
if(post.likes.indexOf(req.user.userid)=== -1){
   post.likes.push(req.user.userid) ;
}
else{
  post.likes.splice(post.likes.indexOf(req.user.userid),1)
}
 
  await post.save() ;
  res.redirect('/profile')
})

app.get('/edit/:id',isLoggedIn,async(req,res)=>{
  let post = await postModel.findOne({_id:req.params.id}).populate('user')
  res.render('edit',{post});
})

app.post('/update/:id',isLoggedIn,async(req,res)=>{
  let post = await postModel.findOneAndUpdate({_id:req.params.id},{content:req.body.content});
  res.redirect('/profile');
})

app.get('/delete/:id',isLoggedIn,async (req,res)=>{
  let post = await postModel.findByIdAndDelete(req.params.id);
  res.redirect('/profile')
})

app.post("/post", isLoggedIn, async (req, res) => {
   let user = await userModel.findById(req.user.userid);
  let { content } = req.body;
  let post = await postModel.create({
    user: user._id,
    content,
  });

  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});


app.post("/create", async (req, res) => {
  let { username, email, password, age } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(500).json({
      success: false,
      message: "user already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  let userCreated = await userModel.create({
    username,
    email,
    password: hashedPassword,
    age,
  });

  let token = jwt.sign({ username, userid: userCreated._id }, process.env.JWT_SECRET);
  res.cookie("token", token);
  res.redirect("/profile");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let { username, password } = req.body;
  let user = await userModel.findOne({ username });
  if (!user) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ username, userid: user._id }, process.env.JWT_SECRET);
      res.cookie("token", token);

      res.status(200).redirect("/profile");
    } else {
      res.redirect("/login");
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") {
    return res.status(400).json({
      success: false,
      message: "you must be logged in",
    });
  } else {
    let data = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

    req.user = data;
  }
  next();
}
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

