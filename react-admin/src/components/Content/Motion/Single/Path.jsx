import React from 'react'
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import styles from '../index.less'
TweenOne.plugins.push(PathPlugin);



// 路径缓动
const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
const ease0 = TweenOne.easing.path(p0);
const ease1 = TweenOne.easing.path(p1);
export default function Path(props) {
    const animation = [
        {
            repeatDelay: 500,
            y: -70,
            repeat: -1,
            yoyo: true,
            ease: ease0,
            duration: 1000
        },
        {
            repeatDelay: 500,
            appearTo: 0,
            scaleX: 0,
            scaleY: 2,
            repeat: -1,
            yoyo: true,
            ease: ease1,
            duration: 1000,
        }
    ];
    return (
        <div>
            <TweenOne
                animation={animation}
                paused={props.paused}
                className={styles.code_box_shape}
                style={{
                    position: 'absolute',
                    transformOrigin: 'center bottom',
                }}
            />
        </div>
    );
}

Path.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};
