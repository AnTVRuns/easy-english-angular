# Models

## Purpose
TypeScript interfaces, types, enums, and DTOs for type safety.

## Responsibilities
✅ Entity interfaces | API models | Enums | Type guards | DTOs  
❌ Class implementations | Business logic | Constants

## Naming Convention
```
user.model.ts | product.model.ts | order-request.model.ts
```

## Coding Rules
- Prefer `interface` over `type`
- Use `readonly` for immutables
- Enums for fixed values
- Use generics
- No `any` types

## Example
```typescript
export interface User {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly role: UserRole;
  readonly createdAt: Date;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export interface CreateUserRequest {
  email: string;
  name: string;
  role: UserRole;
}
```

## Checklist
- [ ] No `any` types
- [ ] Uses `readonly`
- [ ] Enums for constants
- [ ] Request/response separated
- [ ] No circular deps
- [ ] JSDoc documented

## Common Mistakes
❌ Using `any` → Always type  
❌ Mutable properties → Use `readonly`  
❌ No enums → Use enums  
❌ Duplicate models → Reuse  
❌ Circular deps → Check imports
