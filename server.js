require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const proxy = require('http-proxy-middleware');
const compress = require('compression');
const port = process.env.PORT || 3000;

app.get('*.gz', (req, res, next) => {
 res.set('Content-Encoding', 'gzip');
 res.set('Content-Type', 'text/javascript');
 next();
});

app.use(compress());
app.use('/', express.static(path.join(__dirname, 'public')));

app.use(
  '/rooms/10000000',
  proxy({
    target:'http://ec2-54-67-90-156.us-west-1.compute.amazonaws.com',
    changeOrigin: true
  })
);

app.use(
  '/rooms/bookings/10000000',
  proxy({
    target:'http://ec2-54-67-90-156.us-west-1.compute.amazonaws.com',
    changeOrigin: true
  })
);

app.use(
  '/rooms/reviews/recent',
  proxy({
    target:'http://ec2-3-94-120-161.compute-1.amazonaws.com',
    changeOrigin: true
  })
);
app.use(
  '/rooms/reviews/relevant',
  proxy({
    target:'http://ec2-3-94-120-161.compute-1.amazonaws.com',
    changeOrigin: true
  })
);
app.use(
  '/rooms/reviews/filter',
  proxy({
    target:'http://ec2-3-94-120-161.compute-1.amazonaws.com',
    changeOrigin: true
  })
);
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
