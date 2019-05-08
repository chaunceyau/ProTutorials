import React from 'react';
import { Segment } from 'semantic-ui-react';
// 
import { ICategory } from './Category';
import Objectives from './Objectives';
import SeriesContent from './SeriesContent';
import { IInstructor } from './SeriesSidebar';
export interface IVideo {
    id: string,
    title: string,
    resume_time: number,
    video_length: number
}

interface IProps {
    title: string,
    description: string,
    categories: ICategory[],
    instructor: IInstructor,
    objectives: string[]
}

const SeriesMain:React.SFC<IProps> = (props: IProps) => (
    <Segment>  
        
        {/*  */}
        <h3>Series Description</h3>
        <p>{props.description}</p>
        
        {/*  */}
        <h3>Series Objectives</h3>
        <Objectives objectives={props.objectives} />
        
        {/*  */}
        <h3>Series Content</h3>
        <SeriesContent categories={props.categories} />
        
    </Segment>
)


export default SeriesMain