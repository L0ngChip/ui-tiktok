import classNames from 'classnames/bind';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/bb727918e3df620ba61ceac92544092b~c5_100x100.jpeg?x-expires=1676340000&x-signature=0dNo3Lv%2Bl0IoYRVjKN1K0UnaFis%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <span className={cx('nickname')}>
                    <strong>vtkh2004</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </span>
                <p className={cx('name')}>Vũ Thị Khánh Huyền</p>
                <p className={cx('statistics')}>
                    <strong className={cx('value')}>7.4M </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>270M </strong>
                    <span className={cx('label')}>Thích</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
