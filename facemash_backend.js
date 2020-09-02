let express = require('express');
let app = express();

let router = express.Router();

app.use(express.static('jsfile'));

//Routers
router.get('/', (req, res) => {
    return res.status(200).send('<a href="/facemash.html">facemash</a>');
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, function(){
    console.log('Connected 3000 port!');
    console.log('http://localhost:3000/facemash.html');
});

/*var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'facemash_rank'
});
conn.connect();

var update_sql = 'UPDATE rank_table SET rank = rank + ? WHERE url = ?';
var select_sql = 'SELECT rank FROM rank_table'
var params = [1,'수지.jpg'];
conn.query(select_sql, params,function(err, rows, fields){
    if(err){
        console.log(err);
    }else{
        for(var i = 0; i < rows.length; i++){
            console.log(rows[i].rank);
        }
    }

});
conn.end();*/
