# Pipes

## Purpose
Transform data for display in templates (formatting, filtering, sorting).

## Responsibilities
✅ Data formatting (date, currency, text) | Filters | Sorting | Safe transforms  
❌ Async operations | Side effects | State management

## Naming Convention
```
safe-html.pipe.ts | currency-format.pipe.ts | sort-by.pipe.ts
```

## Coding Rules
- Implements `PipeTransform`
- Standalone: true
- pure: true (always)
- No side effects
- Handle null/undefined

## Example
```typescript
@Pipe({
  name: 'currencyFormat',
  standalone: true,
  pure: true,
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number | null, currency = '$'): string {
    if (!value) return '';
    return `${currency}${value.toLocaleString('en-US')}`;
  }
}
```

## Checklist
- [ ] Implements PipeTransform
- [ ] Standalone: true
- [ ] pure: true
- [ ] All typed
- [ ] Null/undefined handling
- [ ] No `any` types
- [ ] Tests exist

## Common Mistakes
❌ Side effects → Pipes pure  
❌ Mutable → Create new  
❌ No null check → Always check  
❌ Heavy compute → Consider perf  
❌ Not pure → Mark pure: true
