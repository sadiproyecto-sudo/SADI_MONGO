import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false })
export class Instructor {
    @Prop({ required: true, trim: true })
    nombre: string;
    @Prop({ required: true, trim: true })
    apellido: string;
    @Prop({ required: true, unique: true, trim: true })
    email: string;
}
export const InstructorSchema = SchemaFactory.createForClass(Instructor);