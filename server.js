const { app } = require('./src');
const PORT = process.env.PORT || 3232;

app.listen(PORT, () => {
  console.log(`server started running on port ${PORT}`);
});
