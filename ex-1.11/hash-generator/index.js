const express = require('express')
fs = require('fs').promises;
const app = express()
const port = process.env.PORT || 3000
const random_str = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);


app.get('/', async (req, res) => {
  try {
    const data = await fs.readFile('/app/logs', 'utf8');
    let out = data.toString()
    const hash = " : " + random_str + "<br>"; 
    out = out.replace(/ : /g, hash);
	let pong = -1;
	try{
		pong = await fs.readFile("/ping/pong", "utf8");
	}catch(err){
		console.log("Error in reading pong file");
	}
	out = out + "<br>" + "Ping / Pongs: " + pong; 
    res.send(out)
   }
   catch(err) {
    res.send("Error in reading logs");
   }
})

app.listen(port , () => {
  console.log(`Server started in port  ${port}`)
})

