import { useReducer } from "react";

// 1. 先定义 formReducer
function formReducer(state, action) {
    // 返回新状态：保留旧状态，仅更新 action 指定的字段
    return { ...state, [action.field]: action.value };
}

export default function Form() {
    // 2. 使用 useReducer，传入定义好的 formReducer 和初始状态
    const [state, dispatch] = useReducer(formReducer, {
        firstName: "",
        lastName: "",
    });

    // 3. 统一处理输入框变化
    const handleChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value });
    };

    return (
        <form>
            <input name="firstName" value={state.firstName} onChange={handleChange} />
            <input name="lastName" value={state.lastName} onChange={handleChange} />
        </form>
    );
}
