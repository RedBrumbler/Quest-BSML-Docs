import { FunctionComponent } from 'react';

export type Props = React.HTMLAttributes<HTMLElement> & {
    aliases: String[];
    type: String;
    description: String;
}

const Property: FunctionComponent<Props> = ({aliases, type, description}) => {
    return (
        <div className='property'>
            <div className="aliases">{ aliases.map(alias => { return (<div className="alias">{alias}</div>)}) }</div>
            <span className="type">{type}</span>
            <div className="description">{description}</div>
            <div className='spacer'/>
        </div>
    )
}

export default (Property);