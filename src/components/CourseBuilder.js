import React, { useReducer } from 'react';
import LessonBuilder from './LessonBuilder';
import FormFieldLayout from './FormFieldLayout';
import courseReducer, { initState } from '../reducer/courseReducer';

const CourseBuilder = ({ course, onCreate, onCancel }) => {
  const [state, dispatch] = useReducer(courseReducer, course, initState);
  return (
    <div className="course-builder">
      <div className="crs-title">Course Builder</div>
      <FormFieldLayout title="Title">
        <input
          type="text"
          value={state.courseTitle}
          onChange={(e) => {
            dispatch({ type: 'SET_TITLE', title: e.target.value });
          }}
        />
      </FormFieldLayout>
      <FormFieldLayout title="Category">
        <select
          value={'JavaScript'}
          onChange={(e) => {
            dispatch({ type: 'SET_CATEGORY', category: e.target.value });
          }}
        >
          <option>UI/UX</option>
          <option>JavaScript</option>
          <option>PHP</option>
          <option>Database</option>
          <option>Node.js</option>
        </select>
      </FormFieldLayout>
      <LessonBuilder
        lessons={state.lessons}
        onAdd={(lesson) => {
          dispatch({ type: 'ADD_LESSON', lesson });
        }}
        onRemove={(lessonId) => {
          dispatch({ type: 'DELETE_LESSON', lessonId });
        }}
      />
      <button
        className="course-action-btn"
        onClick={() => (state.courseTitle ? onCreate(state) : null)}
      >
        Done
      </button>
      <button className="course-action-btn" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};

export default CourseBuilder;
