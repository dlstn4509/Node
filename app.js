const express = require('express')
const app  = express()
app.listen(port, () => { console.log(`http://127.0.0.1:3000`) })

app.get('/weather', (req, res) => {
  let {let, lon, appid, units} = req.query
  if(lat && lon) {
    // 날씨를 생성하는 프로그램
    res.status(200).json({
      name: 'Seoul',
      main: {temp:36.5},
      weather: [{icon: '01d', main: '맑음', description: '매우 맑음'}]
    })
  }
  else {
    res.status(400)
  }
})