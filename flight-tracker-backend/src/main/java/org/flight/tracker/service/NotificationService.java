package org.flight.tracker.service;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import org.flight.tracker.model.request.NotificationMessageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    @Autowired
    private FirebaseMessaging firebaseMessaging;

    public String sendNotificationByToken(NotificationMessageRequest notificationMessageRequest) throws Exception{
        Notification notification = Notification.builder().setTitle(notificationMessageRequest.getTitle()).setBody(notificationMessageRequest.getBody()).build();

        Message message = Message.builder().setToken(notificationMessageRequest.getRecipientToken()).setNotification(notification).build();

        firebaseMessaging.send(message);

        return "yes";
    }

}
