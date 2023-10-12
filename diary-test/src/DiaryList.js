import { useContext } from "react";
import DiaryItem from "./DiaryItem.js";
import { DiaryStateContext } from "./App.js";

const DiariList = () => {
    const diaryList = useContext(DiaryStateContext);

    return (
        <div className="DiariList">
            <h2>일기 리스트</h2>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key={`diaryitem_${it.id}`} {...it} />
                ))}
            </div>
        </div>
    );
};

DiariList.defaultProps = {
    diaryList: []
};

export default DiariList;