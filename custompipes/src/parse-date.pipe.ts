import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseDatePipe implements PipeTransform{
    transform(value: string |number, metadata: ArgumentMetadata) {
        console.log(metadata);
        console.log(metadata.type);
        console.log(metadata.data);
        console.log(metadata.metatype);
        //metadata hold complete data like datatype, whether its in body or in param
       const date= this.converTimestamp(value)
       if(!date || isNaN(+date)){
        throw new BadRequestException("Invalid")
       }
       return date; 
    }
    private converTimestamp(timestamp:string|number){
        timestamp=+timestamp;
        const issecond=!(timestamp>(Date.now()+24*60*60*1000)/1000)
        return issecond ? new Date(timestamp *1000):new Date(timestamp)
    }

}