import React from 'react';
import { Accordion } from 'semantic-ui-react';
import Category, { ICategory } from '../Series/Category';

interface IProps {
    categories: ICategory[]
}

const SeriesContent: React.FC<IProps> = (props: IProps) => (
    <Accordion styled fluid>
        {props.categories.map(info => <Category key={info.id} {...info} />)}
    </Accordion>
)

export default SeriesContent