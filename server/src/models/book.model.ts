import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

class Books extends Model {
  public id!: number;
  public author!: string;
  public photoUrl!: string;
  public title!: string;
}

Books.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    author: {
      type: DataTypes.STRING(50),
    },
    photoUrl: {
      type: DataTypes.STRING(300),
    },
    title: {
      type: DataTypes.STRING(50),
    },
  },
  {
    tableName: "books",
    sequelize,
  }
);

export default Books;
