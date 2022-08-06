import { FunctionComponent } from 'react';
import { Link, To } from 'react-router-dom';

export type Props = React.HTMLAttributes<HTMLElement> & {
    aliases: String[];
    type: String;
    description: String;
    typelink?: To;
}

const Property: FunctionComponent<Props> = ({aliases, type, description, typelink}) => {
    return (
        <div className='property'>
            <div className="aliases">{ aliases.map(alias => { return (<div className="alias">{alias}</div>)}) }</div>
            { typelink != undefined ? <Link className="type" to={typelink}><span className="link">{type}</span></Link>: <span className="type">{type}</span> }
            <div className="description">{description}</div>
            <div className='spacer'/>
        </div>
    )
}

export default (Property);