import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import styles from './Image.module.scss';
import images from '~/assets';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const hanldError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={hanldError}
        />
    );
});

export default Image;
