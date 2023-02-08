import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faQuestionCircle,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MailBoxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import configRoutes from '~/config/routes';

const cx = classNames.bind(styles);
const MENU_iTEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'france',
                    title: 'Tiếng Pháp',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
];

function Header() {
    const currentUser = true;
    //handle logic
    const handleOnChange = (menuItem) => {
        console.log(menuItem);
    };
    const userMenu = [
        {
            icon: <img src={images.account} alt="" />,
            title: 'Xem hồ sơ',
            to: '/',
        },
        {
            icon: <img src={images.camera} alt="" />,
            title: 'LIVE Studio',
            to: '/',
        },
        {
            icon: <img src={images.setting} alt="" />,
            title: 'Cài đặt ',
            to: '/',
        },
        ...MENU_iTEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Đăng xuất',
            to: '/',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={configRoutes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok"></img>
                    </Link>
                </div>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? ( // Có current user sẽ hiển thị layout current user
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Hộp thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MailBoxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <>
                        <Menu items={currentUser ? userMenu : MENU_iTEMS} onChange={handleOnChange}>
                            {currentUser ? (
                                <Image
                                    className={cx('avatar-user')}
                                    src="https://p16-sign-va.tiktokcdn.com/0tos-useast2a-avt-0068-giso/3744f4e1a7abac9f4f84ec89f58c66c0~c5_100x100.jpeg?x-expires=1673431200&x-signature=NPvEMuqtiH9yBqOOXLWgnln5E6I%3D"
                                    alt="Nguyen Van A"
                                    fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3744f4e1a7abac9f4f84ec89f58c66c0~c5_100x100.jpeg?x-expires=1673431200&x-signature=NPvEMuqtiH9yBqOOXLWgnln5E6I%3D"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </>
                </div>
            </div>
        </header>
    );
}

export default Header;
