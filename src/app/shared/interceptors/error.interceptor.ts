import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";


export const ErrorResponseInterceptor: HttpInterceptorFn = (req, next) => next(req).pipe(catchError(handleErrorResponse));

// Manejador de errores
function handleErrorResponse(error: HttpErrorResponse) {
    return throwError(() => `Error: ${error.status}, message: ${error.message}`)
}
