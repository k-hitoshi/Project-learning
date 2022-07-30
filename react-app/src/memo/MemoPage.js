// リスト4-22
import usePersist from '../Persist'
import Memo from './Memo'
import AddForm from './AddForm'
import FindForm from './FindForm'
import DelForm from './DelForm'

function MemoPage(props) {
    const [mode, setMode] = usePersist('mode', 'default')

    return (
        <div>
            <h5 className="my-3">mode: {mode}</h5>
            <div className="alert alert-primary">
                <AddForm />
                <FindForm />
                <DelForm />
            </div>
            <Memo />
        </div>
    )
}

export default MemoPage