package org.flight.tracker;

import bsh.classpath.BshClassPath;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.FirebaseMessaging;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.freemarker.FreeMarkerAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableAutoConfiguration(exclude = { FreeMarkerAutoConfiguration.class })
@EntityScan("org.flight.tracker.*")
@EnableJpaRepositories("org.flight.tracker.*")
public class FlightTrackerApplication {

	@Bean
	FirebaseMessaging firebaseMessaging() throws Exception {
		GoogleCredentials googleCredentials = GoogleCredentials.fromStream(new ClassPathResource("flight-tracker-2e190-firebase-adminsdk-oz735-96323e7653.json").getInputStream());
		FirebaseApp app = FirebaseApp.initializeApp(FirebaseOptions.builder().setCredentials(googleCredentials).build(), "flight-tracker");
		return FirebaseMessaging.getInstance(app);
	}

	public static void main(String[] args) {

		SpringApplication.run(FlightTrackerApplication.class, args);
	}

}
