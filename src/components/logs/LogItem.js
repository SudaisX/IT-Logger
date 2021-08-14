import React from 'react';
import Moment from 'react-moment';

const LogItem = ({ log }) => {
    return (
        <li className='collection-item'>
            <div>
                <a
                    href='#edit-log-modal'
                    className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>
                    {log.message}
                </a>{' '}
                <br />
                <span className='grey-text'>
                    <span className='black-text'>ID #{log.id}</span> last updated by{' '}
                    <span className='black-text'>{log.tech}</span> on{' '}
                    <Moment format='MMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
                </span>
                <a href='#!' className='secondary-content'>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    );
};

export default LogItem;
