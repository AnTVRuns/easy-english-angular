import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { USERS } from '../../../models/mock-users';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  private readonly router = inject(Router);
  readonly users = signal<User[]>(USERS);
  readonly filters = signal({ fullName: '', role: '', gender: '' });
  readonly pagination = signal({ currentPage: 1, itemsPerPage: 8 });

  readonly filteredUsers = computed(() => {
    const { fullName, role, gender } = this.filters();
    let items = this.users();

    if (fullName) {
      items = items.filter((user) =>
        user.fullName.toLowerCase().includes(fullName.toLowerCase()),
      );
    }

    if (role) {
      items = items.filter((user) => user.role === role);
    }

    if (gender) {
      items = items.filter((user) => user.gender === gender);
    }

    return items;
  });

  readonly totalPages = computed(() => {
    const count = this.filteredUsers().length;
    return Math.max(1, Math.ceil(count / this.pagination().itemsPerPage));
  });

  get visibleUsers(): User[] {
    const { currentPage, itemsPerPage } = this.pagination();
    const start = (currentPage - 1) * itemsPerPage;
    return this.filteredUsers().slice(start, start + itemsPerPage);
  }

  updateFilter(name: 'fullName' | 'role' | 'gender', value: string): void {
    this.filters.update((filters) => ({ ...filters, [name]: value }));
    this.pagination.update((page) => ({ ...page, currentPage: 1 }));
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  setPage(page: number): void {
    this.pagination.update((state) => ({ ...state, currentPage: page }));
  }
}
