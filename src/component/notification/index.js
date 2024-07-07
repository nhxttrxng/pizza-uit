import { Notification } from "kintone-ui-component";

const notification = new Notification({
    text: 'Error occurred!',
    type: 'danger',
    className: 'options-class',
    duration: 2000,
    container: document.body
  });


const showNoti = (text, type)=>{
    notification.text= text;
    notification.type = type;
    notification.open()
}

export default showNoti;