import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import AssignedGenres from "./assigned-genre.model";

class Genres extends Model {
  public id!: number;
  public name!: string;
}

Genres.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
    }
  },
  {
    tableName: "genres",
    sequelize,
  }
);

Genres.hasMany(AssignedGenres, {
    sourceKey: 'id',
    foreignKey: "genreId",
    as: "assigned_genres"
});

AssignedGenres.belongsTo(Genres, {
    foreignKey: "genreId",
    as: "genres"
});

export default Genres;
