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
                {props.students.map((object: StudentsType, index: number) => {
                    return (
                        <li key={object.id}>
                            <span>Name: {object.name}, </span>
                            <span>Age: {object.age}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

