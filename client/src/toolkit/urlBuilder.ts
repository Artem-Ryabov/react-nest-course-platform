import { endPoints, mainRoutes } from '../constants/endPoints';

export const urlBuilder = {
  getCourses(): string {
    return mainRoutes.courses + endPoints.all;
  },

  getCourse(id: number): string {
    return mainRoutes.coursepage + `/${id}`;
  },

  getSubjects(): string {
    return mainRoutes.courses + endPoints.subjects;
  },

  getUserSubscriptions(): string {
    return mainRoutes.courses + endPoints.subscriptions;
  },

  subscribeUserToCourse(id: number): string {
    return mainRoutes.coursepage + `/${id}` + endPoints.subscribe;
  },

  unsubscribeUserFromCourse(id: number): string {
    return mainRoutes.coursepage + `/${id}` + endPoints.unsubscribe;
  },

  getLessons(id: number): string {
    return mainRoutes.coursepage + `/${id}` + endPoints.lesson + endPoints.all;
  },

  getUserCreatedCourses(): string {
    return mainRoutes.courses + endPoints.created;
  },

  createCourse(): string {
    return mainRoutes.coursemanager;
  },

  getCreatedCourse(id: number): string {
    return mainRoutes.coursemanager + `/${id}`;
  },

  editCourse(id: number): string {
    return mainRoutes.coursemanager + `/${id}`;
  },

  deleteCourse(id: number): string {
    return mainRoutes.coursemanager + `/${id}`;
  },

  createLesson(id: number): string {
    return mainRoutes.coursemanager + `/${id}` + endPoints.lesson;
  },

  editLesson(id: number): string {
    return mainRoutes.coursemanager + endPoints.lesson + `/${id}`;
  },

  deleteLesson(id: number): string {
    return mainRoutes.coursemanager + endPoints.lesson + `/${id}`;
  },
};
