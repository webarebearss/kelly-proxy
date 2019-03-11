require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const proxy = require('http-proxy-middleware');
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.use(
  '/rooms/10000000',
  proxy({
    target:'http://127.0.0.1:3001',
    changeOrigin: true
  })
);

app.use(
  '/rooms/bookings/10000000',
  proxy({
    target:'http://127.0.0.1:3001',
    changeOrigin: true
  })
);

// app.use(
//   '/rooms/1/images',
//   proxy({
//     target:'http://127.0.0.1:3002',
//     changeOrigin: true
//   })
// );
//
// app.use(
//   '/rooms/reviews/recent',
//   proxy({
//     target:'http://127.0.0.1:3003',
//     changeOrigin: true
//   })
// );
// app.use(
//   '/rooms/reviews/relevant',
//   proxy({
//     target:'http://127.0.0.1:3003',
//     changeOrigin: true
//   })
// );
// app.use(
//   '/rooms/reviews/filter',
//   proxy({
//     target:'http://127.0.0.1:3003',
//     changeOrigin: true
//   })
// );
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
