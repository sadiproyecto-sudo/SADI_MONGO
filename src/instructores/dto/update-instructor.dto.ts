import { PartialType } from "@nestjs/mapped-types";
import { CreateInstructorDto } from "./create-instructor.dto.js";
export class UpdateInstructorDto extends PartialType(CreateInstructorDto) {
    
}