import mongoose, { Schema, Document, Model } from "mongoose";

interface Item {
  sectionName: string;
  name: string;
  price: string;
  description: string;
}

interface Section {
  sectionName: string;
  items: Item[];
}

interface MenuDocument extends Document {
  menuName: string;
  menuDesc: string;
  sections: Section[];
}

const ItemSchema = new Schema<Item>({
  sectionName: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
});

const SectionSchema = new Schema<Section>({
  sectionName: { type: String, required: true },
  items: { type: [ItemSchema], default: [] },
});

const MenuSchema = new Schema<MenuDocument>({
  menuName: { type: String, required: true },
  menuDesc: { type: String, required: true },
  sections: { type: [SectionSchema], default: [] },
});

const MenuModel: Model<MenuDocument> =
  mongoose.models.Menu || mongoose.model<MenuDocument>("Menu", MenuSchema);

export default MenuModel;
