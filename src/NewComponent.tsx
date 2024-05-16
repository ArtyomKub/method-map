import React from 'react';

type NewComponentType = {
    students: Array<StudentsType>;
}

type StudentsType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.students.map((student: StudentsType, index: number) => {
                    return (
                        <li key={index}>
                            <div>ID: {student.id}</div>
                            <div>Age: {student.age}</div>
                            <div>Name: {student.name}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

