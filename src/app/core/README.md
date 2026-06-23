# Core

## Purpose

Singleton services, interceptors, guards, and global HTTP configuration.

## Responsibilities

✅ HTTP interceptors | Route guards | Auth service | Token management | Error handling  
❌ Feature-specific services | Reusable components | Feature logic

## Naming Convention

```
auth.interceptor.ts | error.interceptor.ts | api.service.ts | auth.guard.ts
```

## Coding Rules

- `providedIn: 'root'` for services (singleton)
- `inject()` instead of constructor
- Return `Observables` (lazy evaluation)
- Strict typing (no `any`)
- Access modifiers required

## Example: API Service

```typescript
@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  get<T>(endpoint: string) {
    return this.http.get<T>(`${this.apiUrl}${endpoint}`);
  }

  post<T>(endpoint: string, body: unknown) {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, body);
  }
}
```

## Checklist

- [ ] Service uses `providedIn: 'root'`
- [ ] All methods are typed
- [ ] Uses `inject()` for dependencies
- [ ] No hardcoded URLs (use environment)
- [ ] Error handling implemented
- [ ] Unit tests exist

## Common Mistakes

❌ Constructor injection → Use `inject()`  
❌ Hardcoded URLs → Use environment files  
❌ No error handling → Always handle errors  
❌ Multiple instances → Use `providedIn: 'root'`  
❌ No types → Always type everything  
❌ Circular dependencies → Core should not depend on features

---
