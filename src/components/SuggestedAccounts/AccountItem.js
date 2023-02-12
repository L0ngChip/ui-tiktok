import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive offset={[-24, 0]} delay={[800, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('user-avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/bb727918e3df620ba61ceac92544092b~c5_100x100.jpeg?x-expires=1676340000&x-signature=0dNo3Lv%2Bl0IoYRVjKN1K0UnaFis%3D"
                    alt=""
                ></img>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>vtkh2004</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Vũ Thị Khánh Huyền</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
