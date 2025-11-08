package com.bookingmx.reservations;

import com.bookingmx.reservations.exceptions.ReservationException;
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class ReservationServiceTest {

    private ReservationService service;

    @BeforeEach
    void setUp() {
        service = new ReservationService();
    }

    @Test
    @DisplayName("Should create a reservation successfully")
    void testCreateReservationSuccess() throws ReservationException {
        boolean result = service.createReservation(1, "Carlos Perez");
        assertTrue(result);
        assertEquals("Carlos Perez", service.getReservation(1));
    }

    @Test
    @DisplayName("Should fail if the ID already exists")
    void testCreateReservationDuplicateId() throws ReservationException {
        service.createReservation(1, "Carlos Perez");
        assertThrows(ReservationException.class, () ->
            service.createReservation(1, "Ana Gomez"));
    }

    @Test
    @DisplayName("Should edit an existing reservation")
    void testEditReservation() throws ReservationException {
        service.createReservation(1, "Carlos Perez");
        boolean result = service.editReservation(1, "Ana Gomez");
        assertTrue(result);
        assertEquals("Ana Gomez", service.getReservation(1));
    }

    @Test
    @DisplayName("Should fail when trying to edit a non-existent reservation")
    void testEditReservationNotFound() {
        assertThrows(ReservationException.class, () ->
            service.editReservation(99, "Pedro"));
    }

    @Test
    @DisplayName("Should cancel an existing reservation")
    void testCancelReservation() throws ReservationException {
        service.createReservation(1, "Carlos");
        boolean result = service.cancelReservation(1);
        assertTrue(result);
        assertNull(service.getReservation(1));
    }

    @Test
    @DisplayName("Should throw an exception when canceling a non-existent reservation")
    void testCancelReservationNotFound() {
        assertThrows(ReservationException.class, () ->
            service.cancelReservation(10));
    }

    @Test
    @DisplayName("Should fail when the customer's name is null")
    void testCreateReservationNullName() {
        assertThrows(ReservationException.class, () -> 
            service.createReservation(2, null)
        );
    }

    @Test
    @DisplayName("Should fail when the customer's name is empty")
    void testCreateReservationEmptyName() {
        assertThrows(ReservationException.class, () -> 
            service.createReservation(3, " ")
        );
    }

    @Test
    @DisplayName("Should return null when retrieving a non-existent reservation")
    void testGetNonExistentReservation() {
        assertNull(service.getReservation(999));
    }
}