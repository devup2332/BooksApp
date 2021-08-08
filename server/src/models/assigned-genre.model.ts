import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

class AssignedGenres extends Model {
  public id!: number;
  public genreId!: number;
  public bookId!: number;
}

AssignedGenres.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    genreId: {
        type: DataTypes.INTEGER
    },
    bookId: {
        type: DataTypes.INTEGER
    }
  },
  {
    tableName: "assigned_genres",
    sequelize,
  }
);

export default AssignedGenres;
