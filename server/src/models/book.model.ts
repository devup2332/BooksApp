import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import AssignedGenres from "./assigned-genre.model";
import Favorites from "./favorite.model";

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

Books.hasMany(AssignedGenres, {
  sourceKey: 'id',
  foreignKey: "bookId",
  as: "assigned_genres"
});

AssignedGenres.belongsTo(Books, {
  foreignKey: "bookId",
  as: "books"
});

Books.hasMany(Favorites,{
  sourceKey: 'id',
  foreignKey: 'bookId',
  as: 'favorites'
});

Favorites.belongsTo(Books,{
  foreignKey: 'bookId',
  as: 'books'
});

export default Books;
