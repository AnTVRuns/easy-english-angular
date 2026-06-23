# Services

## Purpose
Feature-specific business logic, data transformation, and API communication.

## Responsibilities
✅ Feature API calls | Business logic | Data transformation | Feature state  
❌ Global services → Use `@core/` | HTTP setup | UI logic

## Naming Convention
```
user.service.ts | product.service.ts | order-state.service.ts
```

## Coding Rules
- `providedIn: 'root'`
- `inject()` for dependencies
- Return Observables
- Signals for state
- Strict typing

## Example
```typescript
@Injectable({ providedIn: 'root' })
export class UserService {
  private apiService = inject(ApiService);

  getUser(id: string): Observable<User> {
    return this.apiService.get<User>(`/users/${id}`);
  }

  updateUser(id: string, data: Partial<User>): Observable<User> {
    return this.apiService.post<User>(`/users/${id}`, data);
  }
}
```

## Checklist
- [ ] `providedIn: 'root'`
- [ ] All typed (no `any`)
- [ ] Returns Observables
- [ ] Error handling
- [ ] No hardcoded URLs
- [ ] Tests exist

## Common Mistakes
❌ Importing components → Services agnostic  
❌ Constructor inject → Use `inject()`  
❌ Hardcoded URLs → Use environment  
❌ Multiple instances → Use `providedIn: 'root'`  
❌ No error handling → Always handle
