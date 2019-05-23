import React from "react"
import ReactDOM from "react-dom"
import Draggable from "react-draggable"
import Mindsets from "./mindsets"

class DragMindset extends React.Component {
  render() {
    return (
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div>
          <Mindsets className="handle" />
        </div>
      </Draggable>
    )
  }
}

export default DragMindset
