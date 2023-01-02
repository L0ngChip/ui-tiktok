import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import images from '~/assets';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={images.avatar1} alt="Vú To" />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>lilygumi</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('name')}>lilygumi</span>
            </div>
        </div>
    );
}

export default AccountItem;
