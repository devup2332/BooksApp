import { DataTypes, Model } from "sequelize";
import { sequelize } from '../database';
import Favorites from "./favorite.model";

class Users extends Model{
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
}

Users.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50)
        },
        email: {
            type: DataTypes.STRING(50)
        },
        password: {
            type: DataTypes.STRING(50)
        }
    },
    {
        tableName: "users",
        sequelize
    }
)

Users.hasMany(Favorites,{
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'favorites'
});

Favorites.belongsTo(Users,{
    foreignKey: 'userId',
    as: 'users'
});

export default Users;
