import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

export default function useActions(actions, deps) {
    const dispatch = useDispatch();

    return useMemo(() => {
        return bindActionCreators(actions, dispatch)
    }, deps ? [dispatch, ...deps] : deps);
}