import * as Types from "../constants/ActionType";
import * as Message from "../constants/Message";
const initialState = Message.MSG_WELLCOME;

export default (state = initialState, { type, message }) => {
  switch (type) {
    case Types.CHANGE_MESSAGE:
      return message;

    default:
      return state;
  }
};
