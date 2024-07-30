package org.flight.tracker.controller;

import org.flight.tracker.model.request.NotificationMessageRequest;
import org.flight.tracker.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/notification")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @PostMapping
    public String sendMessage(@RequestBody final NotificationMessageRequest notificationMessageRequest) throws Exception{
        return notificationService.sendNotificationByToken(notificationMessageRequest);
    }
}
