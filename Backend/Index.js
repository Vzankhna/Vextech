const express = require('express');
const app = express()
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const cors = require('cors');
const { error } = require('console');

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.static(path.join(__dirname, 'Public','Index.html')));
app.use(express.static(path.join(__dirname, 'assets')));




mongoose
.connect(
  "mongodb+srv://zankhnavaghela2:OHDe0EMUqsW6DIsN@cluster0.rqwr1qz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("mongodb connected"))
.catch((err) => console.log("mongo error", err));

const registerSchema = new mongoose.Schema({
    name: {
    type: String,
    require: true,
    },
    email: {
    type: String,
    require: true,
    },
    mobile: {
    type: Number,
    require: true,
    },
    password: {
    type: String,
    require: true,
    },
    });

const register = mongoose.model("register", registerSchema);

    
const loginSchema = new mongoose.Schema({
    email: {
    type: String,
    require: true,
    },
    password: {
    type: String,
    require: true,
    },
    });

const login = mongoose.model("login", loginSchema);

const contactSchema = new mongoose.Schema({
    na:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    number:{
        type: String,
        require: true,
    },
});

const contact = mongoose.model("contact",contactSchema);

const checkoutSchema = new mongoose.Schema({
    na:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    cnumber:{
        type: Number,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    number:{
        type: Number,
        require: true,
    },
    date:{
        type: String,
        require: true,
    },
    cvv:{
        type: Number,
        require: true,
    },
});
const checkout = mongoose.model("checkout",checkoutSchema);



app.get('/',(req,res)=>{
    res.send("Hello!!")
})

app.get('/api',(req,res)=>{
    const filePath = path.join(__dirname, 'Data.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        }
        const jsonData = JSON.parse(data);
        const updatedJson = jsonData.map(item => {
          if (item.img) {
            item.img = 'http://' + req.get('host') + item.img;
          }
          return item;
        });
        res.json({ success: true, data: updatedJson});
      });
    });

app.get('/product',(req,res)=>{
    const filePath = path.join(__dirname,'Product.json');
    fs.readFile(filePath,'utf-8',(errr,product)=>{
        if(errr){
            console.error(errr);
        }
        const jsonData = JSON.parse(product);
        const updatedJson = jsonData.map(item =>{
            if(item.img){
                item.img = 'http://' + req.get('host') + item.img;
            }
            return item;
        });
        res.json({data: updatedJson});
    });
});

app.get('/cart',(req,res)=>{
    const filePath = path.join(__dirname,'Cart.Json');
    fs.readFile(filePath,'utf-8',(e,cart)=>{
        if(e){
            console.error(e);
        }
        const jsonData = JSON.parse(cart);
        const updatedJson = jsonData.map(item =>{
            if(item.img){
                item.img = 'http://' + req.get('host') + item.img;
            }
            return item;
        });
        res.json({success:true,data:updatedJson});
    })
})

app.get('/category',(req,res)=>{
    const filePath = path.join(__dirname,'Data.Json');
    fs.readFile(filePath,'utf-8',(c,category)=>{
        if(c){
            console.error(c);
        }
        const jsonData = JSON.parse(category);
        const updatedJson = jsonData.map(item =>{
            if(item.img){
                item.img = 'http://' + req.get('host') + item.img;
            }

            item.product_container = item.product_container.map(product =>{
                if (product.img) {
                  product.img = 'http://' + req.get('host') + product.img;
                }
          
                if (product.sideimg) {
                  product.sideimg = product.sideimg.map(a => {
                    if (a.sideimg) {
                      a.sideimg = 'http://' + req.get('host') + a.sideimg;
                    }
                    
                    return a;
                  });
                }
          
                return product;
              });
            return item;
            
        });
        res.json({success:true,data:updatedJson});
    })
})

app.get('/accordian',(req,res)=>{
    const filePath = path.join(__dirname,'Accordian.json');
    fs.readFile(filePath,'utf-8',(ac,acordian)=>{
        if(ac){
            console.error(ac);
        }
        const jsonData = JSON.parse(acordian);
        const updatedJson =jsonData.map(item =>{
            if(item.heading){
                 item.heading;
            }   
            return item
        });
        res.json({success:true,data:updatedJson});
    })
})

app.get('/prc',(req,res) =>{
    const filePath = path.join(__dirname,'Product.json');
    fs.readFile(filePath,'utf-8',(pr,prc)=>{
        if(pr){
            console.error(pr);
        }
        const jsonData = JSON.parse(prc);
        const updatedJson =jsonData.map(item=>{
            if(item.img){
                item.img = 'http://' + req.get('host') + item.img;
            }
            return item;
        });
        res.json({success:true,data:updatedJson});
    })
})

app.post('/register',async(req,res)=>{
    const{na,number,email,password} = req.body

    const exist = await register.findOne({email})
    if(exist){
        return res.json({li:'false',error:'Email already existed'})
    }
   
    const result = await User.create({
        name:na,
        email,
        mobile:number,
        password,
        });

        const transpoter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'zankhnavaghela2@gmail.com',
                pass: 'ohqj mxwe hbbq huhj',
            },
        });

        const mailOptions={
            from:'zankhnavaghela2@gmail.com',
            to:email,
            subject:'Register Successfully',
            html: `
            <p>Hello ${na}</p>
            <p>Registeration Successfully Done!!</p>
            <p>Thank You,</p>
          `,      
        }
        const mail =await transpoter.sendMail(mailOptions)
            console.log(mail.response)
        res.json({li:'true',message:'Register Successfully'})
})
app.post('/login',async(req,res)=>{
    const{email,password} = req.body

    const a = await login.create({
        email,
        password,
    })

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'zankhnavaghela2@gmail.com',
            pass:'ohqj mxwe hbbq huhj',
        },
    });
    const mailOptions ={
        from:'zankhnavaghela2@gmail.com',
        to:email,
        subject:'Login',
        html:`
        <p>Hello,</p>
        <p>You are Login Successfully.We are excited to work with you</p>
        <p>Thank You</p>`
    }
    const mail = await transporter.sendMail(mailOptions)
    console.log(mail.response)
    res.json({success:true,message:'You are Login Successfully'})
    // console.log(email+" "+password)
});
app.post('/contact',async(req,res)=>{
    const{na,email,number,message} = req.body

    const exist = await contact.findOne({email})
    if(exist){
        return res.json({li:'false',error:'already exist'})
    }
    const con = await contact.create({
        na,
        email,
        number,
        message,
    })

    // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'zankhnavaghela2@gmail.com',
      pass: 'ohqj mxwe hbbq huhj',
    },
  });

  // Define email options
  const mailOptions = {
    from: 'zankhnavaghela2@gmail.com',
    to: email,
    subject: 'Welcome to VHX View',
    html: `
      <p>Hello ${na}</p>
      <p>Thank you for registering with Us. We are excited to have you on board!</p>
      <p>Best regards,</p>
      <p>HR Team</p>
    `,
  };
 const mail = await transporter.sendMail(mailOptions);
    console.log(mail.response)
    res.json({li:'true',message:'Thank You'})
});
app.post('/checkout',async(req,res)=>{
    const{na,email,cnumber,address,number,dat,cvv} = req.body

    const check = await checkout.create({
        na,
        email,
        cnumber,
        address,
        number,
        date:dat,
        cvv,    
    })
    console.log(check)
})
app.listen(9000,()=>{
    console.log("You are Connected with Server")
})