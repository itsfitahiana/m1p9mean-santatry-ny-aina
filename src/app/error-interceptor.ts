import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";

import { ErrorService } from "./error/error.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // let errorMessage = "An unknown error occurred!";
        // if (error.error.message) {
          let errorMessage = error.error.message;
        // }
        // alert(errorMessage)
        // this.dialog.open(ErrorComponent, {data: {message: errorMessage}});
        this.errorService.throwError(errorMessage);
        return throwError(error);
      })
    );
  }
}
