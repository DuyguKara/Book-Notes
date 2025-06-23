import express from "express";
import pg from "pg";
import 'dotenv/config'
import bodyParser from "body-parser"

const app = express();
const port = 3000;

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD
});

db.connect();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

async function getItems() {
    const items = await db.query("SELECT * FROM booksInfo");
    return items.rows;
};

//DB'den gelen veri [{id:1, title:'bla'...}, {...}]

app.get("/", async(req,res)=>{
    try{
       const items = await getItems();
        res.render("index.ejs", {
        bookInfo: items
        }); 
    }catch(err){
        console.log(err);
    }
    
});

app.post("/add", async(req,res)=>{
    //console.log(req.body["bookTitle"]);
    const title = req.body["bookTitle"];
    const date = req.body["read-date"];
    const point = req.body["read-point"];
    const summary = req.body["read-sum"];
    const link = req.body["book-link"];
    try{
        await db.query("INSERT INTO booksInfo (title, readdate, bookpoint, summary, url) VALUES ($1, $2, $3, $4, $5)", 
        [title, date, point,summary, link]);
        res.redirect("/");
    }catch(err){
        console.log(err);
    }
    
});

app.post("/delete", async(req, res)=>{
   // console.log(req.body["deletedBookNote"]); hangi notun çöp kutusuna basılırsa onun id değeri geliyor.
   const id = req.body["deletedBookNote"];
   try{
    await db.query("DELETE FROM booksInfo WHERE id = $1", [id]);
    res.redirect("/");
   }catch(err){
    console.log(err);
   }
   
});

app.post("/edit", async(req, res)=>{
    // console.log(req.body["updatedBookTitle"]);
    const title = req.body["updatedBookTitle"];
    const date = req.body["updatedread-date"];
    const point = req.body["updatedread-point"];
    const summary = req.body["updatedread-sum"];
    const link = req.body["updatedbook-link"];
    const id = req.body["updatedItemId"];

    try{
        await db.query("UPDATE booksInfo SET (title, readdate, bookpoint, summary, url) = ($1, $2, $3, $4, $5) WHERE id = $6", 
        [title, date, point, summary, link, id]);
        res.redirect("/");
    }catch(err){
        console.log(err);
    }
});

app.post("/sort", async(req, res)=>{
    const sort = req.body["sortOption"];
    //console.log(sort); date
    if(sort === "date"){
        try{
            const sortedData = await db.query("SELECT * FROM booksInfo ORDER BY readdate DESC");
            res.render("index.ejs", {bookInfo : sortedData.rows});
            }catch(err){
                console.log(err);
            }
        
    }else{
        try{
            const sortedData = await db.query("SELECT * FROM booksInfo ORDER BY bookpoint DESC");
            res.render("index.ejs", {bookInfo : sortedData.rows});
        }catch(err){
            console.log(err);
        }
    }
});

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
});