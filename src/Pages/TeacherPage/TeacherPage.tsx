import React, { FC } from 'react';

//components
import TeacherProfile from '../../Components/TeacherPage/TeacherProfile/TeacherProfile';
import MinimizedTeacherProfile from '../../Components/TeacherPage/MinimizedTeacherProfile/MinimizedTeacherProfile';
import TeacherAbout from '../../Components/TeacherPage/TeacherAbout/TeacherAbout';

//hooks
import { useScrollPosition } from '../../hooks/useScrollPosition';

const scrollingThreshold = 1

const TeacherPage: FC = () => {
    return (
        <>{
            useScrollPosition() < scrollingThreshold ? 
            <TeacherProfile />
            :
            <MinimizedTeacherProfile />
        }
        <TeacherAbout />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla itaque architecto dolorem minus natus vitae dignissimos hic fugiat recusandae repellendus, amet necessitatibus assumenda, molestias quod cupiditate deleniti voluptates vero!</p>
        </>
    );
};

export default TeacherPage;