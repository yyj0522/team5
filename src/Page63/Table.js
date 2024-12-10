import React from 'react';

function Table() {
    return (
        <div className="table-container">
            <table border="1">
                <thead>
                    <tr>
                        <th colSpan="4" className="th1">나의 하루</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>방문한 장소</th>
                        <td><textarea className="text1"></textarea></td>
                        <th>오늘 만난 사람</th>
                        <td><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th>구입한 물건</th>
                        <td><textarea className="text1"></textarea></td>
                        <th>지출한 금액</th>
                        <td><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th>오늘의 뉴스</th>
                        <td colSpan="3"><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th className="th1">시각</th>
                        <th colSpan="3">중요한 일</th>
                    </tr>
                    <tr>
                        <th>오전 5시~8시</th>
                        <th>일어나서 한 일</th>
                        <td colSpan="3"><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th>오전 8시~12시</th>
                        <th>아침식사 후에 한 일</th>
                        <td colSpan="2"><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th>오후 12시~5시</th>
                        <th>오후에 한 일</th>
                        <td colSpan="2"><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th>오후 5시~10시</th>
                        <th>저녁식사 후에 한 일</th>
                        <td colSpan="2"><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th>내일 계획</th>
                        <td colSpan="3"><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th>뇌건강을 위한 생활습관</th>
                        <th colSpan="3">사회활동을 열심히 합시다. <br />단체 활동을 하는 사람이 치매에 걸릴 확률이 1/4로 낮습니다.</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
