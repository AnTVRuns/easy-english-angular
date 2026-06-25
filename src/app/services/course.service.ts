import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

const COURSE_BASE_URL = `${environment.apiUrl}/course`;

@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly http = inject(HttpClient);

  fetchAllCourses() {
    return this.http.get<any>(`${COURSE_BASE_URL}/get-all-course`);
  }

  createCourse(courseRequest: unknown) {
    const formData = new FormData();
    Object.entries(courseRequest || {}).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value as Blob | string);
      }
    });
    return this.http.post<any>(`${COURSE_BASE_URL}/create-course`, formData);
  }

  updateCourse(courseRequest: unknown) {
    const formData = new FormData();
    Object.entries(courseRequest || {}).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value as Blob | string);
      }
    });
    return this.http.post<any>(`${COURSE_BASE_URL}/update-course`, formData);
  }

  deleteCourse(courseRequest: unknown) {
    return this.http.post<any>(`${COURSE_BASE_URL}/delete-course`, courseRequest);
  }

  fetchAllCourseOfTeacher(courseRequest: unknown) {
    return this.http.post<any>(`${COURSE_BASE_URL}/get-all-course-of-teacher`, courseRequest);
  }

  getCourseByFilter(courseRequest: unknown) {
    return this.http.post<any>(`${COURSE_BASE_URL}/get-course-by-filter`, courseRequest);
  }

  getCourseOfFavourite(courseRequest: unknown) {
    return this.http.post<any>(`${COURSE_BASE_URL}/get-all-course-favorite-of-student`, courseRequest);
  }

  deleteCourseOfFavourite(courseRequest: unknown) {
    return this.http.post<any>(`${COURSE_BASE_URL}/remove-course-from-favorite`, courseRequest);
  }

  getEnrollCourse(courseRequest: unknown) {
    return this.http.post<any>(`${COURSE_BASE_URL}/get-all-course-of-student`, courseRequest);
  }

  fetchMainCourse(courseRequest: unknown) {
    return this.http.post<any>(`${COURSE_BASE_URL}/get-main-course`, courseRequest);
  }

  addCourseToFavourite(courseRequest: unknown) {
    return this.http.post<any>(`${COURSE_BASE_URL}/add-course-to-favorite`, courseRequest);
  }

  getAllCourseForAdmin(filterReq: unknown) {
    return this.http.post<any>(`${COURSE_BASE_URL}/admin/get`, filterReq);
  }

  updateCourseStatus(courseId: string, status: string) {
    return this.http.put<any>(`${COURSE_BASE_URL}/update-status/${courseId}/${status}`, null);
  }

  updateCourseNotice(courseRequest: unknown) {
    return this.http.put<any>(`${COURSE_BASE_URL}/update-notice`, courseRequest);
  }

  countView(courseId: string) {
    return this.http.put<any>(`${COURSE_BASE_URL}/count-view/${courseId}`, null);
  }

  getRelatedCourses(getRelatedCourseReq: unknown) {
    return this.http.post<any>(`${COURSE_BASE_URL}/get-related-courses`, getRelatedCourseReq);
  }

  getCourseDetailButtonStatus(courseId: string) {
    return this.http.get<any>(`${COURSE_BASE_URL}/get-button-status/${courseId}`);
  }
}
