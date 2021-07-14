import { Sequelize } from "sequelize";

const sequelize = new Sequelize("booksapp", "oasis", "123456789", {
  host: "db_books",
  dialect: "postgres",
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database is connected");
  } catch (err) {
    console.log("Error connection", err);
  }
};

export default connectToDatabase;
