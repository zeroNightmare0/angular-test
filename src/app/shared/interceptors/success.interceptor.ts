import { HttpEventType, HttpInterceptorFn } from "@angular/common/http";
import { tap } from "rxjs";

export const SuccessResponseInterceptor: HttpInterceptorFn = (req, next) => next(req).pipe(tap((event: any) => {
    // console.log('success', event);
    if (event.type === HttpEventType.Response) {
        // console.log(req.url, 'returned a response with status', event.status);
    }
}));

