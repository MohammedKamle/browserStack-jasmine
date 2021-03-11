const data = require('./config1.json');
//console.log(data.Devices[0].BROWSERNAME === "Chrome");

data.Devices.forEach(a => {
    console.log(a.BROWSERNAME);
})