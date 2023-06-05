const { connectDB } = require("./dbconnect.js");

exports.getAll = async () => {
    const query = "SELECT * FROM test";
    try {
        const db = await connectDB();
        let { data } = await db.get_all(query);
        db.close();
        return data;
    } catch (error) {
        return console.error(error.message);
    }
};
