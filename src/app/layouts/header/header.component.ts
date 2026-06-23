import { ChangeDetectionStrategy, Component, EventEmitter, Output, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  private readonly router = inject(Router);

  navigateTo(path: string): void {
    this.router.navigate([path])
  }
}
