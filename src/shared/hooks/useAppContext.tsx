import { useContext } from 'react';

import { AppContext, IContext } from '../../App.context';

export const useAppContext = () => useContext<IContext>(AppContext);

export default useAppContext;
