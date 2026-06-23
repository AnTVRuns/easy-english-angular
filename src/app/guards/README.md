# Guards

## Purpose
Route guards for protecting routes (auth, authorization, confirmation).

## Responsibilities
✅ Auth checks | Permission checks | Role-based access | Unsaved confirmation  
❌ Business logic | HTTP setup | UI components

## Naming Convention
```
auth.guard.ts | permission.guard.ts | admin.guard.ts
```

## Coding Rules
- Functional guards (CanActivateFn)
- Return `boolean | UrlTree | Observable`
- Use UrlTree for redirects
- `inject()` dependencies
- Delegate to services

## Example
```typescript
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/auth/login']);
};
```

## Checklist
- [ ] Functional (CanActivateFn)
- [ ] Correct return type
- [ ] Uses `inject()`
- [ ] Error handling
- [ ] Delegates to services
- [ ] Tests exist

## Common Mistakes
❌ Complex logic → Move to service  
❌ Observable<boolean> → Return boolean/UrlTree  
❌ No error handling → Handle errors  
❌ No redirects → Use UrlTree  
❌ Guard not registered → Add to routes
