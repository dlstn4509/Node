const express = require('express')
const app  = express()
const cors = require('cors')
app.listen(3000, () => { console.log(`http://127.0.0.1:3000`) })

app.use(cors())

app.get('/weather', (req, res) => {
  let {lat, lon, appid, units} = req.query
  if(lat && lon) {
    // 날씨를 생성하는 프로그램
    const weather = [
      {
        name: 'Seoul',
        main: {temp:17},
        weather: [{icon: '01d', main: '흐림', description: '매우 흐림'}]
      },{
        name: 'Seoul',
        main: {temp:36.5},
        weather: [{icon: '02d', main: '맑음', description: '매우 맑음'}]
      },{
        name: 'Seoul',
        main: {temp:-5},
        weather: [{icon: '10n', main: '추움', description: '매우 추움'}]
      }]

    res.status(200).json(weather [Math.floor(Math.random() * 3)])
  }
  else {
    res.status(400).json({error: 'wrong query'})
  }
})