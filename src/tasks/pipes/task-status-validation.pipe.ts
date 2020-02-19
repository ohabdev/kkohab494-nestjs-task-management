import { PipeTransform, BadRequestException } from "@nestjs/common";
import { connect } from "http2";
import { TaskStatus } from "../task.model";

export class TaskStatusValidationPipe implements PipeTransform{
    readonly allowStatuses = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.OPEN,
    ]
    
    transform(value: any){
        value = value.toUpperCase();

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`"${value}" is an invalid status`);
        }
        return value;
    }

    private isStatusValid(status:any){
        const idx = this.allowStatuses.indexOf(status);
        return idx !== -1;
    }



}