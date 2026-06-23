# Interceptors

## Purpose
HTTP request/response processing (auth, error handling, logging, retry).

## Responsibilities
✅ Add headers | Handle errors | Logging | Transform requests | Retry logic  
❌ Business logic | UI components | Route decisions

## Naming Convention
```
auth.interceptor.ts | error.interceptor.ts | retry.interceptor.ts
```

## Coding Rules
- HttpInterceptorFn
- Return `Observable<HttpEvent<unknown>>`
- Use `next(req)` to chain
- `inject()` dependencies
- Order matters in providers

## Example
```typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }

  return next(req);
};
```

## Checklist
- [ ] HttpInterceptorFn
- [ ] Correct return type
- [ ] Uses `inject()`
- [ ] All types defined
- [ ] Error handling
- [ ] Registered in app.config
- [ ] Tests exist

## Common Mistakes
❌ Too complex → Split interceptors  
❌ Missing `next(req)` → Always chain  
❌ No error handling → Handle errors  
❌ Wrong order → Order matters  
❌ Modify original → Use `clone()`
