import { z } from "zod";
import { projectSchema } from "../../lib/validate";

export type Project = z.infer<typeof projectSchema>;


export type Success<T> = {
    success: true;
    data: T;
  };
  
export type Failure<T> =
| Success<T>
| {
    success: false;
    error: {
        code: string;
        message: string;
    };
    };

    export type Result<T> =
    | Success<T>
    | Failure<T>;