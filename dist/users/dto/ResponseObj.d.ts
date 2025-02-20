import { HttpStatus } from '@nestjs/common';
export declare class Response<T> {
    Data: T;
    Message: string;
    StatusCode: HttpStatus;
    Success: Boolean;
}
