/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const router = require('express').Router();

const scanRoutersIn = (dir, skipList = []) => fs.readdirSync(dir)
  .map((file) => path.join(dir, file))
  .filter((file) => fs.statSync(file).isFile())
  .filter((file) => file !== module.filename)
  .filter((file) => !skipList.map((re) => re.test(file)).find((x) => x))
  .map((file) => require(file))
  .filter((x) => !!x);

router.use('/', scanRoutersIn(__dirname));

module.exports = router;
