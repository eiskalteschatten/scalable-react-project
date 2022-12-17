import { useContext } from 'react';

import { AppContext, IContext } from '../../App.context';

export default () => useContext<IContext>(AppContext);
