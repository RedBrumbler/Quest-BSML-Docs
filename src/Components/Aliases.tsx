import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'

export type Props = React.HTMLAttributes<HTMLElement> & {
    prefix?: String;
    aliases: String[];
}

    const Aliases: FunctionComponent<Props> = ({aliases, prefix}) => {
    return (
        <div className='property'>
            {
                prefix != null ? (<span className='aliasesTitle'> {prefix} </span>) : <></>
            }
            <span className='aliases'>{ aliases.map(alias => { return (<div className='alias'><Link className='link' to={'/tags/' + alias}>{alias} </Link></div>)}) }</span>
        <div className='spacer'/>
    </div>
    )
}

export default (Aliases);