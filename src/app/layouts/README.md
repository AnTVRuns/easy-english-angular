# Layouts

## Purpose
Layout wrapper components providing consistent page structure (header, sidebar, footer).

## Responsibilities
✅ Layout wrappers | Navigation | `<router-outlet>` placement | Header/footer/sidebar  
❌ Feature logic | Business logic | Page components

## Naming Convention
```
main-layout.component.ts | auth-layout.component.ts
```

## Folder Structure
```
layouts/main-layout/ | layouts/auth-layout/
main-layout/components/ (header, sidebar, footer)
```

## Coding Rules
- Standalone + OnPush
- Must have `<router-outlet>`
- Signals for layout state only
- Extract layout parts
- No complex logic

## Example
```typescript
@Component({
  selector: 'app-main-layout',
  standalone: true,
  template: `
    <app-header></app-header>
    <div class="layout-body">
      <app-sidebar *ngIf="isSidebarOpen()"></app-sidebar>
      <main><router-outlet></router-outlet></main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  isSidebarOpen = signal(false);
}
```

## Checklist
- [ ] Standalone
- [ ] Has `<router-outlet>`
- [ ] OnPush detection
- [ ] No business logic
- [ ] Responsive
- [ ] Tests exist

## Common Mistakes
❌ Feature logic → Keep generic  
❌ No router-outlet → Layouts must have it  
❌ Complex state → Use signals  
❌ Hardcoded routes → Use router links  
❌ Not responsive → Mobile layouts
