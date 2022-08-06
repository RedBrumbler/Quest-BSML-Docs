import { FunctionComponent } from 'react';
import { Link, To } from 'react-router-dom'

export type Props = React.HTMLAttributes<HTMLElement> & {
    prefix?: String;
    aliases: String[];
    to?: To
}

    const Aliases: FunctionComponent<Props> = ({aliases, prefix, to}) => {
    return (
        <div className='property'>
            {
                prefix != null ? (<span className='aliasesTitle'> {prefix} </span>) : <></>
            }
            <span className='aliases'>{ aliases.map(alias => { return (<div className='alias'><Link className='link' to={ to != null ? to : '/tags/' + alias}>{alias} </Link></div>)}) }</span>
        <div className='spacer'/>
    </div>
    )
}

export default (Aliases);