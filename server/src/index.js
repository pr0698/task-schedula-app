const {app}= require('../src/app.js')
const connectDB = require('../src/utils/connectDB.js');

const PORT = 8000;
connectDB().then(()=>{
    try {
        app.listen(PORT || 8000, () => {
            console.log(`Server is running at port : ${PORT}`);
        });

    } catch (error) {
       console.log("MONGO db connection failed !!!", err); 
    }
}
    
)
