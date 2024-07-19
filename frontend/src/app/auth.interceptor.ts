import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const publicRoutes = ['/', '/contact-us', '/about-us', '/careers'];

  const url = new URL(request.url);
  const pathname = url.pathname;

  let token = '';

  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    token = localStorage.getItem('token') ?? '';
  }

  if (!publicRoutes.includes(pathname)) {
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : '',
      },
    });
  }

  return next(request);
};
