import { Component } from "react";
import styled from "styled-components";

const ListStyle=styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

const ListItemStyle=styled.li`
    list-style: none;
    border: 2px solid #807f7a ;
    width: 600px;
    border-radius: 9px;
    padding-left: 8px;
`
class TaskList extends Component {
    static tasks=[
        {
            id:1,
            text: "Попрактикуватись на інших проєктах"
        },
        {
            id:2,
            text: "Вчасно виконати дз по tech skill"
        },
        {
            id:3,
            text: "Зробити зарядку вранці"
        },
        {
            id:4,
            text: "Вивчити 5 нових слів англійською"
        }
    ]
    render(){
        return(
            <ListStyle>
            {TaskList.tasks.map((task)=>{
                return(
                    <ListItemStyle>
                        <h2>{task.text}</h2>
                        <p>id {task.id}</p>
                    </ListItemStyle>
                )
            })}
            </ListStyle>
        )
    }    
}
export default TaskList