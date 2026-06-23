# Components

## Purpose
Reusable UI components following Atomic Design (atoms → molecules → organisms).

## Responsibilities
✅ Atoms (button, input) | Molecules (form-field, card) | Organisms (modal, table)  
❌ Business logic | Feature components | HTTP calls

## Naming Convention
```
atoms/button/ | molecules/form-field/ | organisms/modal/
button.component.ts | button.component.html | button.component.scss
```

## Folder Structure
```
components/atoms/ | components/molecules/ | components/organisms/
```

## Coding Rules
- Standalone + OnPush mandatory
- `input()` and `output()` signals
- No business logic
- Type everything
- Pure functions

## Example
```typescript
@Component({
  selector: 'app-button',
  standalone: true,
  template: `<button (click)="onClick.emit()">{{ label() }}</button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  label = input.required<string>();
  onClick = output<void>();
}
```

## Checklist
- [ ] Standalone + OnPush
- [ ] Uses `input()` and `output()`
- [ ] No `any` types
- [ ] No business logic
- [ ] Atomic Design
- [ ] Tests exist

## Common Mistakes
❌ Too large → Split into atoms/molecules  
❌ Business logic → Use services  
❌ Constructor inject → Use `inject()`  
❌ No OnPush → Mandatory  
❌ Hardcoded data → Pass via inputs
