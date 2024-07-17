import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token = localStorage.getItem('token') ?? '';

//   let token = '';

//   if (typeof localStorage !== 'undefined') {
//     token = localStorage.getItem('token') ?? '';
//   }

// let token = '';

//   // Check if running in a browser environment
//   if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
//     token = localStorage.getItem('token') ?? '';
//   }

  request = request.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    },
  });

  return next(request);
};
