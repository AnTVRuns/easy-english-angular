# Pages

## Purpose
Routable page components (smart components) corresponding to URL routes.

## Responsibilities
✅ Route-specific components | Page state management | Service orchestration  
❌ Reusable components | Global services | Layout components

## Naming Convention
```
home.component.ts | dashboard.component.ts | [id].component.ts
```

## Folder Structure
```
pages/home/ | pages/dashboard/ | pages/user-profile/
Each with: page.component.ts | components/ | services/
```

## Coding Rules
- Standalone + OnPush
- Data loading in `ngOnInit`
- Extract route parameters
- Signals for state
- Delegate to services

## Example
```typescript
@Component({
  selector: 'app-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  data = signal<Dashboard | null>(null);

  ngOnInit() {
    this.dashboardService.getData().subscribe(d => this.data.set(d));
  }
}
```

## Checklist
- [ ] Standalone
- [ ] OnPush detection
- [ ] Data in ngOnInit
- [ ] Route params extracted
- [ ] Loading/error states
- [ ] Signals for state
- [ ] Tests exist

## Common Mistakes
❌ Page too large → Extract sub-components  
❌ Business logic → Move to service  
❌ No loading states → Handle async  
❌ Memory leaks → Unsubscribe  
❌ Not standalone → Must be standalone
