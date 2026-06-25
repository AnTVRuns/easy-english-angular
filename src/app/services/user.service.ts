import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

const USER_BASE_URL = `${environment.apiUrl}/users`;

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);

  updateOwnProfile(updateProfileRequest: unknown) {
    return this.http.put<any>(`${USER_BASE_URL}/update-own-profile`, updateProfileRequest);
  }

  uploadAvatar(avatar: File) {
    const formData = new FormData();
    formData.append('avatar', avatar);

    return this.http.put<any>(`${USER_BASE_URL}/upload-avatar`, formData);
  }

  getUsersWithoutAdmin(filterReq: unknown) {
    return this.http.post<any>(`${USER_BASE_URL}/admin/get`, filterReq);
  }

  deleteUserForAdmin(username: string) {
    return this.http.put<any>(`${USER_BASE_URL}/admin/delete/${username}`, null);
  }

  updateUserForAdmin(username: string, userForAdminReq: unknown) {
    return this.http.put<any>(`${USER_BASE_URL}/admin/update/${username}`, userForAdminReq);
  }

  addUserForAdmin(userData: unknown) {
    return this.http.post<any>(`${USER_BASE_URL}/admin/add`, userData);
  }

  updateOwnSettings(updateReq: unknown) {
    return this.http.put<any>(`${USER_BASE_URL}/update-own-settings`, updateReq);
  }
}
