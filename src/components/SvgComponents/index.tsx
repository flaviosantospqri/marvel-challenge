import React, { FC } from 'react';

interface SvgComponentProps {
    url: string;
    alt?: string;
}

const SvgComponent: FC<SvgComponentProps> = ({ url, alt }) => {
    return (
        <img src={url} alt={alt} />
    );
};

export default SvgComponent;