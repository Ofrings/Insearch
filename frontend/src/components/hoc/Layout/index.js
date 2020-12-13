import { Fragment, useEffect } from 'react';

import Header from '../../commons/Header/index'; 

import { LOGIN_FETCH } from '../../../utils/store/reducers/auth.reducer';
import { useStateContext } from '../../../utils/context';

const withLayout = (WrappedComponent) => props => {

    const [{auth}, dispatch] = useStateContext();

    useEffect(() => {
        if(auth.logged === false) {
            dispatch(LOGIN_FETCH);
        }
    }, [auth.logged]);

    // console.log("PROP: ", props.children);
    return (
        <Fragment>
            <Header isAuth={auth.logged} rol={(auth.user.roles) ? auth.user.roles[0] : null} />
            <WrappedComponent {...props} user={auth.user} />
        </Fragment>
    );
};

export default withLayout;