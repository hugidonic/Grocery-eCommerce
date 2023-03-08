import { Dispatch } from "redux";
import { NotificationActions, NotificationTypes } from "./notifications.actionTypes";


export const createNotification = () => (dispatch: Dispatch<NotificationActions>) => {
  
}

export const clearAllNotifications = () => (dispatch: Dispatch<NotificationActions>) => {
  dispatch({
    type: NotificationTypes.CLEAR_ALL_NOTIFICATIONS
  })
}