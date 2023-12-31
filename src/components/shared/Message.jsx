import sprite from "../../assets/sprite.svg";

function Message({ message }) {
  const displayMsg = msg => {
    if (msg.type === "message") {
      return (
        <div className="message">
          <div>
            <svg>
              <use href={sprite + "#icon-smile"} />
            </svg>
          </div>
          <p>${msg.text}</p>
        </div>
      );
    }

    if (msg.type === "error") {
      return (
        <div className="message">
          <div>
            <svg className="icon">
              <use href={sprite + "#icon-alert-triangle"} />
            </svg>
          </div>
          <p>${msg.text}</p>
        </div>
      );
    }
  };

  return <>{displayMsg(message)}</>;
}

export default Message;
