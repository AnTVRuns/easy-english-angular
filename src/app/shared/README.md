# Shared

## Purpose

Reusable UI components, pipes, directives across all features (Atomic Design).

## Responsibilities

✅ Atoms (button, input, label) | Molecules (form-field, card) | Organisms (modal, table)  
✅ Custom pipes | Custom directives | Shared constants  
❌ Feature-specific logic | Singleton services | Business logic

## Naming Convention

```
button.component.ts | form-field.component.ts | safe-html.pipe.ts | highlight.directive.ts
```

---

## 5. Folder Structure

```
shared/
├── components/
│   ├── atoms/
│   │   ├── button/
│   │   │   ├── button.component.ts
│   │   │   ├── button.component.html
│   │   │   ├── button.component.scss
│   │   │   └── button.component.spec.ts
│   │   ├── input/
│   │   └── label/
│   ├── molecules/
│   │   ├── form-field/
│   │   ├── card/
│   │   └── alert/
│   └── organisms/
│       ├── modal/
│       ├── sidebar/
│       └── navbar/
├── pipes/
│   ├── safe-html.pipe.ts
│   └── currency-format.pipe.ts
├── directives/
│   ├── highlight.directive.ts
│   └── click-outside.directive.ts
├── models/
│   ├── common.model.ts
│   └── pagination.model.ts
├── constants/
│   └── app.constants.ts
├── utils/
│   ├── validators.ts
│   └── formatters.ts
└── .gitkeep
```

---

## 6. Coding Rules

✅ Standalone components only

✅ `ChangeDetectionStrategy.OnPush`

✅ Use `input()` and `output()` signals

✅ `inject()` for dependencies

✅ No `any` types

✅ All access modifiers declared

✅ Components should be reusable

✅ Props over two-way binding

✅ No business logic in shared components

✅ Pipes and directives are pure when possible

---

## 7. Example

### Button Component (Atom)

```typescript
import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type()"
      [class]="buttonClass()"
      [disabled]="disabled()"
      (click)="onClicked.emit()"
    >
      {{ label() }}
    </button>
  `,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  label = input.required<string>();
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);
  onClicked = output<void>();

  buttonClass() {
    return `btn btn-${this.type()}`;
  }
}
```

### Modal Component (Organism)

```typescript
import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../atoms/button/button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div class="modal-overlay" (click)="onClose.emit()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <h2>{{ title() }}</h2>
        <ng-content></ng-content>
        <div class="modal-actions">
          <app-button label="Cancel" (onClicked)="onClose.emit()"></app-button>
          <app-button label="Confirm" (onClicked)="onConfirm.emit()"></app-button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  title = input.required<string>();
  onClose = output<void>();
  onConfirm = output<void>();
}
```

### Safe HTML Pipe

```typescript
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
```

---

## 8. Best Practices

✅ Components accept configuration via inputs

✅ Events emitted via outputs (not two-way binding)

✅ No side effects in components

✅ Use presentational-only components (dumb components)

✅ Organize by Atomic Design (atoms → molecules → organisms)

✅ Reuse components across features

✅ Document component inputs/outputs

✅ Test components in isolation

✅ Keep component templates simple

✅ Use utility functions for complex logic

---

## 9. Checklist

Before committing:

- [ ] Component is standalone
- [ ] Uses `ChangeDetectionStrategy.OnPush`
- [ ] All inputs/outputs documented
- [ ] No `any` types
- [ ] Uses `input()` and `output()` signals
- [ ] No business logic
- [ ] Can be reused in multiple features
- [ ] Template is readable and simple
- [ ] Unit tests exist
- [ ] Follows Atomic Design structure
- [ ] No feature-specific imports

---

## 10. Common Mistakes

❌ **Shared component importing feature services** - Components should be agnostic

❌ **Over-complicated component** - Break into smaller pieces

❌ **Hardcoded data** - Pass via inputs

❌ **Business logic in template** - Move to component class or utils

❌ **No ChangeDetectionStrategy** - Always use `OnPush`

❌ **Constructor injection** - Use `inject()` instead

❌ **Two-way binding** - Use `input()` and `output()` instead

❌ **Shared component with too many responsibilities** - Split it up

❌ **Untyped props** - Always declare `input()` and `output()` types

❌ **Shared component importing from core** - Can import from core for utilities

---

## 11. Atomic Design Structure

### Atoms (Basic Building Blocks)

- Button
- Input
- Label
- Badge
- Icon

### Molecules (Simple Groups)

- Form Field (label + input)
- Card
- Alert
- Badge with Icon

### Organisms (Complex Components)

- Modal
- Navbar
- Sidebar
- Data Table
- Form

---

## 12. Usage Example

### In Feature Component

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/atoms/button/button.component';
import { ModalComponent } from '@shared/components/organisms/modal/modal.component';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [ButtonComponent, ModalComponent],
  template: `
    <app-button label="Open" (onClicked)="openModal = true"></app-button>
    <app-modal
      *ngIf="openModal"
      title="Confirm Action"
      (onClose)="openModal = false"
      (onConfirm)="handleConfirm()"
    >
      Are you sure?
    </app-modal>
  `,
})
export class FeatureComponent {
  openModal = false;

  handleConfirm() {
    console.log('Confirmed');
  }
}
```

---
