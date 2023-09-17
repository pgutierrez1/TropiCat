import { useState, useEffect } from "react";
import Axios from "axios";

const Score = (props) => {
    const { item = {} } = props;
    const [user, setUser] = useState({});

    // useEffect(() => {
    //     Axios.get(`http://localhost:3001/users/${item.user_id}`)
    //       .then((res) => {
    //           try {
    //               setUser(res.data.name);
    //               // console.log(user)
    //           } catch (err) {
    //               console.log(err);
    //           }
    //       })
    // }, [user, item]);

    
    return (
        <div className="score">
            <div className="info-container">
                <p className="score-main">Score: {item.score}</p>
                <p className="score-field">User: {item.username}</p>
            </div>
        </div>
    )
}

export default Score;
