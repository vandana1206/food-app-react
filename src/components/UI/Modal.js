// import classes from "./Modal.module.css";
// import ReactDOM from 'react-dom/client';

// import { Fragment } from "react";

// const Backdrop = (props) => {

//   return <div className={classes.backdrop} onClick={props.onClose}></div>;
// };
// const ModalOverlay = (props) => {
//   return (
// <div className={classes.modal}>
//       <div className={classes.content}>{props.children}</div>
//     </div>
//   );
// };
// const createPortalElement = document.getElementById("overlays");
// const Modal = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(
//         <Backdrop onClose={props.onClose} />,
//         createPortalElement
//       )}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         createPortalElement
//       )}
//     </Fragment>
//   );
// };
// export default Modal;

import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const PortalElement = document.getElementById("overlays");
const Modal = (props) => {
  return(
    <div>
      {ReactDOM.createPortal(<Backdrop />, PortalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalElement)}
    </div>
  )
};
export default Modal;
