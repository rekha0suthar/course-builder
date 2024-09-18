import uuid from 'uuid/v4';

export const initState = (course) => {
  return !course
    ? {
        courseId: uuid(),
        courseTitle: '',
        category: 'UI/UX',
        lessonCount: 0,
        lessons: [],
      }
    : course;
};

const courseReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        courseTitle: action.title,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.category,
      };
    case 'ADD_LESSON':
      return {
        ...state,
        lessonCount: state.lessonCount + 1,
        lessons: [
          ...state.lessons,
          {
            lessonId: action.lesson.lessonId,
            title: action.lesson.lessonTitle,
            type: action.lesson.lessonType,
          },
        ],
      };
    case 'DELETE_LESSON':
      return {
        ...state,
        lessonCount: state.lessonCount - 1,
        lessons: state.lessons.filter(
          ({ lessonId }) => lessonId !== action.lessonId
        ),
      };
    default: {
      throw new Error('This action could not be handled');
    }
  }
};

export default courseReducer;
