import { Column, DataType, Model } from 'sequelize-typescript';

interface TextCatalogCreationAttr {
  Text: string;
}

export class TextCatalog extends Model<TextCatalog, TextCatalogCreationAttr> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING(200), unique: true, allowNull: false })
  Text: string;
}
