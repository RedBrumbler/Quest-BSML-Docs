import { FunctionComponent } from 'react';

export type Props = React.HTMLAttributes<HTMLElement> & {
    command: String;
    args?: String[];
}

const Command: FunctionComponent<Props> = ({command, args}) => {
    return (
        <div className='command-wrapper'>
            <span className='command'>
                <span className='cmd'>{ command }</span> <span className='args'>{ args != null ? args.join(' ') : <></> }</span>
            </span>
        </div>
    )
}

export default (Command);