import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '@environments//environment.development';


export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const API_URL = environment.apiUrl;
  
  const updatedRequest = req.clone({
    url: `${API_URL}/${req.url}`,
  });
  
  return next(updatedRequest);
};
