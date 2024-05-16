import React from 'react';

type NewComponentType ={
    students: Array<StudentsType>;
}

type StudentsType ={
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            New Component
        </div>
    );
};

