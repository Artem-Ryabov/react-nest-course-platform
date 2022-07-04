import { Column, DataType, Model } from 'sequelize-typescript';

interface CatalogCreationAttr {
  Name: string;
}

export class Catalog extends Model<Catalog, CatalogCreationAttr> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING(100), unique: true, allowNull: false })
  Name: string;
}
