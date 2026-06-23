# Directives

## Purpose
Modify DOM element behavior (styling, events, visibility, focus).

## Responsibilities
✅ DOM manipulation | Event handling | CSS classes | Visibility | Focus  
❌ Component rendering | Business logic | HTTP requests

## Naming Convention
```
highlight.directive.ts | click-outside.directive.ts | focus.directive.ts
```

## Coding Rules
- `@Directive` decorator
- Standalone: true
- Use `HostListener` for events
- Use `HostBinding` for properties
- `inject()` dependencies
- Implement OnDestroy if needed

## Example
```typescript
@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  clickOutside = output<MouseEvent>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.clickOutside.emit(event);
    }
  }
}
```

## Checklist
- [ ] Standalone
- [ ] HostListener/HostBinding correct
- [ ] All types defined
- [ ] Uses `inject()`
- [ ] OnDestroy if needed
- [ ] No `any` types
- [ ] Tests exist

## Common Mistakes
❌ Too complex → Keep focused  
❌ No OnDestroy → Unsubscribe  
❌ Heavy DOM → Consider perf  
❌ No types → Always type  
❌ Memory leaks → Use takeUntil
