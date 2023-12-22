import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px grey;
  padding: 8px;
  color: #000;
  margin-bottom: 8px;
  min-height: 90px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${(props) => bgcolorChange(props)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TextContent = styled.div``;

// const Icons = styled.div`
//   display: flex;
//   justify-content: end;
//   padding: 2px;
// `;
function bgcolorChange(props) {
  return props.isDragging
    ? "lightgreen"
    : props.isDraggable
    ? props.isBacklog
      ? "#99bbff"
      : "#d9b3ff"
    : props.isBacklog
    ? "#99bbff"
    : "#d9b3ff";
}

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={`${task._id}`} key={task._id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {/* <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
            <span>
              <small>
                #{task._id}
              </small>
            </span>
          </div> */}
          <div style={{ justifyContent: "center", padding: 2 }}>
            <span className="font-bold "> Title:</span>
            <TextContent>{task.title}</TextContent>
            <span className="font-bold "> Description:</span>
            <TextContent>{task.description}</TextContent>
            <span className="font-bold "> Deadline:</span>
            <TextContent>{task.deadline}</TextContent>
            <span className="font-bold "> Priority:</span>
            <TextContent>{task.priority}</TextContent>
            <button className="btn btn-sm btn-primary text-white">
              Delete
            </button>
          </div>

          {provided.placeholder}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;