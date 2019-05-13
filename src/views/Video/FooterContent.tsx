import React from 'react';
import { Segment } from 'semantic-ui-react';
import Discussion from './Discussion';

interface IProps {
    section: string
}

export const video_menu_items = [
    'overview',
    'discussion',
    'annoucements',
    'upcoming events',
    'live sessions'
]

function renderContentSection(props_section: string): React.ClassicElement<any> {
    switch (props_section) {
        case 'overview':
            return <Overview />
        case 'discussion':
            return <Discussion />
        case 'annoucements':
            return <Annoucements />
        default:
            return <Error />
    }
}

const FooterContent: React.FC<IProps> = (props: IProps) => (
    <Segment attached='bottom'>
        {renderContentSection(props.section)}
    </Segment>
)

const Overview: React.FC<any> = (props: any) => (
    <span>overview</span>
)

const Annoucements: React.FC<any> = (props: any) => (
    <span>annoucements</span>
)

const Error: React.FC<any> = (props: any) => (
    <span>error</span>
)

export default FooterContent