import { DataTypes, Model } from "sequelize";
import { sequelize } from '../database';

class Favorites extends Model{
    public id!: string;
    public book_id!: string;
    public user_id!: string;
}

Favorites.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        bookId:{
            type: DataTypes.INTEGER,
        },
        userId:{
            type: DataTypes.INTEGER
        }
    },
    {
        tableName:"favorites",
        sequelize
    }
)

export default Favorites;