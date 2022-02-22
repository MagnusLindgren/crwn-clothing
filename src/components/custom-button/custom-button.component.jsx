import './custom-button.styles.scss';

const Custombutton = ({ children, ...otherProps }) => (
    <button className='custom-button'>
        {children}
    </button>
);

export default Custombutton;